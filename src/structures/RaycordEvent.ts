import { EventData, EventRunner } from "types/event";
import { Events } from "discord.js";

export class RaycordEvent implements EventData {
  public type: Events;
  public once: boolean;

  public constructor(data: EventData, public runner: EventRunner) {
    this.type = data.type;
    this.once = data.once;
  }
}