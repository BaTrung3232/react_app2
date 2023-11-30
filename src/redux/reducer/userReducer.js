
import { INCREMENT, DECREMENT } from '../action/counterAction';
import { FETCH_USER_LOGIN_SUCCESS } from '../action/userAction';

const INITIAL_STATE = {
    account: {
        access_token: '',
        refresh_token: '',
        username: '',
        images: '',
        role: ''
    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            console.log('>> check action', action)
            return {
                ...state, account: {
                    access_token: action?.payload?.DT?.access_token,
                    refresh_token: action?.payload?.DT?.refresh_token,
                    username: action?.payload?.DT?.username,
                    images: action?.payload?.DT?.images,
                    role: action?.payload?.DT?.role
                },
                isAuthenticated: true
            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;