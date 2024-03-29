import type { SSTConfig } from 'sst'
import { SVELTKIT } from './stacks/frontStack'

export default {
  config(_input) {
    return {
      name: 'tubly-site',
      region: 'us-east-1',
      profile: _input.profile,
    }
  },
  stacks(app) {
    app.stack(SVELTKIT)
  },
} satisfies SSTConfig
