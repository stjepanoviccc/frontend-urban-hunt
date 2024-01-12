import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Wrap from "../components/UI/Wrap"
import FormWrap from "../components/UI/FormUI/FormWrap";
import Card from "../components/UI/Card";

const Home = () => {

  const [isFilteringFormActive, setIsFilteringFormActive] = useState(false);
  const toggleFilteringForm = () => {
    setIsFilteringFormActive(prev => !prev);
  };

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
              <FormWrap label="Sell Or Rent" className="flex justify-center items-center">
              <select name="sellOrRent" className="my-input max-w-64">
                  <option value="Sell">Sell</option>
                  <option value="Rent">Rent</option>
                </select>
              </FormWrap>
              <FormWrap label="Type" className="flex justify-center items-center">
                <select name="type" className="my-input max-w-64">
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Wrap>
  )
}

export default Home;
