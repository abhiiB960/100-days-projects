//how to read larger apis?

// jsonformatter paste the api and check in tree

// to undestand the whole structure of the api it takes time

// xmlhttpreq - used in legacy code
// even used in some frameworks today also

// to study - ajax, xmlhttprequest, ready state xmlreq,
// const reqUrl = 'https://api.github.com/users/hiteshchoudhary';
// const xhr = new XMLHttpRequest();
// xhr.open('GET', reqUrl);
// const username = document.querySelector('username');
// const followers = document.querySelector('username');
// const avatar = document.querySelector('avatar-img');
// xhr.onreadystatechange = function () {
//   //   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(this.responseText);

//     // console.log(data);
//     // console.log(data.avatar_url);
//   }
// };

// xhr.send();

const reqUrl = 'https://api.github.com/users/jarrodwatts';
const xhr = new XMLHttpRequest();
xhr.open('GET', reqUrl);
const username = document.querySelector('.username');
const followers = document.querySelector('.followers');
const avatar = document.querySelector('.avatar-img');

const btn = document.querySelector('.btn');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);

    const user_name = data.name;
    const follows = data.followers;
    const profile_pic = data.avatar_url;
    console.log(data);

    btn.addEventListener('click', () => {
      username.innerText = `UserName: ${user_name}`;
      followers.innerText = `Followers: ${follows}`;
      avatar.src = profile_pic;
    });
  }
};

xhr.send();
