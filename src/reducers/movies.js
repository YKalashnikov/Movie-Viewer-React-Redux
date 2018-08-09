const initialState = {
    isReady: false,
    items:null
};


export default (state = initialState, action) => {

   switch(action.type) {
       case 'ADD_NEW_MOVIE' :
       return {
           ...state, 
           items: action.payload,
           isReady: true
           
       };
       default:
       return state;
   };

};