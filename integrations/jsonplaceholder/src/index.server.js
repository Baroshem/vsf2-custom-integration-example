const { apiClientFactory } = require('@vue-storefront/core')
const api = require('./api')
const axios = require('axios');

const onCreate = (configuration) => {
  const { baseURL } = configuration;

  const client = axios.create({ baseURL });

  return {
    config: {
      ...configuration,
    },
    client,
  }
}

const { createApiClient } = apiClientFactory({
  onCreate,
  api,
})

module.exports = { createApiClient }
