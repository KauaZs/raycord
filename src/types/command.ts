import { Message, PermissionFlags } from "discord.js"

export type CommandRunner = (includes: CommandIncludes) => any | Promise<any>

export interface CommandIncludes { 
  message: Message, 
  args: string[] 
}

export interface CommandPermissions {
  flags: PermissionFlags[],
  message: string
}

export interface CommandData {
  name: string,
  category: string,
  aliases?: string[],
  permissions?: CommandPermissions
} 