import { resetCart } from '@/store/nextSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

const ResetCart = () => {
  const dispatch = useDispatch();
  const handlResetCart = () => {
    const confirmReset = window.confirm('Are you sure to reset your items from the carts?');
    if (confirmReset) {
      dispatch(resetCart());
    }
  };
  return (
    <button
      onClick={handlResetCart}
      className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      Reset Cart
    </button>
  );
};

export default ResetCart;
