import { Events, Message } from "discord.js";
import ClientStructure from "structures/Client";
import Command from "structures/Command";
import Event from "structures/Event";

export default class MessageCreate extends Event {
    constructor(client: ClientStructure) {
        super(client, Events.MessageCreate)
        
        this.client = client
    }
    run = (message: Message) => {
       
        const prefix: string = '.'
      
        if (!message.content.startsWith(prefix)) return
        const args: string[] = message.content.slice(prefix.length).trim().split(" ")

        
        const command: Command | undefined = this.client.commands.get(args[0]) || this.client.commands.find(x => x.options.aliases?.includes(args[0]))
        if (!command) return
        
        args.shift()
        command.run(message, args)
    }
}