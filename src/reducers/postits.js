const postits = (state = [], action) => {
  switch(action.type) {
    case 'POSTITS':
      return action.postits
    case 'ADD_POSTIT':
      return [action.postit, ...state]
    default:
      return state
  }
}

export default postits
