import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';
function UpdateComp() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const existingUser = users.filter(u => u.id == id);
    const { name, email } = existingUser[0];
    const [uName, setName] = useState(name);
    const [uEmail, setEmail] = useState(email)

   const handleUpdate  = (event) => {
    event.preventDefault();
    dispatch(updateUser({
        id: id,
        name:uName,
        email:uEmail
    }))
    navigate('/');
   }
    return (
        <>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
                <div className='w-50 border bg-secondary text-white p-5'>
                    <h3>Update User</h3>
                    <form onSubmit={handleUpdate}>
                        <div>

                            <label htmlFor="name"> Name: </label>
                            <input type="text" name="name" className="form-control"
                           value={uName} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="email"> Email: </label>
                            <input type="email" name="email" className="form-control"
                             value={uEmail}  onChange={(e) => setEmail(e.target.value)}/>
                        </div> <br />

                        <button className="btn btn-info"> Update
                        </button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default UpdateComp