import User from "./User";

type Agent = User & {
    averageRating?: number | null
}

export default Agent;