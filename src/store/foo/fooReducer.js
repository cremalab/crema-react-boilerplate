export default function fooReducer(state = [], action) {
  switch (action.type) {
    case 'FOO_ACTION':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
