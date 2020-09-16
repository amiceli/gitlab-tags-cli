import Config from "./Config.ts"
import ConfigError from "./ConfigError.ts"

class ConfigValidator {
    
    private configAsObject : any

    private constructor (configAsObject : any) {
        this.configAsObject = configAsObject
    }

    public static fromObject (configAsObject : any) {
        return new ConfigValidator(configAsObject)
    }

    public validate () : Config {
        const { project, token, url, limit, grep } = this.configAsObject

        if (!project) {
            throw new ConfigError('project')
        }

        if (!token) {
            throw new ConfigError('token')
        }

        if (!url) {
            throw new ConfigError('url')
        }

        return new Config(project, token, url, limit, grep)
    }
}

export default ConfigValidator