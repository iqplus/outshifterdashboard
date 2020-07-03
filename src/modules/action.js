//types of action
export const CREATE_BIKE = "CREATE_BIKE";
export const CREATE_CAR = "CREATE_CAR";



//actions
export const createBike = bike =>({
    type: CREATE_BIKE,
    payload: bike
});

export const createCar = car =>({
    type: CREATE_CAR,
    payload: car
});



