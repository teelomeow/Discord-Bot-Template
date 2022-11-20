import CustomClient from "../../extensions/custom-client";

module.exports = {
  name: "interaction",
};

const client: CustomClient = require("../../app");

client.on("interactionCreate", async (interaction) => {
  if (interaction.isChatInputCommand()) {
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    command.run(client, interaction);
  }
});
