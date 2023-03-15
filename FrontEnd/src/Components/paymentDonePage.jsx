import React from "react";
import "./PaymentSuccess.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentSuccess = ({toggle,setToggle}) => {
  return (
    <div style={{
      width:"100%",
      position:"absolute",
      height:"100vh",
      top:"0",
      left:"0",
      background:"white",
      display: toggle ? "flex":"none",
      alignItems:"center"
    }}>
        <Container className="payment-success-container">
        <Row className="payment-success-row" style={{
          display:"flex",
          justifyContent:"center"
        }}>
          <Col xs={6}>
            <h1 className="payment-success-title">Payment Successful!</h1>
            <img
              src="https://fcs3pub.s3.amazonaws.com/photo-book/images/payment/success.gif"
              alt=""
            />
          </Col>
          <Col xs={12}>
            <p className="payment-success-text">
              Your transaction has been completed.
            </p>
          </Col>
          <Col xs={12}>
            <Link to="/">
              <Button className="payment-success-button">
                Return to Home
              </Button>
            </Link>
          </Col>
        </Row>
        </Container>
    </div>
  );
};

export default PaymentSuccess;
