import { Events } from "discord.js";
import { Raycord } from "../../src/structures/Raycord";

export default Raycord.getInstance().event({
    type: Events.ClientReady,
    once: true
}, () => {
    console.log('bot on')
})