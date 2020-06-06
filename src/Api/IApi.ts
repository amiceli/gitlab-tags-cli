import Config from "../Config/Config.ts"

export default interface IApi {

    readonly Apiconfig  : Readonly<Config>
    
    get (endpoint : string, patams? : any) : Promise<any>

}