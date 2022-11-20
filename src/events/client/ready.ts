import CustomClient from "../../extensions/custom-client";
import * as Logger from "../../utils/logger";

module.exports = {
  name: "ready",
};

const client: CustomClient = require("../../app");

client.on("ready", async () => {
  Logger.info(`${client?.user?.tag} is up and running!`);
});
