import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  candidatos: string[] = [];
  resumen: string[] = [];
  seleccionado: any;
  lista: any[] = [];

  constructor(private service: AppService) {
  }

  ngOnInit(): void {
    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 2,
        escanos: 45,
        nombre: 'SENADORES',
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 0,
        escanos: 7,
        nombre: 'DIPUTADOS CAPITAL'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 11,
        escanos: 20,
        nombre: 'DIPUTADOS CENTRAL'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 1,
        escanos: 3,
        nombre: 'DIPUTADOS CONCEPCION'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 2,
        escanos: 5,
        nombre: 'DIPUTADOS SAN PEDRO'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 3,
        escanos: 4,
        nombre: 'DIPUTADOS CORDILLERA'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 4,
        escanos: 3,
        nombre: 'DIPUTADOS GUAIRA'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 5,
        escanos: 6,
        nombre: 'DIPUTADOS CAAGUAZU'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 6,
        escanos: 2,
        nombre: 'DIPUTADOS CAAZAPA'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 7,
        escanos: 6,
        nombre: 'DIPUTADOS ITAPUA'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 8,
        escanos: 2,
        nombre: 'DIPUTADOS MISIONES'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 9,
        escanos: 4,
        nombre: 'DIPUTADOS PARAGUARI'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 10,
        escanos: 8,
        nombre: 'DIPUTADOS ALTO PARANA'
      }
    );


    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 12,
        escanos: 2,
        nombre: 'DIPUTADOS ÑEEMBUCU'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 13,
        escanos: 2,
        nombre: 'DIPUTADOS AMAMBAY'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 14,
        escanos: 2,
        nombre: 'DIPUTADOS CANINDEYU'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 15,
        escanos: 2,
        nombre: 'DIPUTADOS PDTE. HAYES'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 16,
        escanos: 1,
        nombre: 'DIPUTADOS ALTO PARAGUAY'
      }
    );

    this.lista.push(
      {
        codeleccion: 29,
        candidatura: 3,
        departamento: 17,
        escanos: 1,
        nombre: 'DIPUTADOS BOQUERON'
      }
    );

    let j = 0;
    this.lista.forEach(value => {
      j += value.escanos;
    });
    console.log(j);
    this.doJob({
      "totales": {
        "totalMesas": 157,
        "mesasPublicadas": 157,
        "blancos": 1720,
        "nulos": 170,
        "totalVotos": 25819,
        "canElectores": 97952,
        "canElectoresPublicados": 97952,
        "nocomputados": 30,
        "tipCandidatura": 2
      },
      "candidatos": [{
        "orden": 3859,
        "numLista": "3",
        "nomCandidato": " ",
        "desPartido": "VAMOS JUNTOS",
        "colLista": "250,235,203",
        "votos": 7115,
        "imgCandidato": "L3",
        "candidatosPref": [{
          "orden": 3859,
          "numLista": "3",
          "nomCandidato": "Maria Blanca Lila Mignarro Gonzalez",
          "desPartido": "VAMOS JUNTOS",
          "colLista": "250,235,203",
          "votos": 5729,
          "ordCandidato": 1
        }, {
          "orden": 3859,
          "numLista": "3",
          "nomCandidato": "Carlos Maria Aquino Lopez",
          "desPartido": "VAMOS JUNTOS",
          "colLista": "250,235,203",
          "votos": 369,
          "ordCandidato": 2
        }, {
          "orden": 3859,
          "numLista": "3",
          "nomCandidato": "Victor Andres Buzarquis Garcia",
          "desPartido": "VAMOS JUNTOS",
          "colLista": "250,235,203",
          "votos": 293,
          "ordCandidato": 5
        }, {
          "orden": 3859,
          "numLista": "3",
          "nomCandidato": "Sara Zunilda Sosa Saucedo",
          "desPartido": "VAMOS JUNTOS",
          "colLista": "250,235,203",
          "votos": 213,
          "ordCandidato": 3
        }, {
          "orden": 3859,
          "numLista": "3",
          "nomCandidato": "Rosa Amalia Mancuello Ozuna",
          "desPartido": "VAMOS JUNTOS",
          "colLista": "250,235,203",
          "votos": 187,
          "ordCandidato": 6
        }, {
          "orden": 3859,
          "numLista": "3",
          "nomCandidato": "Modesto Ramon Guggiari Doutrelau",
          "desPartido": "VAMOS JUNTOS",
          "colLista": "250,235,203",
          "votos": 171,
          "ordCandidato": 4
        }, {
          "orden": 3859,
          "numLista": "3",
          "nomCandidato": "Olga Nathalia Portillo Castillo",
          "desPartido": "VAMOS JUNTOS",
          "colLista": "250,235,203",
          "votos": 153,
          "ordCandidato": 7
        }]
      }, {
        "orden": 3860,
        "numLista": "9",
        "nomCandidato": " ",
        "desPartido": "FRENTE DE INTEGRACION LIBERAL",
        "colLista": "94,59,47",
        "votos": 13645,
        "imgCandidato": "L9",
        "candidatosPref": [{
          "orden": 3860,
          "numLista": "9",
          "nomCandidato": "Agustin Saguier",
          "desPartido": "FRENTE DE INTEGRACION LIBERAL",
          "colLista": "94,59,47",
          "votos": 8236,
          "ordCandidato": 1
        }, {
          "orden": 3860,
          "numLista": "9",
          "nomCandidato": "Monica Gomez",
          "desPartido": "FRENTE DE INTEGRACION LIBERAL",
          "colLista": "94,59,47",
          "votos": 1814,
          "ordCandidato": 2
        }, {
          "orden": 3860,
          "numLista": "9",
          "nomCandidato": "Pilar Abente",
          "desPartido": "FRENTE DE INTEGRACION LIBERAL",
          "colLista": "94,59,47",
          "votos": 1086,
          "ordCandidato": 4
        }, {
          "orden": 3860,
          "numLista": "9",
          "nomCandidato": "Jorge Amarilla",
          "desPartido": "FRENTE DE INTEGRACION LIBERAL",
          "colLista": "94,59,47",
          "votos": 938,
          "ordCandidato": 5
        }, {
          "orden": 3860,
          "numLista": "9",
          "nomCandidato": "Federico Enciso",
          "desPartido": "FRENTE DE INTEGRACION LIBERAL",
          "colLista": "94,59,47",
          "votos": 733,
          "ordCandidato": 3
        }, {
          "orden": 3860,
          "numLista": "9",
          "nomCandidato": "Gonzalo Carreras",
          "desPartido": "FRENTE DE INTEGRACION LIBERAL",
          "colLista": "94,59,47",
          "votos": 516,
          "ordCandidato": 7
        }, {
          "orden": 3860,
          "numLista": "9",
          "nomCandidato": "Marta Benitez Florentin",
          "desPartido": "FRENTE DE INTEGRACION LIBERAL",
          "colLista": "94,59,47",
          "votos": 322,
          "ordCandidato": 6
        }]
      }, {
        "orden": 3861,
        "numLista": "19",
        "nomCandidato": " ",
        "desPartido": "SOMBRERO PIRI",
        "colLista": "218,124,15",
        "votos": 555,
        "imgCandidato": "L19",
        "candidatosPref": [{
          "orden": 3861,
          "numLista": "19",
          "nomCandidato": "Manuel Radice",
          "desPartido": "SOMBRERO PIRI",
          "colLista": "218,124,15",
          "votos": 134,
          "ordCandidato": 1
        }, {
          "orden": 3861,
          "numLista": "19",
          "nomCandidato": "Nabila Frachi",
          "desPartido": "SOMBRERO PIRI",
          "colLista": "218,124,15",
          "votos": 132,
          "ordCandidato": 4
        }, {
          "orden": 3861,
          "numLista": "19",
          "nomCandidato": "Andrea Elizalde Cañellas",
          "desPartido": "SOMBRERO PIRI",
          "colLista": "218,124,15",
          "votos": 106,
          "ordCandidato": 2
        }, {
          "orden": 3861,
          "numLista": "19",
          "nomCandidato": "Luis Almada",
          "desPartido": "SOMBRERO PIRI",
          "colLista": "218,124,15",
          "votos": 65,
          "ordCandidato": 7
        }, {
          "orden": 3861,
          "numLista": "19",
          "nomCandidato": "Hugo Nuñez",
          "desPartido": "SOMBRERO PIRI",
          "colLista": "218,124,15",
          "votos": 59,
          "ordCandidato": 5
        }, {
          "orden": 3861,
          "numLista": "19",
          "nomCandidato": "Juan Farina Gomez",
          "desPartido": "SOMBRERO PIRI",
          "colLista": "218,124,15",
          "votos": 47,
          "ordCandidato": 3
        }, {
          "orden": 3861,
          "numLista": "19",
          "nomCandidato": "Salome Galeano",
          "desPartido": "SOMBRERO PIRI",
          "colLista": "218,124,15",
          "votos": 12,
          "ordCandidato": 6
        }]
      }, {
        "orden": 3862,
        "numLista": "50",
        "nomCandidato": " ",
        "desPartido": "RENOVACION AZUL",
        "colLista": "254,205,87",
        "votos": 2584,
        "imgCandidato": "L50",
        "candidatosPref": [{
          "orden": 3862,
          "numLista": "50",
          "nomCandidato": "David Jure",
          "desPartido": "RENOVACION AZUL",
          "colLista": "254,205,87",
          "votos": 1696,
          "ordCandidato": 1
        }, {
          "orden": 3862,
          "numLista": "50",
          "nomCandidato": "Gisselle Barrail Barrios",
          "desPartido": "RENOVACION AZUL",
          "colLista": "254,205,87",
          "votos": 339,
          "ordCandidato": 2
        }, {
          "orden": 3862,
          "numLista": "50",
          "nomCandidato": "Jorge Raul Leoz",
          "desPartido": "RENOVACION AZUL",
          "colLista": "254,205,87",
          "votos": 221,
          "ordCandidato": 3
        }, {
          "orden": 3862,
          "numLista": "50",
          "nomCandidato": "Liliene Bareiro",
          "desPartido": "RENOVACION AZUL",
          "colLista": "254,205,87",
          "votos": 141,
          "ordCandidato": 4
        }, {
          "orden": 3862,
          "numLista": "50",
          "nomCandidato": "Ramon Dario Roa",
          "desPartido": "RENOVACION AZUL",
          "colLista": "254,205,87",
          "votos": 92,
          "ordCandidato": 7
        }, {
          "orden": 3862,
          "numLista": "50",
          "nomCandidato": "Luis Maria Castagnino",
          "desPartido": "RENOVACION AZUL",
          "colLista": "254,205,87",
          "votos": 52,
          "ordCandidato": 5
        }, {
          "orden": 3862,
          "numLista": "50",
          "nomCandidato": "Gladys Concepcion Martinez De Valdez",
          "desPartido": "RENOVACION AZUL",
          "colLista": "254,205,87",
          "votos": 43,
          "ordCandidato": 6
        }]
      }],
      "hora": {
        "dayOfYear": 358,
        "dayOfWeek": "SATURDAY",
        "dayOfMonth": 24,
        "monthValue": 12,
        "year": 2022,
        "month": "DECEMBER",
        "hour": 17,
        "minute": 29,
        "second": 44,
        "nano": 693000000,
        "chronology": {"calendarType": "iso8601", "id": "ISO"}
      },
      "horaFormated": "24-12-2022 17:29:44"
    }, 7);
  }

  refresh(): void {
    this.resumen = [];
    this.candidatos = [];
    let dato: any = {...this.seleccionado};
    delete dato.escanos;
    delete dato.nombre;
    this.service.executeGet(dato).subscribe(responseG => {
      this.doJob(responseG, this.seleccionado.escanos);
    });
  }

  doJob(item: any, escanos: number) {
    const candidatosPriorizados = new Map<number, Array<any>>();
    const partidos = new Map<number, string>();

    const votos: number[] = new Array(item.candidatos.length);
    const partido: number[] = new Array(item.candidatos.length);
    let i = 0;

    for (const candidato of item.candidatos) {
      votos[i] = candidato.votos;
      partido[i] = candidato.orden;

      const queue: Array<any> = new Array<any>();

      for (const candidatosPrefDTO of candidato.candidatosPref) {
        queue.push(candidatosPrefDTO);
      }

      candidatosPriorizados.set(candidato.orden, queue);
      partidos.set(candidato.orden, candidato.desPartido);
      i++;
    }

    const allocated: number[] = new Array(votos.length).fill(0);
    const dhondtTable: number[][] = new Array(escanos).fill(null).map(() => new Array(votos.length).fill(0));

    for (let m = 0; m < escanos; m++) {
      for (let n = 0; n < votos.length; n++) {
        if (m === 0) {
          dhondtTable[m][n] = votos[n];
        } else {
          dhondtTable[m][n] = dhondtTable[0][n] / (m + 1);
        }
      }
    }

    let o = 0;

    for (let c = 1; c < escanos + 1; c++) {
      o = this.getMaxElement(dhondtTable, votos.length, escanos);
      allocated[o] = allocated[o] + 1;
      let candidatosPrefDTOS = candidatosPriorizados.get(partido[o]);
      // @ts-ignore
      const candidato: CandidatosPrefDTO = candidatosPrefDTOS.shift();
      this.candidatos.push(`${c} - ${candidato?.nomCandidato} (${candidato?.desPartido})\n`);
    }

    console.log(this.candidatos.join(''));

    console.log(allocated);

    for (let p = 0; p < votos.length; p++) {
      this.resumen.push(`Partido: ${partidos.get(partido[p])} obtiene ${allocated[p]} escaños\n`);
    }

    console.log(this.resumen.join(''));
  }

  getMaxElement(dTable: number[][], pN: number, pM: number): number {
    let maxValue = dTable[0][0];
    let maxElement = 0;
    let i = 0, j = 0;
    for (let sn = 0; sn < pN; sn++) {
      for (let sm = 0; sm < pM; sm++) {
        if (dTable[sm][sn] > maxValue) {
          maxValue = dTable[sm][sn];
          i = sm;
          j = sn;
        }
      }
    }
    dTable[i][j] = 0.0;
    return j;
  }


}
