import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product }) => {
  // Check if product exists
  if (!product) {
    console.error('Product is undefined');
    return null;
  }

  const { image, name, slug, price } = product;

  // Ensure slug and slug.current are defined
  if (!slug || !slug.current) {
    console.error('Slug is undefined or does not have a current property:', slug);
    return null;
  }

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
            alt={name} // Added alt attribute for accessibility
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;



