import { StackContext, SvelteKitSite } from 'sst/constructs'
import { getCustomDomainConfiguration } from './environmentConfig'

export function SVELTKIT({ stack }: StackContext) {
  type EnvStage = 'dev' | 'prod'
  const stage = stack.stage as EnvStage

  const site = new SvelteKitSite(stack, 'tubly-site', {
    customDomain: getCustomDomainConfiguration(stage),
    edge: stage === 'prod' ? true : false,
  })

  stack.addOutputs({
    URL: site.url
  })
}
