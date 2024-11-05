import http from "http";
import app from "./app";

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

bootstrap().then(null);

async function bootstrap() {
  try {
    await Promise.resolve();

    server.listen(PORT, () => {
      console.log("listening to http://localhost:3000");
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
