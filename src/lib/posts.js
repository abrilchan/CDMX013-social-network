import {
  getFirestore, collection, addDoc, doc, onSnapshot, updateDoc, deleteDoc,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

export const addPost = (inputPost, userPost) => addDoc(collection(db, 'post'), { inputPost, userPost, fecha: 'hoy' });

export const getPost = (callback) => onSnapshot(collection(db, 'post'), callback);

export const deletePost = (postId) => deleteDoc(doc(db, 'post', postId));

export const editPost = (postId, newInputPost) => updateDoc(doc(db, 'post', postId), { inputPost: newInputPost });
