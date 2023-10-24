import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);

// stacks/frontStack.ts
import { SvelteKitSite } from "sst/constructs";

// sst.config.ts
var sst_config_default = {
  config(_input) {
    return {
      name: "tubly-site",
      region: "us-east-1"
    };
  }
};
export {
  sst_config_default as default
};
