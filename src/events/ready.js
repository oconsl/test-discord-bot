import { sumTwoNumbersCmd } from '../commands/interactionCmds.js'
import dotenv from 'dotenv'
dotenv.config()

export const onReady = (client) => {
  client.on('ready', () => {
    console.log(`Hola mundo, soy un bot nuevo 😃`)

    client.application.commands.create(sumTwoNumbersCmd, process.env.SERVER_ID)
  })
}
