

function clock(){
  const date = new Date;
  let hour = date.getHours();
  const meridan = hour>=12? "PM":"AM";
  hour = hour % 12 || 12;
  hour= hour.toString().padStart(2,0);
  const min = date.getMinutes().toString().padStart(2,0);
  const sec = date.getSeconds().toString().padStart(2,0);
  const timesting = `${hour}:${min}:${sec} ${meridan}`
  document.getElementById("box").textContent=  timesting;
  
}
clock()
setInterval((clock), 1000);