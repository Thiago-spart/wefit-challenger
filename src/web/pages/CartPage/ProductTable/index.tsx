import Image from "next/image";

import type { ProductTableProps } from "./types";

import * as S from "./styles";

export const ProductTable = ({
	handleProductDecrement,
	handleProductIncrement,
	handleRemoveProduct,
	products,
}: ProductTableProps) => {
	return (
		<S.Container>
			<thead>
				<tr>
					<th>PRODUTO</th>
					<th aria-label="product image" />
					<th>QTD</th>
					<th>SUBTOTAL</th>
					<th aria-label="delete icon" />
				</tr>
			</thead>
			<tbody>
				{products.map(product => (
					<tr key={product.id}>
						<td>
							<Image
								src={product.image}
								alt={product.title}
								width={89}
								height={114}
							/>
						</td>
						<td>
							<strong>{product.title}</strong>
							<span>{product.priceFormatted}</span>
						</td>
						<td>
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
						</td>
						<td>
							<strong>{product.subTotal}</strong>
						</td>
						<td>
							<button
								type="button"
								aria-label="remove product"
								onClick={() => handleRemoveProduct(product.id)}
							>
								<Image src="/trash.svg" alt="remove" width={18} height={18} />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</S.Container>
	);
};
