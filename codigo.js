class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.instalado = false;
    this.iniciado = false;
  }

  instalar() {
    if (this.instalado == false) {
      this.instalado = true;
      if (this.instalado == true) {
        alert(`App instalada correctamente`);
      } else {
        alert(`Ha ocurrido un error`);
      }
    } else {
      alert(`La App ya está instalada`);
    }
  }

  desinstalar() {
    if (this.instalado == true) {
      this.instalado = false;
      alert(`App desinstalada correctamente`);
    } else {
      alert(`La App no se encuentra instalada`);
    }
  }

  abrir() {
    if (this.instalado == true && this.iniciado == false) {
      alert(`App encendida`);
      this.iniciado = true;
    } else if (this.instalado == false) {
      alert(`App no instalada`);
    } else if (this.instalado == true && this.iniciado == true) {
      alert(`La App ya está iniciada`);
    }
  }

  cerrar() {
    if (this.instalado == true && this.iniciado == true) {
      alert(`App apagada`);
      this.iniciado = false;
    } else if (this.instalado == false) {
      alert(`App no instalada`);
    } else if (this.instalado == true && this.iniciado == false) {
      alert(`La App ya está apagada`);
    }
  }

  appInfo() {
    return `
      Descargas: <b>${this.descargas}</b> <br>
      Puntuación; <b>${this.puntuacion}</b> <br>
      Peso: <b>${this.peso}</b> <br>
      `;
  }
}

const app1 = new App(`16.000`, `5 estrellas`, `900mb`);
const app2 = new App(`1.000`, `4 estrellas`, `400mb`);
const app3 = new App(`6.000`, `4.5 estrellas`, `100mb`);
const app4 = new App(`23.000`, `4.8 estrellas`, `1gb`);
const app5 = new App(`900`, `5 estrellas`, `250mb`);
const app6 = new App(`17`, `3.7 estrellas`, `522mb`);
const app7 = new App(`42.981`, `2.9 estrellas`, `723mb`);

document.write(`
<b style='color:red'>App1:</b> ${app1.appInfo()} <br>
<b style='color:red'>App2:</b> ${app2.appInfo()} <br>
<b style='color:red'>App3:</b> ${app3.appInfo()} <br>
<b style='color:red'>App4:</b> ${app4.appInfo()} <br>
<b style='color:red'>App5:</b> ${app5.appInfo()} <br>
<b style='color:red'>App6:</b> ${app6.appInfo()} <br>
<b style='color:red'>App7:</b> ${app7.appInfo()} <br>
`);
