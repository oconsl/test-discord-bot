import { userMention } from 'discord.js'

export const DEFAULT_MESSAGE_COMMAND = (message) => message.reply('No entiendo el comando 😥')
export const MESSAGE_COMMANDS = {
  'greeting': (message) => {
    const userId = message.author.id
    const userMentionMessage = userMention(userId)
    const avatarHash = message.author.avatarURL()
    message.reply(`Hola ${userMentionMessage} ${avatarHash} soy un bot y te contesto`)
  },
  'ping': (message) => {
    message.reply('Pong! 🏓')
  },
  'count': (message) => {
    setTimeout(() => {
      message.reply('Pasaron 5 segundos! ⏰')
    }, 5000)
  }
}