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

    const allocated: number[] = new Array(votos.length);
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
