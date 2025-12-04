import { FastifyPluginCallback } from "fastify";

export const chatRoutes: FastifyPluginCallback = server => {
  server.get("/", async (req, reply) => {
    const body = req.body as { prompt: string; temperature?: number; model?: string };

    reply.send({ data: body });
  });
};
