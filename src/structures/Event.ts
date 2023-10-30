import { Events } from "discord.js";
import ClientStructure from "./Client";

export default class Event {
    
    constructor(public client: ClientStructure, public name: Events) {
        this.name = name
        this.client = client
    }
}