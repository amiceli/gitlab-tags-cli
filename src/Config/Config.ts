class Config {

    public readonly project : number
    public readonly token : string
    public readonly url : string
    public readonly limit? : number
    public readonly grep? : string

    constructor (project : number, token : string, url : string, limit? : number, grep? : string) {
        this.project = project
        this.token = token
        this.url = url
        this.limit = limit || 5
        this.grep = grep
    }

}

export default Config