import Image from "next/image";

import type { ProductListProps } from "./types";

import * as S from "./styles";

export const ProductList = ({
	handleProductDecrement,
	handleProductIncrement,
	handleRemoveProduct,
	products,
}: ProductListProps) => {
	return (
		<S.Container>
			{products.map(product => (
				<S.ProductListItem key={product.id}>
					<Image
						src={product.image}
						alt={product.title}
						width={64}
						height={82}
					/>

					<div>
						<S.TitleDiv>
							<h4>{product.title}</h4>
							<span>{product.priceFormatted}</span>
							<button
								type="button"
								aria-label="remove product"
								onClick={() => handleRemoveProduct(product.id)}
							>
								<Image src="/trash.svg" alt="remove" width={18} height={18} />
							</button>
						</S.TitleDiv>
						<S.SubtotalDiv>
							<div>
								<button
									type="button"
									aria-label="decrement product"
									disabled={product.quantity <= 1}
									onClick={() => handleProductDecrement(product.id)}
								>
									<Image src="/minus.svg" alt="minus" width={18} height={18} />
								</button>
								<input
									type="text"
									aria-label="product amount"
									readOnly
									value={product.quantity}
								/>
								<button
									type="button"
									aria-label="increment product"
									onClick={() => handleProductIncrement(product.id)}
								>
									<Image src="/plus.svg" alt="plus" width={18} height={18} />
								</button>
							</div>
							<div>
								<h4>SUBTOTAL</h4>
								<span>{product.subTotal}</span>
							</div>
						</S.SubtotalDiv>
					</div>
				</S.ProductListItem>
			))}
		</S.Container>
	);
};
