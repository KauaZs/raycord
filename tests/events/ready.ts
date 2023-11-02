import { Events} from "discord.js";
import { Raycord } from "../../src/structures/Raycord";

export default Raycord.getInstance().event({
    type: Events.ClientReady,
    once: true
}, () => {
    const client = Raycord.getInstance().client
    const guilds = client.guilds.cache

    guilds.forEach(guild => {
       // guild.commands.set(Raycord.getInstance().slashCommands)
        
    })
    
})