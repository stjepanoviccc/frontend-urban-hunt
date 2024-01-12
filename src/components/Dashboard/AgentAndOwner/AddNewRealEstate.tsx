import FormWrap from "../../UI/FormUI/FormWrap"

const AddNewRealEstate = () => {
  return (
    <>
      <form className="flex flex-col gap-y-6 pb-12">
        <FormWrap label="Location">
          <input name="location" type="text" className="my-input" />
        </FormWrap>
        <FormWrap label="Surface">
          <input name="surface" type="number" min="1" className="my-input" />
        </FormWrap>
        <FormWrap label="Price">
          <input name="price" type="number" min="1" className="my-input" />
        </FormWrap>
        <FormWrap label="Transaction Type">
          <select name="transactionType" className="my-input">
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
          </select>
        </FormWrap>
        <FormWrap label="Real Estate Type">
          <select name="realEstateType" className="my-input">
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Office">Office</option>
          </select>
        </FormWrap>
        <FormWrap label="Image">
          <input name="image" type="file" className="my-input" />
        </FormWrap>
        <div className="flex flex-col gap-y-2">
          <button type="submit" className="my-primary-btn">Add New Real Estate</button>
        </div>
      </form>
    </>
  )
}

export default AddNewRealEstate
