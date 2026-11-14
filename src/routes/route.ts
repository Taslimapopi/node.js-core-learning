import type { IncomingMessage } from "http";
import { ServerResponse } from "http";
import productController from "../controllers/controller.product";

const routeHandler = (req: IncomingMessage, res: ServerResponse) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("this is root page");
  } else if (req.url?.startsWith("/products")) {
    productController(req, res);
  } else {
    res.writeHead(404, {
      "content-type": "text/plain",
    });
    res.end("this page is not found");
  }
};

export default routeHandler;
