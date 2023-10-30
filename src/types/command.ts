import { Message } from "discord.js"

export type CommandRunner = (includes: CommandIncludes) => any | Promise<any>

export type CommandIncludes = { 
  message: Message, 
  args: string[] 
}

export interface CommandData {
  name: string,
  category: string,
  aliases?: string[]
}