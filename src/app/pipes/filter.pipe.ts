import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
  
    const resultProds = [];

    for (const producto of value) {
      
      if (producto.codigo == arg ) {
        resultProds.push(producto);
        console.log('Ok');
        console.log(producto.descripcion);
        console.log(producto.precio);
        
      };
    };

    console.log(resultProds);

    return resultProds;
  }

}
