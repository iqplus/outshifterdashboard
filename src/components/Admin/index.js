import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
 
 
function Admin(){

    const dispatch = useDispatch();
    const handleClick = () => {
        console.log('dette er click');
        dispatch({
            type: "CREATE_BIKE"
        })
    }

    const counter = useSelector(state => state);
    console.log(counter, "here");
   
    
    return (
    <div> 
        <h1>Vehicles</h1>

        <button onClick={
            handleClick
    }
    >
        Bike
    </button> &nbsp;&nbsp;
    <h1>{counter.vehicle}</h1>
    <button onClick={() =>
        dispatch({
            type: "CREATE_CAR"
        })
    }
    >
        Car
    </button>
    {counter.vehicle}
    </div>
    );
}

export default Admin;