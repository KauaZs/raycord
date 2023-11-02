import { ApplicationCommandOptionType, ApplicationCommandType, Snowflake } from "discord.js";
import { SlashRunner, SlashData } from "types/slash";

export class RaycordSlash {
  public name: string;
  public category: string;
  public description: string;
  public type: ApplicationCommandType;
  public options?: [{
    name: string;
    description: string;
    type: ApplicationCommandOptionType;
    name_localizations?: string[];
    description_localizations?: string[];
    required?: boolean;
    options?: string[];
    default_member_permissions?: string;
    dm_permission?: boolean;
    default_permission?: boolean;
    nsfw?: boolean;
    version?: Snowflake;
  }];
  public runner: SlashRunner;

  public constructor(data: SlashData, runner: SlashRunner) {
    this.name = data.name;
    this.category = data.category;
    this.description = data.description;
    this.type = data.type;
    this.options = data.options;
    this.runner = runner;
  }
}
