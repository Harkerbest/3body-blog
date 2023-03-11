const countdown = document.querySelector("#time");
const endDate = new Date("2023-06-07 00:00:00");

setInterval(() => {
  const now = new Date();
  const distance = endDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
}, 1000);
