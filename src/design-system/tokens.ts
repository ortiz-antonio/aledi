// src/design-system/tokens.js

const STATE_HOVER_ACCENT = 'hover:bg-accent/80 hover:cursor-pointer hover:text-base'
const STATE_FOCUS_ACCENT = 'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base'

const STATE_HOVER_BASE = 'hover:bg-foreground hover:cursor-pointer hover:text-base'
const STATE_FOCUS_BASE = 'focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-base'

export const INTERACTION_BASE = `${STATE_HOVER_BASE} ${STATE_FOCUS_BASE}`
export const INTERACTION_FOCUS = `${STATE_HOVER_ACCENT} ${STATE_FOCUS_ACCENT}`

export const STATE_BASE = 'bg-accent-soft'
