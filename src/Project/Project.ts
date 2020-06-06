class Project {

    public readonly id : number

    public readonly name : string

    public readonly url : string

    private constructor (id : number, name : string, url : string) {
        this.id = id
        this.name = name
        this.url = url
    }

    public static fromObject (project : any) {
        return new Project(project.id, project.name, project.web_url)
    }

}

export default Project