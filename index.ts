const server = Bun.serve({
  port: 3300,
  fetch(req) {
    return new Response('Hello World!')
  }
})

console.log(`Listening on port: ${server.port}`);