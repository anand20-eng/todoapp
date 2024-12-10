import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardData from './cardData'
import "./style.css";
import { CardBody } from 'react-bootstrap';

const Cards = () => {
  const [data, setData] = useState(CardData);

  return (
    <>
      <div className='container mt-3'>
        <h2 className='text-center'>Add to Cart Projects</h2>
        <div className="row d-flex justify-content-center  align-items-center">
          {data.map((item, id) => {
            return (
              <>
                <Card style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt4 card_style">
                  <Card.Img variant="top" src={item.imgdata} style={{ height: "16rem" }}
                    className='mt-5' />
                  <Card.Body>
                    <Card.Title>{item.rname}</Card.Title>
                    <Card.Text>
                      Price : ₹ {item.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button variant="primary" className="col-lg-12">
                        Add to Cart </Button> </div>

                  </Card.Body>
                </Card></>
            )
          })}
        </div>
      </div>
    </>




  )
}

export default Cards