import * as constants from '../constants';

const INITIAL_STATE = {
    allproducts: [],
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case constants.SET_PRODUCTS: {
            return{
                ...state,
                allproducts: action.data
            }
        }

        default: {
            return state;
        }
    }
}

export default productsReducer;