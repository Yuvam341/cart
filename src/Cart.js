import React from 'react';
import CartItem from './CartItem';

const Cart =(props)=>{
   

   
       
            const {
                products,
                onDelete,
                onDecreaseQuantity,
                onIncreaseQuantity
            }=props;
            return(
                <div className='Cart'>
                    {
                        products.map((product)=>{
                        return <CartItem product={product} key={product.id} 
                        handleIncreaseQuantity={onIncreaseQuantity} 
                        handleDecreaseQuantity={onDecreaseQuantity}
                        handleDelete={onDelete}
                        />
                        })
                    }
                </div>
            );
        

}

export default Cart;