class Config {

    public readonly project : number
    public readonly token : string
    public readonly url : string
    public readonly limit? : number

    constructor (project : number, token : string, url : string, limit? : number) {
        this.project = project
        this.token = token
        this.url = url
        this.limit = limit || 5
    }

}

export default Config