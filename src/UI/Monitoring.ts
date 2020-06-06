import Project from "../Project/Project.ts";
import Tag from "../Tag/Tag.ts";
import { bold, magenta, red, underline, cyan, gray} from "https://deno.land/std/fmt/colors.ts"

class Monitoring {

    private project? : Project

    private tags? : Tag[]

    public static get () {
        return new Monitoring()
    }

    public withProject (project : Project) {
        this.project = project

        return this
    }

    public withTags (tags : Tag[]) {
        this.tags = tags

        return this
    }

    public display () {
        if (!this.project) {
            throw new Error(bold(red('Project is not defined')))
        }

        return `
    Project : ${ bold( magenta( this.project.name) ) }
    Url     : ${bold( magenta( underline (this.project.url) ) )}

    ${underline('TAGS')}

    ${this.tags?.map((tag : Tag) => this.outputTag(tag)).join('')}
        `
    }

    public outputTag (tag : Tag) : string {
        return `
        ${bold(cyan(tag.name))}

        ${gray('Commit')}  : ${tag.commitId}
        ${gray('Message')} : ${this.outputMessage(tag.commitMessage)}
        ${gray('Author')}  : ${tag.author}
        ${gray('Date')}    : ${tag.date}
        ${gray('Branche')} : ${tag.brancheName}
        `
    }

    public outputMessage (message : string) : string {
        const text = message.replace(/[\r\n]/g, '')

        if (message.length > 70) {
            return `${text.substring(0, 70)}...`
        }

        return text
    }
}

export default Monitoring