const logged = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, uid: action.uid }
    case 'LOGOUT':
      return { ...state, uid: '' }
    default:
      return state
  }
}

export default logged
