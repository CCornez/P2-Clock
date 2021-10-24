import "../css/style.scss";

const time = document.querySelector(".time");

const getTime = () => {
  let d = new Date();
  let seconds = d.getSeconds();
  let minutes = d.getMinutes();
  let hours = d.getHours();
  time.innerHTML = `${("0" + hours).slice(-2)} : ${("0" + minutes).slice(
    -2
  )} : ${("0" + seconds).slice(-2)}`;
  console.log(seconds);
};

getTime();

setInterval(getTime, 1000);
