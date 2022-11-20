import CustomClient from "../../extensions/custom-client";
import * as Logger from "../../utils/logger";

module.exports = {
  name: "interaction",
};

const client: CustomClient = require("../../app");

client.on("interactionCreate", async (interaction) => {
  if (interaction.isChatInputCommand()) {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      command.run(client, interaction);
    } catch (err: any) {
      Logger.error(err);
    }
  }
});
