export * from "./client.js"
export * from "./server.js"

import { createTasiaClient } from "./client.js"
import { createTasiaServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createTasia(options?: ServerOptions) {
  const server = await createTasiaServer({
    ...options,
  })

  const client = createTasiaClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
