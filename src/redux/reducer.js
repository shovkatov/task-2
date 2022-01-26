import { POST_CREATED, POST_RECEIVED, USER_AUTH, USER_RECEIVED } from './actionTypes';

const initState = {
   users: [],
   posts: [],
   isAuth: false,
};

const reducer = (state = initState, action) => {
   switch (action.type) {
      case USER_RECEIVED:
         return {
            ...state,
            users: action.payload,
         };
      case USER_AUTH:
         return {
            ...state,
            isAuth: action.payload,
         };
      case POST_RECEIVED:
         return {
            ...state,
            posts: action.payload,
         };
      case POST_CREATED:
         return {
            ...state,
         }
      default:
         return state;
   }
};

export default reducer;
