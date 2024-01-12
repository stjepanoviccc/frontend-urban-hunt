import FormWrap from "../../UI/FormUI/FormWrap"

const AddNewOwner: React.FC = () => {
  return (
    <>
    <form className="flex flex-col gap-y-6 pb-12">
      <FormWrap label="Name">
        <input name="name" type="text" className="my-input" />
      </FormWrap>
      <FormWrap label="Surname">
        <input name="surname" type="text" className="my-input" />
      </FormWrap>
      <FormWrap label="Email">
        <input name="email" type="text" className="my-input" />
      </FormWrap>
      <FormWrap label="Phone">
        <input name="phone" type="tel" className="my-input" />
      </FormWrap>
      <FormWrap label="Address">
        <input name="address" type="text" className="my-input" />
      </FormWrap>
      <FormWrap label="Username">
        <input name="username" type="text" className="my-input" />
      </FormWrap>
      <FormWrap label="Password">
        <input name="password" type="password" className="my-input" />
      </FormWrap>
      <input name="role" type="hidden" value="Owner" />
      <div className="flex flex-col gap-y-2">
        <button type="submit" className="my-primary-btn">Add New Owner</button>
      </div>
    </form>
    </>
  )
}

export default AddNewOwner
