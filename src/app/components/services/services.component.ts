import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
//import { Observable } from 'rxjs/Rx'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  forma: FormGroup; // encargado del manejo de la forma completamente

  usuario:any = {
    nombreCompleto: {
      nombre: "Alex",
      apellido: "Jimenez"
    },
    correo: "alex@alex.com"
  }

  constructor() {

    console.log('Objeto: ', this.usuario );

    this.forma = new FormGroup({

      // Segunda Forma
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl(''),
        'apellido': new FormControl( '' , [
                                          Validators.required, 
                                          Validators.minLength(3)
                                        ])
      }),
      'correo': new FormControl('', [
                                      Validators.required, 
                                      Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
                                    ]),
      'pasatiempos': new FormArray([
        new FormControl ('', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario ),
      'password1': new FormControl('', Validators.required ),
      'password2': new FormControl()

      // Primera forma
      // objeto: new FormControl('valor por defecto', 'reglas de validacion' [si son mas de una], 'reglas de validacion asincronas' ) 
     // 'nombre': new FormControl('Alejandro'),
     // 'apellido': new FormControl('', [Validators.required, Validators.minLength(3)] ),
     // 'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    })

    // this.forma.setValue( this.usuario );

    // Otra forma de hacer validaciones
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind( this.forma )
      // Se usa bind porque cuando se ejecuta esta funcion this en este contexto no existe
      // por eso se debe ejecutar bind para hacer referencia a la forma
    ]);

    // Detectar cambios en los valores de un campo
    // 1
    // this.forma.valueChanges
    //   .subscribe( data => {
    //     console.log(data);
    //   })
      // 2
    this.forma.controls['username'].valueChanges
      .subscribe( data => {
        console.log(data);
      })
      // 3
    this.forma.controls['username'].statusChanges
      .subscribe( data => {
        console.log(data);
      })

   }

  ngOnInit() {
  }

  guardarCambios(){
    console.log('Forma Value: ', this.forma.value);
    console.log('Forma: ', this.forma);
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  noIgual (control: FormControl ): { [s:string]:boolean } {
    
    let forma:any = this
    if( control.value !== forma.controls['password1'].value ) {
    return {
      noiguales:true
    }
    }
    return null;
    }

    /**
     * Validacion asincrona
     */
    existeUsuario( control: FormControl ): Promise<any>|Observable<any>{
      let promesa = new Promise(
        ( resolve, reject ) => {
          setTimeout( () => {
            if(control.value === 'pelos'){
              resolve( {existe:true} )
            } else {
              resolve( null )
            }
          }, 3000)
        }
      )
      return promesa;
    }

}
