import  fetchResource  from './index';

function getAllNotes() {
  return fetchResource(`notes`, { method: 'GET' });
}

function createNote(note) {
  return fetchResource(`notes`, { body: note, method: 'POST' });
}

function getSingleNote(noteId) {
  return fetchResource(`notes/${noteId}`, 'GET');
}

function updateNote(noteData, noteId) {
  return fetchResource(`notes/${noteId}`, { body: noteData, method: 'PUT' });
}

function deleteNote(noteId){
  return fetchResource(`notes/${noteId}`, { body: noteData, method: 'DELETE' });
}

export default {
  getAllNotes,
  createNote,
  getSingleNote,
  updateNote,
  deleteNote,
}