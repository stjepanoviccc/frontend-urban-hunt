import Role from "./enums/Role";

type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    address: string,
    username: string,
    password: string,
    role: Role,
    active: boolean
    averageRating?: number | null;
}

export default User;
