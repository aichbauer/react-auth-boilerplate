const api = () => {
  const env = process.env.NODE_ENV;
  const url = {
    prod: '',
    dev: 'http://localhost:2017',
    test: '',
  };
  let apiURL = '';

  switch (env) {
    case 'production':
      apiURL = url.prod;
      break;
    case 'testing':
      apiURL = url.test;
      break;
    default:
      apiURL = url.dev;
      break;
  }

  const routes = {
    REGISTER: `${apiURL}/rest/register`,
    LOGIN: `${apiURL}/rest/login`,
    VALIDATE: `${apiURL}/rest/validate`,
    GRAPHQL: `${apiURL}/graphql`,
  };

  return routes;
};

export default api;

