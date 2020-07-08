import {CREATE_BIKE, CREATE_CAR} from "./action";

const vehicleReducer = (state = [{vehicle: 'heihei', id: 1}], action) => { console.log(action.type, "dette er action type");
    switch (action.type) {
        
        case CREATE_BIKE: {       
            console.log(state);
            return {...state, vehicle: 'Its a bike', id:1};       
        }
        case CREATE_CAR: {       
            console.log(state);
            return {...state, vehicle: 'Its a car', id: 2};      
        }
               
        default:
            return state;
    }
};

export default (vehicleReducer);