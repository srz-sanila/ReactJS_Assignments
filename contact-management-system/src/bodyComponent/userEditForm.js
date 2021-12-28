import './userEditForm.css'
import React from 'react'
import {connect} from 'react-redux'
import{ UpdateAction} from '../contactRedux/contactAction'
import { useLocation, useNavigate } from 'react-router';
import { useState } from 'react'


function UserEditForm(props) {

    let navigate = useNavigate()

    const {user} = useLocation().state

    const [udata,setUpdate]=useState({
        id:user.id,
        name:user.name,
        phone:user.phone,
        email:user.email,
        address:user.address     
    })

    const HandleFormSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const handleC = (e) => {
        const name=e.target.name
        setUpdate
        (
            {
                ...udata,
                [name]:e.target.value
            }
        )
    }

    return (
        <div className='editformContainer'>
            <form className="editform" onSubmit={HandleFormSubmit}>
                <div className='d-flex flex-row justify-content-center '>
                    <h3>Edit Information</h3>
                </div>
                <div className='main'>
                    <div>
                        <label>Name</label>
                    </div>
                    <div>
                    <input type="name" name='name' value={udata.name} onChange={handleC}/>
                    </div>
                </div>
                <div className='main'>
                    <div>
                        <label>Mobile No.</label>
                    </div>
                    <div>
                        <input type="tel" name='mobile' pattern="[0-9]{10}" value={udata.phone} onChange={handleC}/> 
                    </div>
                </div>
                <div className='main'>
                    <div>
                        <label>Address</label>
                    </div>
                    <div>
                        <input type="text" name='address' value={udata.address} onChange={handleC}/>
                    </div>
                </div>
                <div className='main'>
                    <div>
                        <label>Email</label>
                    </div>
                    <div>
                        <input type="email" name='email' value={udata.email} onChange={handleC}/>
                    </div>
                </div>
                <div className='btnContainer'>
                    <button className="btn btn-primary align-self-center" type="submit"
                    onClick={()=>props.UpdateAction(udata)}>Submit</button>
                    <button className="btn btn-primary align-self-center" type='reset'>Reset</button>
                </div>   
            </form>
        </div>

    )
}


const mapDispatchToProps = dispatch =>{
    return{
        
        UpdateAction: (udata) => dispatch(UpdateAction(udata))

    }
} 

export default connect(mapDispatchToProps,mapDispatchToProps) (UserEditForm)