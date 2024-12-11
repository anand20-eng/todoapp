import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function HeaderComp() {

    const getCardData = useSelector((state) => state.users.card_Info)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3" >Add to cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-3" >Home</NavLink>

                    </Nav>

                    <Badge badgeContent={getCardData.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <i class="fa-solid fa-cart-shopping text-light"></i>
                    </Badge>

                </Container>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getCardData.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getCardData.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <tr>
                                                                <td><Link to={`/ShopCard/${e.id}`}> 
                                                                    <img src={e.imgdata} style={{ width: "5rem", height: "5rem" }}
                                                                        alt="" />
                                                                </Link> </td>
                                                                <td>
                                                                    <p> {e.rname} </p>
                                                                    <p> Price : {e.price} </p>
                                                                    <p> Quantity : {e.qnty} </p>
                                                                    <p style={{ color: "red", fontSize: 20, cursor: "pointer" }}>
                                                                        <i className="fas fa-trash smalltrash"> </i>
                                                                    </p>
                                                                </td>

                                                                <td className="mt-5" style={{ color: "red", fontSize: 20, cursor: "pointer" }}>
                                                                    <i className="fas fa-trash largetrash"> </i>
                                                                </td>
                                                            </tr>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total :₹ price</p>
                                    </tbody >
                                </Table>
                            </div> :

                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }



                </Menu>
            </Navbar >

        </>
    );
}

export default HeaderComp;