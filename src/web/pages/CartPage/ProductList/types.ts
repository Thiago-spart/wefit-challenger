import type { ProductProps } from "src/types/interfaces/product";

type FormattedProductsProps = ProductProps & {
	priceFormatted: string;
	subTotal: string;
};

export interface ProductListProps {
	products: Array<FormattedProductsProps>;
	handleProductIncrement: (productId: number) => void;
	handleProductDecrement: (productId: number) => void;
	handleRemoveProduct: (productId: number) => void;
}
