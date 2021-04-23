const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 1500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />';

  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, ipsam?';
  name.innerHTML = 'Joseph Schmoe';
  date.innerHTML = 'April 23, 2021';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/16.jpg" alt="" />';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bgs - text.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
