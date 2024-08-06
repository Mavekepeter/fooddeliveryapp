import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-item-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>Ksh{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Ksh{item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        
      </div>
    </div>
  );
};

export default Cart;
