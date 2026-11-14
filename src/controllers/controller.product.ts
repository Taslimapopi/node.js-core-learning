import type { IncomingMessage, ServerResponse } from "node:http";

import type { Iproduct } from "../types/product";
import { bodyParser } from "../utils/bodyParser";
import { createProduct, productService } from "../services/product.service";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  const urlParams = url?.split("/");

  const id =
    urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;

  //   get all products
  if (url === "/products" && method === "GET") {
    // const products = [
    //   {
    //     id: 1,
    //     name: "product 1",
    //     price: 200,
    //   },
    //   {
    //     id: 2,
    //     name: "product 2",
    //     price: 400,
    //   },
    //   {
    //     id: 1,
    //     name: "product 3",
    //     price: 200,
    //   },
    // ];

    const products = productService();

    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(
      JSON.stringify({
        message: "product retrieve successfully",
        data: products,
      }),
    );
  } else if (method === "GET" && id !== null) {
    const products = productService();
    const product = products.find((p: Iproduct) => p.id === id);

    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(
      JSON.stringify({
        message: "single product retrieve successfully",
        data: product,
      }),
    );
  } else if (method == "PUT" && id !== null) {
    const products = productService();
    const body = await bodyParser(req);
    const index = products.findIndex((p: Iproduct) => p.id === id);
  }
};

export default productController;
