# gitlab-tags-cli

This is just a CLI tool I use in my job to show last tags on a repository with some informations like : 
- author
- branch
- commit message
- ...

## Run it with installation

~~~bash
deno run --allow-net mod.ts --project=<your-project-id> --token=<your-token> --url=<your-gitlab-url> --limit=<limit:optionnal>
~~~

