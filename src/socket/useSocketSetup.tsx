import { useEffect } from "react";
import socket from "./socket";
import { useAuth } from "../context/AuthContext";

const useSocketSetup = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log('asd');
    // Connect the socket when the component mounts
    socket.connect();

    const handleConnectError = () => {
      console.log("connect_err");
    };

    const handleConnect = () => {
      console.log("connected");
    };

    // Add event listeners
    socket.on("connect_error", handleConnectError);
    socket.on("connect", handleConnect);

    // Cleanup function
    return () => {
      // Remove event listeners
      socket.off("connect_error", handleConnectError);
      socket.off("connect", handleConnect);

      // Disconnect the socket when the component unmounts
      socket.disconnect();
    };
  }, [user]);
};

export default useSocketSetup;
