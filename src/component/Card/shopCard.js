import React, { useEffect, useState } from 'react'
import './style.css'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
function ShopCard() {
  const [data, setData] = useState([]);

  const { id } = useParams();
  const getDataById = useSelector((state) => state.users.card_Info);

  console.log("getDataById =>", getDataById)

  const compare = () => {
    let compareCard = getDataById.filter((e) => {
      return e.id == id
    })
    setData(compareCard); 
  }

  useEffect(() => {
    compare();
  }, [id])
  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
            {
              data.map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.imgdata} alt="" />
                    </div>

                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p> <strong>Restaurant</strong>  : {ele.rname}</p>
                            <p> <strong>Price</strong>  : ₹{ele.price}</p>
                            <p> <strong>Dishes</strong>  : {ele.address}</p>
                            <p> <strong>Total</strong>  :₹  {ele.price * ele.qnty}</p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                              <span style={{ fontSize: 24 }} >-</span>
                              <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                              <span style={{ fontSize: 24 }} >+</span>

                            </div>

                          </td>
                          <td>
                            <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★	</span></p>
                            <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                            <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                          </td>
                        </tr>
                      </Table>
                    </div>

                  </>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default ShopCard