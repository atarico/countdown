const getRemainTime = (deadLine) => {
  const now = new Date(),
    remainTime = (new Date(deadLine) - now + 1000) / 1000;
  //El slice saca el fragmento de un string, si se pone en negativo empieza desde atras, entonces agarra los dos ultimos digitos, entonces si el resultado tiene 2 digitos el slice sacaria el 0, en cambio si tiene 1 solo digito no hace nada
  remainSecond = ("0" + Math.floor(remainTime % 60)).slice(-2);
  remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2);
  remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2);
  remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainDays,
    remainHours,
    remainMinutes,
    remainSecond,
  };
};

console.log(getRemainTime("May 24 2023 13:15:01 GMT-0300"));

const countdown = (deadLine, element, finalMsj) => {
  const theElement = document.getElementById(element);

  const timerUpdate = setInterval(() => {
    let time = getRemainTime(deadLine);

    theElement.innerHTML = `D:${time.remainDays} H:${time.remainHours} M:${time.remainMinutes} S:${time.remainSecond}`;

    if (time.remainTime <= 1) {
      clearInterval(timerUpdate);
      theElement.innerHTML = finalMsj;
    }
  }, 1000);
};

countdown("May 24 2023 13:15:01 GMT-0300", "clock", "Día feliz");
