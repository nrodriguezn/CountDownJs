//fecha limite, fecha actual y hacer la resta.

const getRemainTime = deadline => {
  let now = new Date(),
  remainTime = (new Date(deadline) - now + 1000) / 1000,//me devuelve un numero en milisegundos
        //la operacion slice(-2) usa dos digitos hacia atras, de esta manera si es >10 se queda con ese numero y si es <10, se le agrega el '0' en string
  remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),      //si remain second es menor que 10, se le agrega un cero a la izuqierda
  remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
  remainHours = ('0' + Math.floor(remainTime / 3600 % 60)).slice(-2),
  remainDays = Math.floor(remainTime / (3600 * 24));

  return{
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays
  }
};

//console.log(getRemainTime('Nov 02 2017 18:47:00'))

//fecha limite, elemento donde se imprime(etiquetas), mensaje final
const countdown = (deadline, elem, finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval( () =>{
    let t = getRemainTime(deadline);    //cada segundo se actualizara esta fecha
    el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;

    if (t.remainTime <= 1){ //cuando la condicion se cumpla, el intervalo se va a detener
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }
    }, 1000) //la funcion recibe dos parametros, el 1000 es por 1 segundo, cada un segundo se actualizara
};

countdown('oct 2 2018 19:10:00', 'clock', 'Finalizo el tiempo')
