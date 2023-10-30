import { GatewayIntentBits, IntentsBitField } from "discord.js";

export default interface clientOptions {
    token: string,
    prefix?: string,
    intents: IntentsBitField[] | GatewayIntentBits[]
}