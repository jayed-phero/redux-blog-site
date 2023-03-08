import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)
            })
    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {
                data.map(product =>
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                )
            }
        </div>
    );
};

export default Product;