import { createStore } from 'redux'
import rootReducer from 'store/reducerConfig'

const store = createStore(rootReducer)
export default store
