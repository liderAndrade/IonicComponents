import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {

    if (texto === '') {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

    arreglo.filter(item => {
      return item.title.toLowerCase().includes(texto.toLocaleLowerCase)
    });

    return arreglo;
  }

}
