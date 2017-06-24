const routes = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return {
        BASE_API_URL: '',
        REGISTER_ROUTE: '/rest/register',
        LOGIN_ROUTE: '/rest/login',
        VALIDATE_ROUTE: '/rest/validate',
      };
    default:
      return {
        BASE_API_URL: 'http://localhost:2017',
        REGISTER_ROUTE: '/rest/register',
        LOGIN_ROUTE: '/rest/login',
        VALIDATE_ROUTE: '/rest/validate',
      };
  }
};

export default routes;
