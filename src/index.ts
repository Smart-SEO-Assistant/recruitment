import { exit } from "process";
import { createServer } from "src/server";

const application = async () => {
  const server = await createServer();

  server.listen({ port: 3000 }, (err, address) => {
    if (err) {
      server.logger.error(err.message, { cause: err.cause, name: err.name, stack: err.stack });
      exit(1);
    }
    server.logger.info(`Server listening on ${address}`);
  });
};

application().catch(err => {
  console.error(err);
  exit(1);
});
