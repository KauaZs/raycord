import { GatewayIntentBits } from "discord.js";
import dotenv from 'dotenv'
import { Raycord } from "../src/structures/Raycord";
import discord from 'discord.js'
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
    prefix: '.',
    token: process.env.TOKEN as string
}, {
    fileExtension: '.ts',
    rootDirectory: './tests',
    useCommandCategorys: true
})

raycord.setup();

discord.ApplicationCommand