import { EmbedBuilder } from "discord.js";

module.exports = {
  name: "ping",
  description: "Replies with the bots ping",

  run: async (client: any, interaction: any) => {
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setDescription(client.ws.ping + "ms!")
          .setColor("Purple"),
      ],
      ephemeral: true,
    });
  },
};
