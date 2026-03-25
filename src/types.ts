export interface HeroData {
  title: string
  text: string
  image: string
  imageAlt: string
  cta: string
  ctaCopy: string
}

export interface WhatsData {
  number: number
  message: string
}

export interface SpecsData {
  title: string
  text: string
  items: string[]
  footer: string
}

export interface CaseStudyData {
  title: string
  subtitle: string
  cases: Array<{
    title: string
    problem: string
    optimization: {
      title: string
      items: string[]
    }
    result: string
    caption: string
    image: string
    imageAlt: string
  }>
}

export interface ServiceOutputData {
  title: string
  text: string
  includes_title: string
  items: string[]
  footer: string
}

export interface StakeholderImpactData {
  title: string
  areas: Array<{
    title: string
    items: string[]
  }>
}

export interface ProcessStepData {
  title: string
  text: string
  steps: string[]
}

export interface TrialData {
  title: string
  p1: string
  p2: string
  offer: string
  cta: string
  ctaCopy: string
}
