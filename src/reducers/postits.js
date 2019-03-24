const postits = (state = [], action) => {
  switch(action.type) {
    case 'POSTITS':
      return action.postits
    case 'ADD_POSTIT':
      return [action.postit, ...state]
    case 'DELETE_POSTIT':
      return state.filter( p => p.id !== action.id)
    default:
      return state
  }
}

export default postits

        // this.setState({ departments: departments.filter(d => d.id !== id), })
