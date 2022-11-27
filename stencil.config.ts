import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-accordion',
  buildEs5: 'prod',
  outputTargets: [
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'dist'
    },    
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
