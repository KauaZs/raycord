import { CommandData, CommandRunner } from "types/command";

export class RaycordCommand implements CommandData {
  public name: string;
  public category: string;
  public aliases?: string[];

  public constructor(data: CommandData, public runner: CommandRunner) {
    this.name = data.name;
    this.category = data.category;
    this.aliases = data?.aliases;
  }
}