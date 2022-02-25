import React from 'react';
import './App.css';
import Cart from './Cart';
import NavBar from './NavBar';
class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
            {
                title:"Iphone12",
                qty:1,
                price:100000,
                img:'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605271851/Croma%20Assets/Communication/Mobiles/Images/8999510245406.png/mxw_2048,f_auto',
                id:1
            },
            {
                title:"Watch",
                qty:1,
                price:1000,
                id:2,
                img:'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            },{
                title:"Sunglasses",
                qty:1,
                price:1000,
                id:3,
                img:'https://rukminim1.flixcart.com/image/580/696/ki0loy80-0/sunglass/t/7/i/medium-white01-like-future-original-imafxwg6dfrfae9n.jpeg?q=50'
            }
        ]
    }
}

getCount=()=>{
  var count=0;
  const {products}=this.state;
  products.forEach((prod)=>{
    count+=prod.qty;
  })
  return count;
}
onIncreaseQuantity=(product)=>{
  // console.log('handle Incraese funciton of',product);
  const {products}=this.state;
  const index=products.indexOf(product);
  products[index].qty+=1;
  this.setState({
      products:products
  })

}
onDecreaseQuantity=(product)=>{
  const {products}=this.state;
  const index=products.indexOf(product);
  if(products[index].qty>0){
          products[index].qty-=1;
  }
  this.setState({
      products:products
  })
}
onDelete=(id)=>{
  const {products}=this.state;
  const items=products.filter((item)=> item.id !== id);
      this.setState({
          products:items
      })
  }
getTotal=()=>{
  let count=0;
const {products}=this.state;
  products.forEach((prod)=>{
    count+=prod.qty * prod.price;
  });
  return count;
}
  render(){
    const {products} = this.state;
  return (
    <div className="App">
    <NavBar count={this.getCount()}/>
     <Cart products={products}
       onDelete={this.onDelete}
       onDecreaseQuantity={this.onDecreaseQuantity}
       onIncreaseQuantity={this.onIncreaseQuantity}
     />
      <div >{this.getTotal()}</div>
    </div>
   
  );
}
}

export default App;
