import { FastifyPluginAsync } from "fastify";
import { chatRoutes } from "src/routes/chat.route";

export const routes: FastifyPluginAsync = async server => {
  await server.register(chatRoutes, { prefix: "chat" });

  server.get("/health", async (_, reply) => {
    reply.code(200).send({ status: "ok" });
  });
};
