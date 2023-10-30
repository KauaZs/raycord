import { GatewayIntentBits, IntentsBitField } from "discord.js";

export type ClientIntents = IntentsBitField[] | GatewayIntentBits[];

export interface ClientData {
  token: string,
  prefix: string,
  intents: ClientIntents 
}