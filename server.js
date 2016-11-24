const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: process.env.PORT || 8080 });

server.register(require('inert'), (err) => {

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: { path: 'www' }
    }
  });

  server.start(err => {

    if (err) { throw err; }

    console.log(`Server running at: ${server.info.uri}`);

  });

});
