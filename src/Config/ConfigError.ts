class ConfigError extends Error {

    constructor (missingKey : string) {
        super(`missing ${missingKey} parameters`)
    }

}

export default ConfigError