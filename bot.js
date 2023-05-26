import { Client, GatewayIntentBits } from 'discord.js'
import { EVENTS } from './src/events/index.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages
  ]
})

EVENTS.forEach((event) => {
  event(client)
})


client.login(process.env.BOT_TOKEN)