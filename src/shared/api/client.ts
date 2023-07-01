import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"
import axios from "axios"
import { API_URL } from "@/shared/config"
import { stringify } from "qs"

const singletonEnforcer = Symbol()

class Client {
	protected readonly client: AxiosInstance
	private static _instance: Client

	private constructor(enforcer: any) {
		if (enforcer !== singletonEnforcer) {
			throw new Error('Cannot initialize Api Client single instance')
		}

		this.client = axios.create({
			baseURL: API_URL
		})

		this._initInterceptors()
	}

	public static getInstance(): Client {
		return this._instance || (this._instance = new Client(singletonEnforcer))
	}

	public request(method: string): (url: string, body?: any) => Promise<AxiosResponse> {
		return (url: string, body?: any) => {
			const config: AxiosRequestConfig = {
				url,
				method
			}

			if (body) {
				if (method !== 'get') {
					config.data = body
				} else {
					config.url = `${config.url}?${stringify(body)}`
				}
			}

			return this.client.request(config)
		}
	}

	public get = this.request('GET')
	public post = this.request('POST')
	public put = this.request('PUT')
	public delete = this.request('DELETE')

	private _initInterceptors() {
		this.client.interceptors.request.use(
				Client._handleRequest,
				Client._handleRequestError
		)

		this.client.interceptors.response.use(
				Client._handleResponse,
				Client._handleResponseError
		)
	}

	private static _handleRequest(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
		return config
	}

	private static _handleRequestError(error: AxiosError): Promise<AxiosError> {
		return Promise.reject(error)
	}

	private static _handleResponse(response: AxiosResponse): AxiosResponse {
		return response
	}

	private static _handleResponseError(error: AxiosError): Promise<AxiosError> {
		return Promise.reject(error)
	}
}

const client = Client.getInstance()

export {
	client
}
