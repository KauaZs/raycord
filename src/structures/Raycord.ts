import { RaycordCommand } from "./RaycordCommand";
import { Collection, Events } from 'discord.js';
import { globSync } from 'glob'
import { RaycordEvent } from "./RaycordEvent";
import { RaycordClient } from "./RaycordClient";
import { CommandData, CommandRunner } from "types/command";
import { EventData, EventRunner } from "types/event";
import { ClientData } from "types/client";
import { RaycordConfig } from "types/raycord";

export class Raycord {
  public static instance: Raycord;
  public client: RaycordClient;
  public commands: Collection<string, RaycordCommand>;
  public events: Collection<Events, RaycordEvent>;
  
  public static getInstance(client?: ClientData, config?: RaycordConfig) {
    if (Raycord.instance) return this.instance;

    if(!client && !config) throw new Error('Expected client data and raycord config!');
    
    Raycord.instance = new Raycord(client as ClientData, config as RaycordConfig)
    return Raycord.instance
  }

  private constructor(client: ClientData, public config: RaycordConfig) {
    this.commands = new Collection();
    this.events = new Collection();
    this.client = new RaycordClient(client);
  }

  public command(data: CommandData, runner: CommandRunner) {
    return new RaycordCommand(data, runner);
  }

  public event(data: EventData, runner: EventRunner) {
    return new RaycordEvent(data, runner);
  }

  public setup() {
    const { fileExtension, rootDirectory } = this.config;
    const pathCommands = `${rootDirectory}/commands**/*${fileExtension}`;
    const pathEvents = `${rootDirectory}/events/*${fileExtension}`

    globSync(pathCommands).forEach(async file => {
      const { default: command } = await import(`../../${file}`);
      this.commands.set(command.name, command);
      
      console.log('Loading command: ' + command.name);
    })

    globSync(pathEvents).forEach(async file => {  
      const { default: event } = await import(`../../${file}`)
      
      if(!event.once) this.client.on(event.type, event.runner)
      else this.client.once(event.type, event.runner)
    })
  }
}