const postits = ( state = [], action ) => {
  switch(action.type) {
    case 'POSTITS':
      return action.postits
    case 'ADD_POSTIT':
      return [action.postits, ...state]
    default:
      return state
  }
}

export default postits
