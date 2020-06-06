import { bgBlue, red, bold } from "https://deno.land/std/fmt/colors.ts"

abstract class Logger {

    public static error (msg : string) {
        console.error(red(`[ERROR] : ${msg}`))
    }

}

export default Logger