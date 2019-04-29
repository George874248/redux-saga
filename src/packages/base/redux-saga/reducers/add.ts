const count = (state = 0, action: any) => {
    switch (action.type) {
        case 'REMOVE_COUNT':
        case 'ADD_COUNT':
        return state = action.count, state;
      default:
        return state
    }
  }
  
  export default count;