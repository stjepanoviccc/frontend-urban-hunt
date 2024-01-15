import Agent from "./Agent"
import Guest from "./Guest"

type Tour = {
    id: number,
    startTime: Date,
    accepted: boolean,
    finished: boolean,

    agent: Agent
    
    guest: Guest
}

export default Tour;