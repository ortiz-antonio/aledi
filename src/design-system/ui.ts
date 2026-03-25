const UI_TEXT = `
  break-words 
  text-base font-base font-regular line-height-standard
`
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

  'ui-text-title-1': `
    text-step-2
    font-bold 
  `,
}
