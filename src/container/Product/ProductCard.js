import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../../Redux/actionCreators/blogsAction";
import { ADD_TO_CART } from "../../Redux/actionTypes/actionTypes";
// import { BiListPlus } from "react-icons/bi";

const ProductCard = ({ product }) => {
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    return (
        <div
            className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
            key={product._id}
        >
            <div>{product.quantity}</div>
            <div className='h-52 w-52 mx-auto'>
                <img src={product.image} alt={product.model} />
            </div>
            <h1 className='font-bold text-center'>{product.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
            <div className=' flex-1'>
                <ul className='space-y-2'>
                    {product.keyFeature.map((feature, i) => {
                        return <li key={i} className='text-sm '>{feature}</li>;
                    })}
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                {
                    pathname.includes("cart") &&
                    <div></div>

                }
                <button onClick={() => dispatch(addToCart(product))} className='bg-indigo-500 rounded-full
         py-1 px-2 flex-1 text-white text-bold'>
                    Add to cart
                </button>
                <button
                    onClick={() => dispatch(removeFromCart(product))}
                    title='Add to wishlist'
                    className='bg-indigo-500  py-1 px-2 rounded-full'
                >
                    Remove
                </button>
                <button
                    title='Add to wishlist'
                    className='bg-indigo-500  py-1 px-2 rounded-full'
                >
                    W
                </button>
            </div>
        </div>
    );
};

export default ProductCard;