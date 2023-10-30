import { RaycordCommand } from "./RaycordCommand";
import { Collection, Events } from 'discord.js';
import { RaycordEvent } from "./RaycordEvent";
import { RaycordClient } from "./RaycordClient";
import { CommandData, CommandRunner } from "types/command";
import { EventData, EventRunner } from "types/event";
import { ClientData } from "types/client";
import { RaycordConfig } from "types/raycord";

export class Raycord {
  public client: RaycordClient;
  public commands: Collection<string, RaycordCommand>;
  public events: Collection<Events, RaycordEvent>;
  
  public constructor(client: ClientData, public config: RaycordConfig) {
    this.commands = new Collection();
    this.events = new Collection();
    this.client = new RaycordClient(client);
  }

  public command(data: CommandData, runner: CommandRunner) {
    const command = new RaycordCommand(data, runner);
    this.commands.set(command.name, command);
  }

  public event(data: EventData, runner: EventRunner) {
    const event = new RaycordEvent(data, runner);
    this.events.set(data.type, event);
  }

  public setup() {
    /*
     handler events/commands
     
    Ping command example

    module.exports = Raycord.command({
      name: 'ping',
      category: 'utils',
      aliases: ['pong']
    }, ({ message }) => {
      message.reply('Pong!')
    })
     
    */ 
  }
}