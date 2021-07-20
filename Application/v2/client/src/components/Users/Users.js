import React from 'react';
import { Container, Col, Row, Image, Button, Alert, Badge } from 'react-bootstrap';
import User from '../User/User'
import "../../styles/_register.scss";
import "../../styles/_login.scss";
import "../../styles/_user.scss";
const Users = ({ users }) => {



    return (
        <div>
            {
                users
                    ? (
                        <div className='usersInfoBar'>
                            <p>Members - {users.lenght}</p>
                            <div className="users_container">
                                {users.map((user, i) => <div className='user_container' key={i}>
                                    <img className='userPic' src="boy.png" roundedCircle />
                                    <span className='usernameLbl'><center>{user.name}</center></span>
                                </div>)}


                            </div>
                        </div>
                    )
                    : <div> This room is empty
                    <p>
                            <a href='/'>Join or Create an Agreement?</a>
                        </p>
                    </div>
            }        </div>
    )
}
export default Users