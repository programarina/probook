import  fetchResource  from './index';

function getAllNotes(pageNum, notePerPage) {
  return fetchResource(`notes?_page=${pageNum}&_limit=${notePerPage}`, { method: 'GET' });
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
  return fetchResource(`notes/${noteId}`, { method: 'DELETE' });
}

export default {
  getAllNotes,
  createNote,
  getSingleNote,
  updateNote,
  deleteNote,
}