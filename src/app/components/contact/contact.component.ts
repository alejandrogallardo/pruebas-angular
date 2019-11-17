import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  usuario: Object = {
    nombre: "",
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  paises = [{
    codigo: "CR",
    pais: "Costa Rica"
  },
  {
    codigo: "ES",
    pais: "España"
  },
  {
    codigo: "GT",
    pais: "Guatemala"
  }
]

sexos:string[] = ["Hombre", "Mujer"];

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    // this.miFormulario = this.fb.group({
    //   productos: this.fb.array([this.fb.group({ producto: ['']})])
    // })
  }

  // Formulario reactivo
  registerForm = this.fb.group({
    telefonos: this.fb.array([])
  })

  get telefonos(){
    return this.registerForm.get('telefonos') as FormArray; 
  
  }

  agregarTelefono(){
    const telefonoFormGroup = this.fb.group({
      codigo: '',
      descripcion: '',
      cantidad: '',
      total: ''
    })
    this.telefonos.push(telefonoFormGroup);
  }

  removerTelefono(indice: number ){
    this.telefonos.removeAt(indice);   
  }

  refrescar(){
    this.telefonos.controls.splice(0, this.telefonos.length);
  }
  // Fin Formulario rectivo

  guardar( forma: NgForm ){
    console.log("Formulario posteado");
    console.log( "ngForm ", forma );
    console.log( "Valores: ", forma.value );
  }


  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  alphaOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 32 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }

  // get getProductos(){
  //   return this.miFormulario.get('productos') as FormArray;
  // }
}
