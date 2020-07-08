import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import firebase from '../firebase';
 
function Admin(props){

    //const dispatch = useDispatch();


    const counter = useSelector(state => state);
    //console.log(counter, "here");

    async function logout(){
        //let history = useHistory();
        await firebase.logout()
        //props.history.push('/')
    }
   
    return (
    <div> 
        <h1>Admin Panel</h1>
        <button onClick={logout}>Logout</button>
        <h2>{counter.vehicle}</h2>
    </div>
    );
}

export default Admin;