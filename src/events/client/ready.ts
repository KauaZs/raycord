import { Events } from "discord.js";
import ClientStructure from "structures/Client";
import Event from "structures/Event";

export default class Ready extends Event {
    constructor(client: ClientStructure) {
        super(client, Events.ClientReady)

        this.client = client
    }
    run = () => {
        console.log('I am online')
    }
}