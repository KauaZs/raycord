import { ApplicationCommandOptionType, ApplicationCommandType, Interaction, Snowflake } from "discord.js"


export type SlashRunner = (includes: SlashIncludes) => any | Promise<any>

export type SlashIncludes = { 
  interaction: Interaction,
  args: string[] 
}


export interface SlashData {
  name: string,
  category: string,
  description: string,
  type: ApplicationCommandType,
  options?: [{
    name: string,
    description: string,
    type: ApplicationCommandOptionType,
    name_localizations?: string[],
    description_localizations?: string[],
    required?: boolean,
    options?: string[],
    default_member_permissions?: string,
    dm_permission?: boolean,
    default_permission?: boolean,
    nsfw?: boolean,
    version?: Snowflake
  }]
}
