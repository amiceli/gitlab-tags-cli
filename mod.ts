import { parse } from 'https://deno.land/std/flags/mod.ts'
import { runCommand } from './command.ts'

const { args } = Deno

const parsedArgs = parse(args)
// @ts-ignore
await runCommand(parsedArgs)
