import { app } from './app';

app.listen({ port: 3333, host: '127.0.0.1' }).then(() => {
  console.log('HTTP server running');
});
