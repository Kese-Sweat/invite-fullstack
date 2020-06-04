// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const RANDOM_USER = "user/RANDOM_USER"
const GOING_USER = "user/GOING_USER"
const NOT_GOING = "user/NOT_GOING"


// 3. initial state
const initialState = {
  user: [],
  notGoing: [],
  going: []
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case RANDOM_USER:
        return { ...state, user: action.payload }
    case GOING_USER:
         return { ...state, going: action.payload }
     case NOT_GOING:
         return { ...state, notGoing: action.payload }
            default:
                return state
  }
}

// 5. action creators


function getUserData() {
  return dispatch => {
    axios.get('/api').then(resp => {
      dispatch({
        type: RANDOM_USER,
        payload: resp.data
      })
    })
  }
}
console.log(getUserData)

// 6. custom hook
export function useInvitee() {
  const dispatch = useDispatch()
  const invitee = useSelector(appState => appState.inviteeState.invitee)


  const getInvitee = () => dispatch(getUserData())// returning the getUserData function

  

  return { invitee, getInvitee }
}


