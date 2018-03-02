import { GET_USER_DATA } from "../actions/index";

export default function (state = null, action) {

  switch (action.type) {
    case GET_USER_DATA:
      return action.payload;
  }
  return state;
}