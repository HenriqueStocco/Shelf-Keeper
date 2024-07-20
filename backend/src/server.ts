import App from './app';

App.listen({ port: 3333, host: '127.0.0.1' })
  .then((url) => console.log(`HTTP server running on ${url}`))
  .catch((e) => console.error('Error to starting server ', e));
