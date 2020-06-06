class Tag {
 
    public readonly name : string

    public readonly commitMessage : string

    public readonly commitId : string

    public readonly author : string

    public readonly date : string

    public brancheName? : Readonly<string>

    private constructor (name : string, commitMessage : string, commitId : string, author : string, date : string) {
        this.name = name
        this.commitId = commitId
        this.commitMessage = commitMessage
        this.author = author
        this.date = date
    }

    public static fromObject (tag : any) {
        return new Tag(
            tag.name,
            tag.commit.message,
            tag.commit.id,
            tag.commit.author_name,
            tag.commit.committed_date,
        )
    }

    public withBranch (value : string) {
        this.brancheName = value

        return this
    }

}

export default Tag