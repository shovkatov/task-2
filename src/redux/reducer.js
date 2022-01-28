import {
   AUTHOR_NAME,
   AUTH_ID,
   POST_CREATED,
   POST_DELETE,
   POST_RECEIVED,
   POST_UPDATED,
   USER_AUTH,
   USER_RECEIVED,
} from './actionTypes';

const initState = {
   users: [],
   posts: [],
   isAuth: false,
   authID: [],
   authorName: '',
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
            posts: [action.payload, ...state.posts],
         };
      // case POST_UPDATED:
      //    return {
      //       ...state,
      //       posts: [action.payload, ...state.posts],
      //    };
      case AUTH_ID:
         return {
            ...state,
            authID: action.payload,
         };
      case AUTHOR_NAME:
         return {
            ...state,
            authorName: action.payload,
         };
      default:
         return state;
   }
};

export default reducer;
