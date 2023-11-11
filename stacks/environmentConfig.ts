export const envConfig = {
	dev: {
		allowedOrigins: ['https://localhost', 'http://127.0.0.1:5173'],
	},
	prod: {
		allowedOrigins: ['https://tubly.app', 'https://www.tubly.app'],
		hostedZone: 'tubly.app',
		domainAlias: 'www.tubly.app',
		domainName: 'tubly.app',
	}
}

export function getCustomDomainConfiguration(stage: string) {
  if (stage === 'prod') {
    return {
      domainName: envConfig[stage].domainName,
      domainAlias: envConfig[stage].domainAlias,
      hostedZone: envConfig[stage].hostedZone,
    }
  }

  return undefined
}