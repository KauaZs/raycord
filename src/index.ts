import { BitField, GatewayIntentBits, IntentsBitField } from "discord.js";
import ClientStructure from "structures/Client";
import dotenv from 'dotenv'

dotenv.config()
const client = new ClientStructure({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent,
    ],
    token: process.env.TOKEN as string
})

client.setupBot()
