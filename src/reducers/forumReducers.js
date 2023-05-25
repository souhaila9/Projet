const initialState = {
    threads: [],
  };
  
  const forumReducer = (state = initialState, action) => {
    console.log( " action",action.payload)
    switch (action.type) {
      case 'ADD_THREAD':
        return {
          ...state,
          threads: [...state.threads, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default forumReducer;
  