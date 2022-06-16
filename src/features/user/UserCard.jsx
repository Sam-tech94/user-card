import React, { useEffect } from "react";
import "./UserCard.css"
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserCard = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    return (
        <div className="root2">
            <h1>User Card</h1>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {!user.loading && user.users.length ? (
                user.users.map(user => (
                    <div key={user.id} className="parent">
                        <div className="chil-1">
                            <img src="./avatar3.png"  alt="Avatar"/>
                        </div>
                        <div className="child-2">
                            <h3>{user.name}</h3>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                ))
            ) : null}
        </div>
    );
};

export default UserCard;