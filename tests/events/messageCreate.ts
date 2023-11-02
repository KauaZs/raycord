import { Events } from "discord.js";
import { Raycord } from "../../src/structures/Raycord";

export default Raycord.getInstance().event({
    type: Events.MessageCreate,
    once: false
}, (message) => {
    const prefix = Raycord.getInstance().client.prefix;
    const commandData = Raycord.getInstance().commands

    if(!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(' ')
    
    const command = commandData.get(args[0]) || commandData.find(x => x.aliases?.includes(args[0]))

    if(command) {
        if(command.permissions &&
            !message.member.permissions.has(command.permissions.flags)) return message.reply(command.permissions.message)

        args.shift()
        command.runner(message, args)
    }
})