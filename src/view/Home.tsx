import axios from "axios";
import { API_ENDPOINTS } from "../config/apiConfig";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
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
  const [data, setData] = useState<RealEstate[]>([]);
  const { user } = useAuth();
  const [isFilteringFormActive, setIsFilteringFormActive] = useState(false);
  const toggleFilteringForm = () => {
    setIsFilteringFormActive(prev => !prev);
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
        <div className="pt-12">
          <form className={`${isFilteringFormActive ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}  transition duration-300`}>
            <div className="flex flex-col lg:flex-row justify-between gap-x-12 gap-y-8">
              <FormWrap label="Location" className="flex justify-center items-center">
                <input name="location" type="text" className="my-input max-w-64" />
              </FormWrap>
              <FormWrap label="Surface" className="flex justify-center items-center">
                <input name="surfaceFrom" type="text" className="my-input max-w-64 text-center" placeholder="Surface from" />
                <input name="surfaceTo" type="text" className="my-input max-w-64 text-center" placeholder="Surface to" />
              </FormWrap>
              <FormWrap label="Price" className="flex justify-center items-center">
                <input name="priceFrom" type="text" className="my-input max-w-64 text-center" placeholder="Price from" />
                <input name="priceTo" type="text" className="my-input max-w-64 text-center" placeholder="Price to" />
              </FormWrap>
              <FormWrap label="Transaction Type" className="flex justify-center items-center">
                <select name="transactionType" className="my-input max-w-64">
                  <option value="Sale">Sale</option>
                  <option value="Rent">Rent</option>
                </select>
              </FormWrap>
              <FormWrap label="Real Estate Type" className="flex justify-center items-center">
                <select name="realEstateType" className="my-input max-w-64">
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Office">Office</option>
                </select>
              </FormWrap>
            </div>
            <div className="mt-6">
              <button type="submit" className="my-primary-btn">Apply</button>
              <button type="submit" className="ml-4 my-ghost-btn">Clear</button>
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
              <form>
                <input name="date" type="date" className="border-2 border-primary rounded-lg p-2 w-36" />
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