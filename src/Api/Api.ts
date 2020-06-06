import Config from "../Config/Config.ts";
import IApi from "./IApi.ts";

class Api implements IApi {

    private config : Config

    private constructor (config : Config) {
        this.config = config
    }

    public static fromConfig (config : Config) : Api {
        return new Api(config)
    }

    public async get (endpoint : string, params? : any) : Promise<any> {
        const url = new URL(`${this.baseUrl}/api/v4/${endpoint}`)

        url.search = new URLSearchParams({private_token : this.config.token}).toString()

        const response = await fetch(url.toString(), {
            method : 'GET',
        })

        return response.json()
    }

    public get Apiconfig () : Readonly<Config> {
        return this.config
    }

    private get baseUrl () : string {
        return this.config.url
    }

}

export default Api