import Repository from '../Api/Repository.ts'
import IApi from '../Api/IApi.ts';
import Project from './Project.ts';

class ProjectRepository extends Repository {

    public static fromApi (api : IApi) {
        return new ProjectRepository(api)
    }

    public async loadProject () : Promise<any> {
        const data = await this.api.get(`projects/${this.api.Apiconfig.project}`)

        return Project.fromObject(data)
    }

}

export default ProjectRepository