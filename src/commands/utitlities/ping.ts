import { Message } from "discord.js";
import ClientStructure from "structures/Client";
import Command from "structures/Command"

export default class Ping extends Command {
    constructor(client: ClientStructure) {
        super(client, {
            name: 'ping',
            aliases: ['latência']
        })
        this.client = client
    }
    run = (message: Message, args: string[]) =>  {
        message.reply('oi')
    }
}   