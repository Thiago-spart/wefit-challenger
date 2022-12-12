import type { ProductProps } from "@interfaces/interfaces/product";

import { marketApi } from "..";

export const fetchProducts = (): Promise<Array<ProductProps>> =>
	marketApi.get("/products").then(response => response.data);
