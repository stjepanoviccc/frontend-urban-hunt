const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080, binary: true });
const connectedAgents = new Map();
const connectedGuests = new Map();

server.on("connection", (ws) => {
    console.log("New client connected !");
    // reply
    ws.on('message', (message) => {
        console.log("SALJE SE ALI KOJI KKK")
        console.log(message);
        if (message instanceof Buffer) {
            // Convert the binary data to a string
            const messageString = message.toString();
            console.log(messageString);
            const { type, id } = JSON.parse(messageString);

            switch (type) {
                case "AGENT":
                    connectedAgents.set(id, { ws });
                    break;
                
                case "GUEST":
                    connectedGuests.set(id, { ws });
                    break; 

                case "GUEST_SUBMIT_TOUR":
                    sendNotification(id);
                    break;

                case "FINISHED_TOUR_RATE_AGENT":
                    console.log('USLO JE OVDE')
                    const {guestId, realEstateId} = JSON.parse(messageString);
                    sendAgentForRateNotification(id, guestId, realEstateId);
                    break;

                default:
                    console.error(`Unknown message type: ${type}`);
            }

        }
    });
})

const sendNotification = (agentId) => {
    const agentInfo = connectedAgents.get(agentId);
    if (agentInfo) {
        console.log(`Sending notification to agent ${agentId}`);
        const type = "MESSAGE"
        agentInfo.ws.send(JSON.stringify({ notification: "New Tour Request Available!", type }));
    } else {
        console.error(`Agent with id ${agentId} not found`);
    }
}

const sendAgentForRateNotification = (agentId, guestId, realEstateId) => {
    const guestInfo = connectedGuests.get(guestId);
    if(guestInfo) {
        console.log(`Sending notification to guest ${guestId}`);
        const type = "RATING"
        guestInfo.ws.send(JSON.stringify({notification: "Your Tour Has Been Finished.", agentId: agentId, type, realEstateId}))
    } else {
        console.error(`Guest with id ${guestId} not found`)
    }
}