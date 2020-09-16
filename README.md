# gitlab-tags-cli

This is just a CLI tool to show last tags on a repository with some informations like : 
- author
- branch
- commit message
- ...

## Installation

~~~bash
deno install --allow-net https://raw.githubusercontent.com/amiceli/github-tags-cli/master/mod.ts
~~~

## Run it

~~~bash
gitlab-tags-cli --project=<your-project-id> --token=<your-token> --url=<your-gitlab-url> --limit=<limit:optionnal> --grep=<grep:optionnal>
~~~