import { GatewayIntentBits } from "discord.js";
import dotenv from 'dotenv'
import { Raycord } from "../src/structures/Raycord";

dotenv.config()

const raycord = Raycord.getInstance({
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
}, {
    fileExtension: '.ts',
    rootDirectory: './tests',
    useCommandCategorys: true
})

raycord.setup();

