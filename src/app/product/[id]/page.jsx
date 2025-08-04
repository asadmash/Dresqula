'use client';
import { notFound, useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import {fetchProductById} from '@lib/api/products';

const ProductPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!id) return;

        const fetchData = async() => {
            try {
                const data = await fetchProductById(id);
                setProduct(data);
            } catch (error) {
                console.error('Failed to fetch product:', error);
                notFound();
            } finally{
                setLoading(false);
            }
        }
    })
  return (
    <div>page</div>
  )
}

export default ProductPage