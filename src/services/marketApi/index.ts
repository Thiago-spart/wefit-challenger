import axios from "axios";

export const marketApi = axios.create({
	baseURL: "http://localhost:3333",
});
