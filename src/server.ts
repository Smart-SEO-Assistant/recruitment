import fastify from "fastify";
import { routes } from "src/routes";
import { logger } from "src/utils/logger";

export const createServer = async () => {
  const server = fastify();
  server.decorate("logger", logger);

  await server.register(routes);

  return server;
};
