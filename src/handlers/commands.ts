import { Routes, REST, ClientUser } from "discord.js";
import CustomClient from "../extensions/custom-client";
import * as Logger from "../utils/logger";

const glob = require("glob");

module.exports = (client: CustomClient) => {
  glob("./src/commands/**/*.ts", (err: any, files: any) => {
    files.forEach((file: string) => {
      const node = require(`..${file.split("./src")[1]}`);

      if (node.name && node.description) {
        client.commands.set(node.name, node);
        Logger.info(`Loaded command: ${node.name}`);
      } else {
        Logger.error(
          `${file}, commands must have a name and description property`
        );
      }
    });

    const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN!);

    rest.put(Routes.applicationCommands(process.env.BOT_ID!), {
      body: client.commands,
    });
  });
};
