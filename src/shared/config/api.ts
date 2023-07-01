import { getEnvVar } from "./functions"

export const API_URL = getEnvVar("VITE_API_URL")
export const API_PROXY_URL = getEnvVar("VITE_PROXY_API_URL")


export const api = {
	API_URL,
	API_PROXY_URL,
}

export default api
