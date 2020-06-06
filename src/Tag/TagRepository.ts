import IApi from "../Api/IApi.ts"
import Repository from '../Api/Repository.ts'
import Project from "../Project/Project.ts"
import Tag from "./Tag.ts"
import CommitRepository from "../Commit/CommitRepository.ts"

class TagRepository extends Repository {

    private project? : Project

    public static fromApi (api : IApi) {
        return new TagRepository(api)
    }

    public async loadTags () : Promise<string[]> {
        const tags = await this.api.get(`projects/${this.project?.id}/repository/tags`)

        return tags.map((t : any) => t.name)
    }

    public async loadTag (name : string) : Promise<Tag> {
        if (!this.project) {
            throw new Error()
        }

        const response = await this.api.get(`projects/${this.project?.id}/repository/tags/${name}`)
        const tag = Tag.fromObject(response)

        const lastBranch = await CommitRepository.fromApi(this.api).withProject(this.project).loadLastBranch(tag.commitId)
        

        return tag.withBranch(lastBranch)
    }

    public withProject (project : Project) {
        this.project = project

        return this
    }
}

export default TagRepository