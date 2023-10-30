import { Client, Collection } from 'discord.js'
import { resolve } from 'path'
import fs from 'fs'
import Options from './types/clientOptions'
import Command from './Command'

export default class ClientStructure extends Client {
    commands: Collection<string, Command>

    constructor(public clientOptions : Options) {
        super({intents: clientOptions.intents})

        this.clientOptions = clientOptions
        this.commands = new Collection()

        this.loadCommands()
        this.loadEvents()
    }

    setupBot() {
        this.login(this.clientOptions.token)
    }

    loadCommands(path = './src/commands/') {
        if(!fs.existsSync(path)) throw new Error('command path not found')
        
        fs.readdirSync(path).forEach((folder) => {
            fs.readdirSync(path + folder).forEach((file) => {
                const pathSolved = resolve(`${path}/${folder}/${file}`)
                const commandFile = require(pathSolved)
                const command = new commandFile.default(this)
                
                this.commands.set(command.options.name, command)
            })
        })
    }

    loadEvents(path = './src/events/') {
        if(!fs.existsSync(path)) throw new Error('event path not found')
        
        fs.readdirSync(path).forEach((folder) => {
            fs.readdirSync(path + folder).forEach((file) => {
                const pathSolved = resolve(`${path}/${folder}/${file}`)
                const eventFile = require(pathSolved)
                const event = new eventFile.default(this)
                
                this.on(event.name, event.run)
            })
        })
    }

}