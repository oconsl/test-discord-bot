import { onInteractionCreate } from './interactionEvents.js'
import { onMessageCreate } from './messageEvents.js'
import { onReady } from './ready.js'

export const EVENTS = [onInteractionCreate, onMessageCreate, onReady]