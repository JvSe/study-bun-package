import { Command } from "commander";

export const add = new Command()
  .name("add-components")
  .description("testando adicionar comandos pelo console")
  .argument("[components...]", "array de coisas a adicionar")
  .action(async (components) => {
    console.log("components escritos =>", components);
  });
