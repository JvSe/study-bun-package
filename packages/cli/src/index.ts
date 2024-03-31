import { Command } from "commander";
import figlet from "figlet";
import { add } from "./commands/add";

export async function main() {
  const program = new Command()
    .name("console")
    .description("comando main")
    .action(() => {
      console.log(figlet.textSync("NextMed Themes"));
    });

  program.addCommand(add);

  program.parse();
}
main();
