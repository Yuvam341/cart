import React from 'react';


const CartItem =(props)=>{
    
    // increaseQuantity=()=>{
    //     // console.log(this.state);
    //     // this.setState(
    //     //     {
    //     //         qty:this.state.qty+1
    //     //     }
    //     // )
    //     //form2
    //     this.setState((prev)=>{
    //        return{ qty:prev.qty+1}
    //     })
    // }
    // decreaseQuantity=()=>{
    //     this.setState((prev)=>{
    //         if(prev.qty >0){
    //            return { qty:prev.qty-1}
    //         }
    //     })
    // }
    const {price,title,qty,img}=props.product;
    const {
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleDelete,
        product
    }=props
    return(
       
        
     
            <div className='cart-item'>
                <div className="left-block">
                    <img style={styles.image} src={product.img}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:'25'}}>{title}</div>
                    <div style={{fontSize:'25'}}>{price}</div>
                    <div style={{fontSize:'25',color:'grey'}}>{qty}</div>
                    <div className='cart-items-actions'>
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="Increase" className='action-icons'
                            onClick={()=>handleIncreaseQuantity(product)}
                        />
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" alt="Decrease" className='action-icons'
                            onClick={()=> handleDecreaseQuantity(product)}
                        />
                        <img src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1645786703~hmac=fb0e31f3117c8b2c729ebe0eeb202e08" alt="Delete" className='action-icons'
                            onClick={()=> handleDelete(product.id)}

                        />
                    </div>
                </div>
            </div>
    );
}
    
    
//we can add styles using objects as well
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:"grey"
    }
}
export default CartItem;