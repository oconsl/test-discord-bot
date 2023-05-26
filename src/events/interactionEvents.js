import { Events } from 'discord.js'
import { INTERACTION_COMMANDS, DEFAULT_INTERACTION_COMMAND } from '../commands/interactionCmds.js'

export const onInteractionCreate = (client) => {
  client.on(Events.InteractionCreate, (interaction) => {
    if (!interaction.isCommand()) return

    const { commandName } = interaction

    const interactionAction = INTERACTION_COMMANDS[commandName] ?? DEFAULT_INTERACTION_COMMAND
    interactionAction(interaction)
  })
}
