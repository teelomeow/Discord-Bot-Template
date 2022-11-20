import { Client, ClientOptions, Collection } from "discord.js";

export default class CustomClient extends Client {
  constructor(client_options: ClientOptions) {
    super(client_options);

    this.events = new Collection();
    this.commands = new Collection();
  }

  events: Collection<any, any>;
  commands: Collection<any, any>;
}
