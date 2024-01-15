import Agent from "./Agent"
import Owner from "./Owner"
import Tour from "./Tour"
import RealEstate from "./RealEstate"

type Agency = {
    id: number,
    tours: Tour[],
    agents: Agent[],
    realEstates: RealEstate[],
    owner: Owner,
    report: number
}

export default Agency;