import CustomClient from "../extensions/custom-client";
import * as Logger from "../utils/logger";

const glob = require("glob");

module.exports = (client: CustomClient) => {
  glob("./src/events/**/*.ts", (err: any, files: any) => {
    files.forEach((file: string) => {
      const node = require(`..${file.split("./src")[1]}`);

      if (node.name) {
        client.events.set(node.name, node);
        Logger.info(`Loaded event: ${node.name}`);
      } else {
        Logger.error(`${file}, events must have a name property`);
      }
    });
  });
};
