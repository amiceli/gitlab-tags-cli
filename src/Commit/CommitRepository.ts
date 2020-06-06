import Repository from '../Api/Repository.ts'
import IApi from '../Api/IApi.ts'
import Project from '../Project/Project.ts'

class CommitRepository extends Repository {

    private project? : Project

    public static fromApi (api : IApi){
        return new CommitRepository(api)
    }

    public withProject (project : Project) {
        this.project = project

        return this
    }

    public async loadLastBranch (id : string) : Promise<string> {
        const resp : any[] = await this.api.get(`projects/${this.project?.id}/repository/commits/${id}/refs`)

        return resp.find((t : any) => {
            return t.type === 'branch'
        })?.name
    }
}

export default CommitRepository
