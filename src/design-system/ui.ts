const UI_TEXT = `
  break-words 
  text-base font-base font-regular line-height-standard
`

const UI_TEXT_TITLE = `font-bold`

export const UI_BTN_ACCENT = `
  bg-accent
`

export default {
  'ui-button': `inline-block pa-xs 
        text-center decoration-none text-color-base font-bold
        bg-[url('/images/bg-button.png')] bg-cover bg-center bg-no-repeat`,

  'ui-button-small': `inline-block pa-xs 
        text-center decoration-none text-color-base font-bold
        bg-[url('/images/bg-blog-button.png')] bg-cover bg-center bg-no-repeat`,

  'ui-text-base': `
    text-step-1
    ${UI_TEXT}
  `,

  'ui-text-sm': `
    text-step-0
    ${UI_TEXT}
  `,

  'ui-text-title-1': `
    text-step-4
    ${UI_TEXT_TITLE}
  `,

  'ui-text-title-2': `
    text-step-3
    ${UI_TEXT_TITLE}
  `,

  'ui-text-title-3': `
    text-step-2
    ${UI_TEXT_TITLE}
  `,

  'ui-text-title-4': `
    text-step-1
    ${UI_TEXT_TITLE}
  `,
}
