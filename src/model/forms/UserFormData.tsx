import Role from "../enums/Role"

type UserFormData = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    address: string,
    username: string,
    password: string,
    role: Role,
    agencyId?: number
}

export default UserFormData;