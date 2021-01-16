import ConfigValidator from './src/Config/ConfigValidator.ts'
import Logger from './src/Log/Logger.ts'
import Api from './src/Api/Api.ts'
import TagRepository from './src/Tag/TagRepository.ts'
import ProjectRepository from './src/Project/ProjectRepository.ts'
import Monitoring from './src/UI/Monitoring.ts'
import { Args } from "https://deno.land/std@0.83.0/flags/mod.ts"

const runCommand = async (commandLineArgs : Args) => {
    try {
        console.clear()
        
        const config = ConfigValidator.fromObject(commandLineArgs).validate()
        const api : Readonly<Api> = Api.fromConfig(config)
        const project = await ProjectRepository.fromApi(api).loadProject()
    
        const tagsRepository = TagRepository.fromApi(api)
        const tagsName = await tagsRepository.withProject(project).loadTags()
        const tags = await Promise.all(
            tagsName.slice(0, api.Apiconfig.limit)
                    .filter((tag : string) => {
                        return config.grep ? tag.includes(config.grep) : true
                    })
                    .map((name : string) => {
                        return tagsRepository.loadTag(name)
                    })
        )
    
        const output = Monitoring.get().withProject(project).withTags(tags).display()
    
        console.log (output)
    } catch (e) {
        Logger.error(e.message)
    }
}

export { runCommand }