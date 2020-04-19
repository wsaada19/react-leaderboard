const fastify = require('fastify')()

fastify.get('/', async (request) => {
    
});

const start = async () => {
  try {
    await fastify.listen(3001)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()