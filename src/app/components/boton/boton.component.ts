import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  public botonesArray = [
    {
      "id": 0,
      "numero": "00"
    },
    {
      "id": 1,
      "numero": "01"
    },
    {
      "id": 2,
      "numero": "02"
    },
    {
      "id": 3,
      "numero": "03"
    },
    {
      "id": 4,
      "numero": "04"
    },
    {
      "id": 5,
      "numero": "05"
    },
    {
      "id": 6,
      "numero": "06"
    },
    {
      "id": 7,
      "numero": "07"
    },
    {
      "id": 8,
      "numero": "08"
    },
    {
      "id": 9,
      "numero": "09"
    },
    {
      "id": 10,
      "numero": "10"
    },
    {
      "id": 11,
      "numero": "11"
    },
    {
      "id": 12,
      "numero": "12"
    },
    {
      "id": 13,
      "numero": "13"
    },
    {
      "id": 14,
      "numero": "14"
    },
    {
      "id": 15,
      "numero": "15"
    },
    {
      "id": 16,
      "numero": "16"
    },
    {
      "id": 17,
      "numero": "17"
    },
    {
      "id": 18,
      "numero": "18"
    },
    {
      "id": 19,
      "numero": "19"
    },
    {
      "id": 20,
      "numero": "20"
    },
    {
      "id": 21,
      "numero": "21"
    },
    {
      "id": 22,
      "numero": "22"
    },
    {
      "id": 23,
      "numero": "23"
    },
    {
      "id": 24,
      "numero": "24"
    },
    {
      "id": 25,
      "numero": "25"
    },
    {
      "id": 26,
      "numero": "26"
    },
    {
      "id": 27,
      "numero": "27"
    },
    {
      "id": 28,
      "numero": "28"
    },
    {
      "id": 29,
      "numero": "29"
    },
    {
      "id": 30,
      "numero": "30"
    },
    {
      "id": 31,
      "numero": "31"
    },
    {
      "id": 32,
      "numero": "32"
    },
    {
      "id": 33,
      "numero": "33"
    },
    {
      "id": 34,
      "numero": "34"
    },
    {
      "id": 35,
      "numero": "35"
    },
    {
      "id": 36,
      "numero": "36"
    }
  ];

  public apuestaUsuario = [];

  public contador = 0;

  public playStart = false;

  constructor() {

  }

  ngOnInit(): void {

  }

  // Funcion poner ceros a la izquierda
  zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */
    var zero = "0"; /* String de cero */

    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString());
        } else {
             return numberOutput.toString();
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString());
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString());
        }
    }
  }

  goBoton(id:any): void {
    let page = document.getElementById(id);
    let inactivo = page.classList.contains("botonActivo");
    if(this.contador >= 0 && this.contador < 5 ) {
      console.log(id);
      console.log(page);
      this.playStart= false;
      console.log("playStart ", this.playStart);

      if(inactivo == false) {
        page.className = "botonActivo";
        this.contador = this.contador + 1;
        this.apuestaUsuario.push(id);
        console.log(this.apuestaUsuario);
        console.log("APUESTA :", this.apuestaUsuario[0]);

      } else {
        page.className = "";
        this.contador = this.contador - 1;
        let apuesta = this.apuestaUsuario.indexOf(id);
        console.log("posicion: ",apuesta);
        this.apuestaUsuario.splice(apuesta,1)
        console.log(this.apuestaUsuario);
      }
      console.log("Contador ",this.contador);
    }
    if(this.contador == 5) {
      if(inactivo == true) {
        page.className = "";
        this.contador = this.contador - 1;
        let apuesta = this.apuestaUsuario.indexOf(id);
        console.log("posicion: ",apuesta);
        this.apuestaUsuario.splice(apuesta,1)
        console.log(this.apuestaUsuario);
        this.playStart= false;
      } else {
        this.playStart = true;
        console.log("playStart ", this.playStart);
      }

    }


    console.log("Contador ",this.contador);

  }

  goPlay(): void {
    console.log("playStart: ", this.playStart);
  }

}
