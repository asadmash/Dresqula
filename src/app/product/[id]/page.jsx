'use client';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import {fetchProductById} from '@lib/api/products';

const ProductPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
  return (
    <div>page</div>
  )
}

export default ProductPage