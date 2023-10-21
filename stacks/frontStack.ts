import { StackContext, SvelteKitSite } from 'sst/constructs'

export function SVELTKIT({ stack }: StackContext) {
  const site = new SvelteKitSite(stack, 'tubly-site', {
    customDomain: {
      domainName: stack.stage === 'prod' ? 'ai.tubly.app' : `${stack.stage}.tubly.app`, 
      hostedZone: stack.stage === 'prod' ? 'ai.tubly.app' : `${stack.stage}.tubly.app`
    },
    edge: stack.stage === 'prod' ? true : false,
  })

  stack.addOutputs({
    URL: site.url
  })
}
