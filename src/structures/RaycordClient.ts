import { Client } from "discord.js";
import { ClientData, ClientIntents } from "types/client";

export class RaycordClient extends Client implements ClientData {
  public token: string;
  public intents: ClientIntents;
  public prefix: string;

  public constructor(data: ClientData) {
    super({
      intents: data.intents
    })

    this.token = data.token;
    this.intents = data.intents;
    this.prefix = data.prefix;

    this.botConnect()
  }
  botConnect() {
    this.login(this.token)
  }
}