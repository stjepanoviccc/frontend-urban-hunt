import axios from "axios";
import { API_ENDPOINTS } from "../config/apiConfig";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useTopBar } from "../context/TopBarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-solid-svg-icons";
import Wrap from "../components/UI/Wrap"
import FormWrap from "../components/UI/FormUI/FormWrap";
import RealEstate from "../model/RealEstate";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { imageBasePath } from "../config/imgConfig";

const Home = () => {
  const [count,setCount] = useState<number>(0);
  const [searchData, setSearchData] = useState<any>({
    location: '',
    surfaceFrom: 0,
    surfaceTo: 100000,
    priceFrom: 0,
    priceTo: 100000,
    transactionType: 'SALE',
    realEstateType: 'HOUSE',
  })
  const [formData, setFormData] = useState<any>({
    realEstateId: 0,
    accepted: false,
    finished: false,
    startDate: 1
  })

  const { show } = useTopBar();
  const [data, setData] = useState<RealEstate[]>([]);
  const { user } = useAuth();
  const [isFilteringFormActive, setIsFilteringFormActive] = useState(false);

  const toggleFilteringForm = () => {
    setIsFilteringFormActive(prev => !prev);
  };

  const submitCreateTour = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (formData.startDate == 1) {
      show("Please select start date!", "NOT");
      return;
    }

    try {
      await axios.post(API_ENDPOINTS.CREATE_TOUR, formData, {
        headers: {
          'Authorization': `Bearer ${user?.accessToken}`,
        },
      })
      show("New Tour Has Been Added Successfully!", "SUCCESS");

    } catch (error) {
      show("You must be logged in to send request for tour.", "NOT");
    }
  }

  const updateFormData = (realEstateId: number, startTime: number) => {
    setFormData({
      realEstateId,
      accepted: false,
      finished: false,
      startTime,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSearchData((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setSearchData((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submitSearchFormData = async () => {
    try {
      console.log(searchData);
      const response = await axios.get(API_ENDPOINTS.FIND_ALL_REAL_ESTATES + "Filtered" +
        "?location=" + searchData.location +
        "&surfaceFrom=" + searchData.surfaceFrom +
        "&surfaceTo=" + searchData.surfaceTo +
        "&priceFrom=" + searchData.priceFrom +
        "&priceTo=" + searchData.priceTo +
        "&realEstateType=" + searchData.realEstateType +
        "&transactionType=" + searchData.transactionType
        , {

          headers: {
            'Authorization': `Bearer ${user?.accessToken}`,
          },
        })
      setData(response.data);
    } catch (error) {
      console.error('Error submitting search data:', error);
    }
  };

  useEffect(() => {
    const fetchRealEstates = async () => {
      try {
        const response = await axios.get(API_ENDPOINTS.FIND_ALL_REAL_ESTATES, {
          headers: {
            'Authorization': `Bearer ${user?.accessToken}`,
            'Content-Type': 'application/json'
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRealEstates();
  }, [user]);

  useEffect(() => {
    if(count > 0) {
      submitSearchFormData();
      setCount(prev => prev+1);
    }
  }, [searchData]);

  return (
    <Wrap>
      <div className="pt-12 text-center">
        <h1 className="text-4xl">Explore Real Estates</h1>
      </div>
      <div className="pt-12 text-center">
        <p className="text-xl">You can use filters to find specific type of real estate</p>
        <p className="text-xl">Click to show more</p>
        <button className="my-ghost-btn mt-4" onClick={toggleFilteringForm}>
          {isFilteringFormActive ? 'Hide' : 'Show'}
          <FontAwesomeIcon icon={faCaretDown} size={"lg"} className="pl-2" />
        </button>
        <div className="py-12">
          <form className={`${isFilteringFormActive ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}  transition duration-300`}>
            <div className="flex flex-col lg:flex-row justify-between gap-x-12 gap-y-8">
              <FormWrap label="Location" className="flex justify-center items-center">
                <input name="location" type="text" className="my-input max-w-64" value={searchData.location} onChange={handleInputChange} />
              </FormWrap>
              <FormWrap label="Surface" className="flex justify-center items-center">
                <input name="surfaceFrom" type="number" min="0" className="my-input max-w-64 text-center" placeholder="Surface from" value={searchData.surfaceFrom} onChange={handleInputChange} />
                <input name="surfaceTo" type="number" min="0" className="my-input max-w-64 text-center" placeholder="Surface to" value={searchData.surfaceTo} onChange={handleInputChange} />
              </FormWrap>
              <FormWrap label="Price" className="flex justify-center items-center">
                <input name="priceFrom" type="number" min="0" className="my-input max-w-64 text-center" placeholder="Price from" value={searchData.priceFrom} onChange={handleInputChange} />
                <input name="priceTo" type="number" min="0" className="my-input max-w-64 text-center" placeholder="Price to" value={searchData.priceTo} onChange={handleInputChange} />
              </FormWrap>
              <FormWrap label="Transaction Type" className="flex justify-center items-center">
                <select name="transactionType" className="my-input max-w-64" value={searchData.transactionType} onChange={handleSelectChange}>
                  <option value="SALE">Sale</option>
                  <option value="RENT">Rent</option>
                </select>
              </FormWrap>
              <FormWrap label="Real Estate Type" className="flex justify-center items-center">
                <select name="realEstateType" className="my-input max-w-64" value={searchData.realEstateType} onChange={handleSelectChange}>
                  <option value="HOUSE">House</option>
                  <option value="APARTMENT">Apartment</option>
                  <option value="OFFICE">Office</option>
                </select>
              </FormWrap>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 text-center py-12">
          {data.map((dataItem, index) => (
            <div key={index} className="border-2 border-primary rounded-lg relative hover:scale-105 transition duration-300">
              <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination]} className="mySwiper" >
                {dataItem.images.map((perImage, index) => (
                  <SwiperSlide key={index}>
                    <img src={imageBasePath + perImage} className="rounded-t-md w-full border-b-2 border-primary w-128 h-64" alt="real-estate-img"></img>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="bg-red-600 z-10 text-white absolute top-0 right-0 p-3 rounded-tr-md border-l-2 border-b-2 border-primary rounded-bl-lg">
                FOR {dataItem.transactionType}
              </div>
              <p className="text-lg pt-2">Location: {dataItem.location}</p>
              <p className="text-lg">Surface: {dataItem.surfaceArea}m2</p>
              <p className="text-lg">Price: {dataItem.price}$</p>
              <p className="text-lg pb-2">Type: {dataItem.realEstateType}</p>
              <p className="text-lg font-bold pb-2 border-t-2 border-primary pt-2">Schedule A Tour?</p>
              <form onSubmit={submitCreateTour}>
                <input
                  name="startTime"
                  type="datetime-local"
                  className="border-2 border-primary rounded-lg p-2 w-50"
                  onChange={(e) => updateFormData(dataItem.id, new Date(e.target.value).getTime())}
                />
                <button type="submit" className="my-ghost-btn ml-4 my-4">Send</button>
              </form>
              <div className="border-t-2 border-primary py-2 flex justify-around">
                <button className="border-2 border-primary p-3 rounded-full">
                  <FontAwesomeIcon icon={faThumbsUp} className="pr-2" />LIKE
                </button>
                <button className="border-2 border-primary p-3 rounded-full">
                  <FontAwesomeIcon icon={faThumbsDown} className="pr-2" />DISS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  )
}

export default Home;