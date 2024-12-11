import React from "react";
import { Link } from "react-router-dom";

export default function Products({ productList }) {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Наш продукты!</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`} className="text-blue-800">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
