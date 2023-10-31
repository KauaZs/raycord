import { RaycordCommand } from "./RaycordCommand";
import { Collection, Events } from 'discord.js';
import { globSync } from 'glob'
import { resolve } from 'path'
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
    if (!this.instance && client && config) {
      this.instance = new Raycord(client, config)
      return this.instance;
    } else if (this.instance) {
      return this.instance;
    } else {
      return null;
    }
  }

  private constructor(client: ClientData, public config: RaycordConfig) {
    this.commands = new Collection();
    this.events = new Collection();
    this.client = new RaycordClient(client);

    this.setup()
  }

  public command(data: CommandData, runner: CommandRunner) {
    return new RaycordCommand(data, runner);
  }

  public event(data: EventData, runner: EventRunner) {
    return new RaycordEvent(data, runner);
  }

  public setup() {
    const { fileExtension, rootDirectory } = this.config;
    const path = `${rootDirectory}/**/*${fileExtension}`;

    globSync(path).forEach(file => {
      const command = require(resolve(file));
      console.log(command.name);
      this.commands.set(command.name, command);
    })
  }

  
}