import { Message } from "discord.js";
import ClientStructure from "./Client";
import commandOptions from "./types/commandOptions";

export default class Command {
    [x: string]: any;
    
    constructor(public client: ClientStructure, public options: commandOptions) {
        this.options = options
        this.client = client
        
    }
    
}