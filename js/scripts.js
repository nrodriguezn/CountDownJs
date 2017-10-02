//fecha limite, fecha actual y hacer la resta.

const getRemainTime = deadline => {
  let now = new Date(),
  remainTime = (new Date(deadline) - now + 1000) / 1000,//me devuelve un numero en milisegundos
        //la operacion slice(-2) usa dos digitos hacia atras, de esta manera si es >10 se queda con ese numero y si es <10, se le agrega el '0' en string
  remainSecond = ('0' + Math.floor(remainTime % 60)).slice(-2),      //si remain second es menor que 10, se le agrega un cero a la izuqierda
  remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
  remainHours = ('0' + Math.floor(remainTime / 3600 % 60)).slice(-2),
  remainDays = Math.floor(remainTime / (3600 * 24));
};
