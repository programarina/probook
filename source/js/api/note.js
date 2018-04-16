import fetchResource from './index';

function getAllNotes(pageNum, notePerPage) {
  return fetchResource(`notes?_page=${pageNum}&_limit=${notePerPage}&_sort=dateCreated&_order=desc`, { method: 'GET' });
}

function createNote(note) {
  return fetchResource(`notes`, { body: note, method: 'POST' });
}

function updateNote(noteData, noteId) {
  return fetchResource(`notes/${noteId}`, { body: noteData, method: 'PUT' });
}

function deleteNote(noteId) {
  return fetchResource(`notes/${noteId}`, { method: 'DELETE' });
}

function getSingleNote(noteId) {
  return fetchResource(`notes/${noteId}`, { method: 'GET' });
}

export default {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  getSingleNote,
}