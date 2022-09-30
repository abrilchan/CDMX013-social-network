import { onNavigate } from '../main.js';
import { addPost, getPost } from '../lib/posts.js';
import { singOutUser } from '../lib/auth.js';

export const Feed = () => {
  const sectionFeed = document.createElement('section');
  sectionFeed.setAttribute('class', 'section-feed');

  const formPost = document.createElement('form');

  const textPost = document.createElement('input');
  textPost.setAttribute('placeholder', 'Share your recipes...');
  textPost.setAttribute('class', 'textPost');

  const buttonPost = document.createElement('input');
  buttonPost.setAttribute('type', 'submit');
  buttonPost.setAttribute('id', 'button-post');
  buttonPost.setAttribute('value', '');

  const containerPost = document.createElement('div');
  containerPost.setAttribute('class', 'containerPost');

  const menu = document.createElement('nav');

  const iconHome = document.createElement('img');
  iconHome.src = './images/iconhome.png';
  const iconLogout = document.createElement('img');
  iconLogout.src = './images/iconeoff.png';
  iconLogout.setAttribute('id', 'iconLogout');

  iconLogout.addEventListener('click', () => {
    singOutUser().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  });

  menu.append(iconHome, iconLogout);
  formPost.append(textPost, buttonPost);
  sectionFeed.append(formPost, containerPost, menu);

  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    if (textPost.value !== '') {
      addPost(textPost.value);
    }
    /* getPost((querySnapshot) => {
      // containerPost.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const postData = doc.data();
      });
    });
    // console.log(addPost); */

    getPost((prueba) => {
      prueba.forEach((miniPrueba) => console.log('Current data: ', miniPrueba.data()));
    });
    textPost.value = '';
  });
  return sectionFeed;
};
