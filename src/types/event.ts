import { Events } from 'discord.js';

export type EventRunner = (...includes: any[]) => any | Promise<any>;

export interface EventData {
  type: Events,
  once: boolean
}
 