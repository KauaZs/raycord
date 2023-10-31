import { Raycord } from "../../src/structures/Raycord";

export default Raycord.getInstance().command({
  name: 'ping',
  category: 'utils',
  aliases: ['pong']
}, ({ message }) => {
  return message.reply("Pong!");
}) 