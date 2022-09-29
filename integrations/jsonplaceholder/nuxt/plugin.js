import { integrationPlugin } from '@vue-storefront/core';

export default integrationPlugin(({ integration }) => {
  integration.configure('jsonplaceholder', { ...<%= serialize(options) %>})
});
