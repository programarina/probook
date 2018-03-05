export const GET_USER_DATA = 'GET_USER_DATA';
export const GET_NOTE_DATA = 'GET_NOTE_DATA'; 

export function setUserData(user) {
  return {
    type: GET_USER_DATA,
    payload: user
  }
} 

export function setNoteData(note){
  return{
    type: GET_NOTE_DATA,
    payload: note
  }
}
