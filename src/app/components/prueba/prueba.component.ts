import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  filterProds = '';

  



  productos = [
    {
      id: "1",
      codigo: "BC1",
      descripcion: "Cereal",
      precio: "15.25"
    },{
      id: "2",
      codigo: "BC2",
      descripcion: "Carne",
      precio: "25.50"
    },{
      id: "3",
      codigo: "BC3",
      descripcion: "Frijol",
      precio: "10.00"
    },{
      id: "4",
      codigo: "BC4",
      descripcion: "Maiz",
      precio: "11.50"
    },{
      id: "5",
      codigo: "BC5",
      descripcion: "Tomate",
      precio: "35.95"
    },{
      id: "6",
      codigo: "BC6",
      descripcion: "Chorizo",
      precio: "80.00"
    }
  ]

  constructor( private fb: FormBuilder ) {
    
   }

  ngOnInit() {
  }

  // Formulario reactivo
  registerForm = this.fb.group({
    products: this.fb.array([])
  })

  get products(){
    return this.registerForm.get('products') as FormArray; 
  
  }

  addProduct(){
    const productsFormGroup = this.fb.group({
      codigo: '',
      descripcion: '',
      precioUnidad: '',
      valorp: '',
      totalp: ''
    })
    this.products.push(productsFormGroup);
  }

  removerProduct(indice: number ){
    this.products.removeAt(indice);   
  }




 

  guardar( ){
    console.log("Formulario posteado");
    console.log( "ngForm ", this.registerForm );
    console.log( "Valores: ", this.registerForm.value );
  }


  enviar( forma:NgForm ){
    console.log( forma );
    console.log( forma.value );
  }

  save( fomulario:NgForm ){
    console.log( fomulario.value );
  }

  calculo = {
    numero1:null,
    numerodos:null,
    totalop:null
  }
  
  calculate(){
    this.calculo.totalop = this.calculo.numero1 * this.calculo.numerodos;
  }

  model = {
    pprice:null,
    tax:null,
    total:null
  }

  calculates(){
    let tot = this.model.pprice * this.model.tax;
    let jjj = this.model.total + tot;
    this.model.total = jjj
  }
}
