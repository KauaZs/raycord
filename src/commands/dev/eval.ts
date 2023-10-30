import { Message } from "discord.js";
import ClientStructure from "structures/Client";
import Command from "structures/Command"

export default class Eval extends Command {
    constructor(client: ClientStructure) {
        super(client, {
            name: 'eval',
            aliases: ['e', 'ev']
        })
        this.client = client
    }
    run = async(message: Message, args: string[]) =>  {
        if(!args) return message.reply('e o código? nada ainda?')

        const code = args

        let evaled = code.join(' ')
        let msg;

        try {
            evaled = eval(evaled)
    
            if(typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            msg = await message.reply({
                content:`\`\`\`js\n${evaled.slice(0,1900)}\`\`\``,
            })
        } catch(e) {
            evaled = (e as Error).message
            msg = await message.reply({
                content:`Erro:\n\`\`\`js\n\n${evaled.slice(0,1900)}\`\`\``,
            })
        }
    }
}