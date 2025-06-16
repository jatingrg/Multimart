import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { DataContainer } from "../App";

const Cart = () => {
  const {
    CartItem,
    setCartItem,
    addToCart,
    decreaseQty,
    deleteProduct,
    totalPrice,
  } = useContext(DataContainer);

  useEffect(() => {
    window.scrollTo(0, 0);

    // ✅ Load from localStorage only if empty
    if (CartItem.length === 0) {
      const storedCart = localStorage.getItem("cartItem");
      if (storedCart) {
        setCartItem(JSON.parse(storedCart));
      }
    }
  }, [CartItem, setCartItem]);

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {CartItem.length === 0 ? (
              <h1 className="no-items product">No items added in Cart</h1>
            ) : (
              CartItem.map((item) => {
                const productQty = item.price * item.qty;
                return (
                  <div className="cart-list" key={item.id}>
                    <Row>
                      <Col className="image-holder" sm={4} md={3}>
                        <img src={item.imgUrl} alt={item.productName} />
                      </Col>
                      <Col sm={8} md={9}>
                        <Row className="cart-content justify-content-center">
                          <Col xs={12} sm={9} className="cart-details">
                            <p>ID: {item.id}</p>
                            <h3>{item.productName}</h3>
                            <h4>
                              ₹{item.price}.00 × {item.qty}{" "}
                              <span>= ₹{productQty}.00</span>
                            </h4>
                          </Col>
                          <Col xs={12} sm={3} className="cartControl">
                            <button
                              className="incCart"
                              onClick={() => addToCart(item)}
                              aria-label="Increase Quantity"
                            >
                              <i className="fa-solid fa-plus"></i>
                            </button>
                            <button
                              className="desCart"
                              onClick={() => decreaseQty(item)}
                              aria-label="Decrease Quantity"
                            >
                              <i className="fa-solid fa-minus"></i>
                            </button>
                          </Col>
                        </Row>
                      </Col>

                      <button
                        className="delete"
                        onClick={() => deleteProduct(item)}
                        aria-label="Remove Item"
                      >
                        <ion-icon name="close"></ion-icon>
                      </button>
                    </Row>
                  </div>
                );
              })
            )}
          </Col>

          {/* Cart Summary */}
          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className="d_flex">
                <h4>Total Price:</h4>
                <h3>₹{totalPrice}.00</h3>
              </div>

              <Link to="/payment">
                <button aria-label="Proceed to Payment">Proceed to Pay</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
