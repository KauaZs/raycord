import { GatewayIntentBits } from "discord.js";
import { RaycordClient } from "structures/RaycordClient";
import dotenv from 'dotenv'
import { Raycord } from "structures/Raycord";

dotenv.config()
const client = new RaycordClient({
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
    prefix: '1',
    token: process.env.TOKEN as string
})

export = new Raycord(client, {
    fileExtension: '.ts',
    rootDirectory: './src/commands',
    useCommandCategorys: true
})