import IApi from "./IApi.ts"

abstract class Repository {

    protected api : IApi

    protected constructor (api : IApi) {
        this.api = api
    }
}

export default Repository