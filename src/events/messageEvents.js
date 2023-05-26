import { Events } from 'discord.js'
import { MESSAGE_COMMANDS, DEFAULT_MESSAGE_COMMAND } from '../commands/messageCmds.js'

export const onMessageCreate = (client) => {
  client.on(Events.MessageCreate, (message) => {
    if (message.content.startsWith('++')) {
      const command = message.content.split(' ')[0].slice(2)

      const commandAction = MESSAGE_COMMANDS[command] ?? DEFAULT_MESSAGE_COMMAND
      commandAction(message)
    }
  })
}
