import React from 'react';



const Users = ({ users }) => (
    <div className="textContainer">

        {
            users
                ? (
                    <div>
                        <h1>People currently chatting:</h1>
                        <div className="activeContainer">
                            <h2>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                    </div>
                                ))}
                            </h2>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export default Users;