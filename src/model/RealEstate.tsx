import Agent from "./Agent"
import Tour from "./Tour"
import RealEstateType from "./enums/RealEstateType"
import TransactionType from "./enums/TransactionType"
import Agency from "./Agency"

type RealEstate = {
    id: number,
    location: string,
    surfaceArea: number,
    price: number,
    images: string[],
    viewCount: number,
    rating: number,
    tours: Tour[],
    realEstateType: RealEstateType,
    transactionType: TransactionType,
    active: boolean,
    agent: Agent,
    agency: Agency;
}

export default RealEstate;