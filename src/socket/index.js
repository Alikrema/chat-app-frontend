import io from "socket.io-client";
import { config } from "../config";

const SOCKET_URL = config.baseUrl;

const socket = io(SOCKET_URL);

export default socket;
