const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080, binary: true });
const connectedClients = new Map();

server.on("connection", (ws) => {
    console.log("New client connected !");
    console.log(connectedClients)
    // reply
    ws.on('message', (message) => {
        if (message instanceof Buffer) {
            // Convert the binary data to a string
            const messageString = message.toString();
            console.log(messageString);
            const { type, agentId } = JSON.parse(messageString);

            switch (type) {
                case "AGENT":
                    connectedClients.set(agentId, { ws });
                    break;

                case "GUEST_SUBMIT_TOUR":
                    sendNotification(agentId);
                    break;

                default:
                    console.error(`Unknown message type: ${type}`);
            }

        }
    });
})

const sendNotification = (agentId) => {
    const agentInfo = connectedClients.get(agentId);
    if (agentInfo) {
        console.log(`Sending notification to agent ${agentId}`);
        agentInfo.ws.send(JSON.stringify({ notification: "New Tour Request Available!" }));
    } else {
        console.error(`Agent with id ${agentId} not found`);
    }
}

/*
try {
  const { realEstateId, agentId } = JSON.parse(messageString);
  connectedClients.set(agentId || null, { ws });
  if(realEstateId) {
      sendNotification(agentId);
  }

} catch (error) {
  console.error('Error parsing message:', error);
}
*/