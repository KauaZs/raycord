import { PermissionFlagsBits } from "discord.js";
import { Raycord } from "../../src/structures/Raycord";

export default Raycord.getInstance().command({
  name: 'ping',
  category: 'utils',
  aliases: ['pong'],
  permissions: {
    flags: PermissionFlagsBits.Administrator,
    message: 'oi'
  }
}, (message, args) => {
  return message.reply("Pong!");
}) 