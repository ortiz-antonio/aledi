import {
  INTERACTION_BASE,
  INTERACTION_FOCUS,
  STATE_BASE,
} from './tokens'

const RE_SPACES = /\s+/g
function clean(classes: string) {
  return classes.replace(RE_SPACES, ' ').trim()
}

// --- base
const UI_BTN_BASE = clean(`
  p-3xs
  rounded-md border-0
  font-bold text-foreground
`)

const UI_TEXT = clean(`
  break-words 
  text-foreground
  font-base font-regular line-height-standard
`)

const UI_TEXT_TITLE = `font-bold text-accent `

export const UI_BTN_ACCENT = clean(`
  bg-accent
`)

export default {
  'ui-section': clean(`
  w-full
  `),

  'ui-section-odd': clean(`
  bg-surface
  `),

  'ui-section-container': clean(`
    max-w-7xl mx-auto p-m
    `),

  'ui-button': clean(`
    ${UI_BTN_BASE}
    ${STATE_BASE}
    ${INTERACTION_BASE}
  `),

  'ui-button-accent': clean(`
    ${UI_BTN_ACCENT}
    ${INTERACTION_FOCUS}
  `),

  'ui-text-base': clean(`
    text-step-1
    ${UI_TEXT}
  `),
  'ui-text-sm': clean(`
    text-step-0
    ${UI_TEXT}
  `),

  'ui-text-title-1': clean(`
    text-step-4
    ${UI_TEXT_TITLE}
  `),

  'ui-text-title-2': clean(`
    text-step-3
    ${UI_TEXT_TITLE}
  `),

  'ui-text-title-3': clean(`
    text-step-2
    ${UI_TEXT_TITLE}
  `),

  'ui-text-title-4': clean(`
    text-step-1
    ${UI_TEXT_TITLE}
  `),
}
