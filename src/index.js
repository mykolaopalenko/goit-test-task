const followBtn = document.querySelector("button[data-action='follow']");
const dynamicValue = document.querySelector("#value");

const BGCOLOR = 'bgColor'
const BTNTEXT = 'btnText'
const STATUS = 'status'
const FOLLOWERS = 'followers'

let counterValue = 100500;
let followStatus = false;

updateOutput();


function followValue() {

   if (followStatus === true) {
      console.log("if", followStatus)
      counterValue -= 1;
      dynamicValue.textContent = counterValue.toLocaleString('en-US');
      followBtn.style.background = "#EBD8FF";
      followBtn.textContent = 'Follow';
      followStatus = false
      followUnSubLocal()

   } else {
      counterValue += 1;
      dynamicValue.textContent = counterValue.toLocaleString('en-US');
      followBtn.style.background = "#5CD3A8";
      followBtn.textContent = 'Following';
      followStatus = true
      followSubLocal()
   }
}


function followSubLocal() {
   localStorage.setItem(BGCOLOR, "#5CD3A8");
   localStorage.setItem(BTNTEXT, 'Following');
   localStorage.setItem(STATUS, true);
   localStorage.setItem(FOLLOWERS, dynamicValue.textContent);
}

function followUnSubLocal() {
   localStorage.setItem(BGCOLOR, "#EBD8FF");
   localStorage.setItem(BTNTEXT, 'Follow');
   localStorage.setItem(STATUS, false);
   localStorage.setItem(FOLLOWERS, dynamicValue.textContent);
}

function updateOutput() {
   followBtn.textContent = localStorage.getItem(BTNTEXT) || 'Follow';
   followBtn.style.background = localStorage.getItem(BGCOLOR) || "#EBD8FF";
   followStatus = localStorage.getItem(STATUS) || false;
   dynamicValue.textContent = localStorage.getItem(FOLLOWERS) || '100,500';
}

followBtn.addEventListener('click', followValue);
