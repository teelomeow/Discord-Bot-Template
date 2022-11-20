import { EmbedBuilder } from "discord.js";
import CustomClient from "../../extensions/custom-client";

module.exports = {
  name: "activedev",
  description: "Replies with how to get the active developer badge",

  run: async (client: CustomClient, interaction: any) => {
    return interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setThumbnail("https://i.imgur.com/b5os47U.png")
          .setDescription(
            "\n".concat(
              "__**Where's my badge?**__\n",
              "Eligibility for the badge is checked by Discord in intervals, ",
              "at this moment in time, 24 hours is the recommended time to wait before trying.\n\n",
              "__**It's been 24 hours, now how do I get the badge?**__\n",
              "If it's already been 24 hours, you can head to ",
              "https://discord.com/developers/active-developer and fill out the 'form' there.\n\n",
              "__**Active Developer Badge Updates**__\n",
              "Updates regarding the Active Developer badge can be found in the ",
              "Discord Developers server -> discord.gg/discord-developers - in the #active-dev-badge channel."
            )
          )
          .setColor("Purple"),
      ],
      ephemeral: true,
    });
  },
};
