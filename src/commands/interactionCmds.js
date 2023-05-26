import { SlashCommandBuilder } from 'discord.js'

export const DEFAULT_INTERACTION_COMMAND = (interaction) => interaction.reply('No entiendo la interacción 😥')
export const INTERACTION_COMMANDS = {
  'sum-two-numbers': (interaction) => {
    const { options } = interaction

    const num1 = options.getInteger('numero1')
    const num2 = options.getInteger('numero2')

    interaction.reply(`La suma es: ${num1 + num2}. Creo que podrías haberlo sumado a mano con lo que te tardaste 😄`)
  }
}

export const sumTwoNumbersCmd = new SlashCommandBuilder()
  .setName('sum-two-numbers')
  .setDescription('Le pasas 2 números y te los suma 🤯')
  .addIntegerOption((option) => option.setName('numero1').setDescription('Primer Número').setRequired(true))
  .addIntegerOption((option) => option.setName('numero2').setDescription('Segundo Número').setRequired(true))