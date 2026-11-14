import fs from "fs";
import path from "path";
import type { Iproduct } from "../types/product";

const filePath = path.join(process.cwd(), "./src/database/db.json");
export const productService = () => {
  const result = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(result);
};

export const createProduct = (payload: Iproduct[]) => {
  fs.writeFileSync(filePath, JSON.stringify(payload));
};
