const socials = ["Twitter", "Facebook", "Instagram", "LinkedIn", "YouTube"];

socials.forEach((social) => {
  console.log(social);
});

socials.forEach((social, index) => {
  console.log(index, social);
});

socials.forEach((social, index, array) => {
  console.log(index, social, array);
});

// using function
function logSocials(social, index, arr) {
  console.log(social, index, arr);
}

socials.forEach(logSocials);

const socialObjs = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "YouTube", url: "https://youtube.com" },
  { name: "GitHub", url: "https://github.com" },
  { name: "Stack Overflow", url: "https://stackoverflow.com" },
  { name: "Medium", url: "https://medium.com" },
  { name: "Reddit", url: "https://reddit.com" },
  { name: "Pinterest", url: "https://pinterest.com" },
];

socialObjs.forEach((socialObj) => {
  console.log(socialObj);
});

socialObjs.forEach((socialObj, index) => {
  console.log(index, socialObj);
});

socialObjs.forEach((socialObj, index, array) => {
  console.log(index, socialObj, array);
});

// using function
function logSocialObj(socialObj, index, array) {
  console.log(index, socialObj, array);
}

socialObjs.forEach(logSocialObj);

//
