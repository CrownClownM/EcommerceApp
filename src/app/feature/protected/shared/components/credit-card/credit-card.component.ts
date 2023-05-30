import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent {

  miFormulario: FormGroup = this.fb.group({
    number: ['', [ Validators.required, Validators.minLength(19) ]],
    name:    ['', [ Validators.required, Validators.maxLength(20), Validators.pattern("[A-Za-z' ']{1,}")]],
    month:    ['', [ Validators.required, Validators.maxLength(2) ]],
    year:    ['', [ Validators.required, Validators.maxLength(2) ]],
    cvv: ['', [ Validators.required, Validators.minLength(3), Validators.pattern("[0-9]{1,}")]],
  });

  mesesYear = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

  years = [22, 23, 24, 25, 26, 27, 28]

  cardNumber    : string              = '';
  cardName      : string              = '';
  month         : number   | string   = 'MM';
  year          : number[] | string   = 'YY';
  cvvNumber           : string              = '';

  constructor( private fb: FormBuilder, private store:StoreService, private router:Router ){
  }

  addNumber(termino:string){
    this.cardNumber = termino;
  }

  addName(termino:string){
    this.cardName = termino.replace(/\d/g, '');
    this.miFormulario.controls['name'].setValue(this.cardName);
  }

  addCvv(termino:string){
    this.cvvNumber = termino.replace(/\D/g, '');
    this.miFormulario.controls['cvv'].setValue(this.cvvNumber);
  }

  addYear(termino:string){
    this.year = termino;
  }

  addMonth(termino:string){
    this.month = termino;
  }

  campoValido(campo:string){
    return this.miFormulario.controls[campo]?.errors && this.miFormulario.controls[campo]?.touched;
  }
  
  // Agregando clase que rota la tarjeta
  rotate(tarjeta: HTMLElement) {
    tarjeta.classList.toggle('active')
  }

  // Mostrar formulario con boton giratorio
  displayForm() {
    document.getElementById('formulario-tarjeta')?.classList.toggle('active')
    document.getElementById('btn-abrir-formulario')?.classList.toggle('active')
  }

  complete( form: FormGroup ) {


    this.cardNumber = form.value.number
    .replace(/\s/g, '')
    // Elimina las letras
    .replace(/\D/g, '')
    // Agregar espacio cada cuatro números
    .replace(/([0-9]{4})/g, '$1 ')
    // Eliminando últimos espaciados
    .trim()

    this.miFormulario.controls['number'].setValue(this.cardNumber);

    // Imagen Front

     switch (this.miFormulario.value.number.slice(0,1)) {

      case "1":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen = document.createElement('img')
        imagen.setAttribute('width','150rem')
        imagen.src = '../../../../../../assets/americanexpress.png'
        document.getElementById('logo-marca')!.appendChild(imagen)
        break;

      case "2":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen1 = document.createElement('img')
        imagen1.setAttribute('width','140rem')
        imagen1.src = '../../../../../../assets/visa.png'
        document.getElementById('logo-marca')!.appendChild(imagen1)
        break; 

      case "3":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen2 = document.createElement('img')
        imagen2.setAttribute('width','150rem')
        imagen2.src = '../../../../../../assets/americanexpress.png'
        document.getElementById('logo-marca')!.appendChild(imagen2)
        break;

      case "4":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen3 = document.createElement('img')
        imagen3.setAttribute('width','140rem')
        imagen3.src = '../../../../../../assets/visa.png'
        document.getElementById('logo-marca')!.appendChild(imagen3)
        break;

      case "5":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen4 = document.createElement('img')
        imagen4.setAttribute('width','130rem')
        imagen4.src = '../../../../../../assets/mastercard.png'
        document.getElementById('logo-marca')!.appendChild(imagen4)
        break;

      case "6":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen5 = document.createElement('img')
        imagen5.setAttribute('width','180rem')
        imagen5.src = '../../../../../../assets/discover.png'
        document.getElementById('logo-marca')!.appendChild(imagen5)
        break;
      
      case "7":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen6 = document.createElement('img')
        imagen6.setAttribute('width','130rem')
        imagen6.src = '../../../../../../assets/mastercard.png'
        document.getElementById('logo-marca')!.appendChild(imagen6)
        break;

      case "8":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen7 = document.createElement('img')
        imagen7.setAttribute('width','180rem')
        imagen7.src = '../../../../../../assets/discover.png'
        document.getElementById('logo-marca')!.appendChild(imagen7)
        break;

      case "9":
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen8 = document.createElement('img')
        imagen8.setAttribute('width','130rem')
        imagen8.src = '../../../../../../assets/mastercard.png'
        document.getElementById('logo-marca')!.appendChild(imagen8)
        break;

      case "": 
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
    }

    // Imagen Back

    switch (this.miFormulario.value.number.slice(0, 1)) {

      case "1":
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen = document.createElement('img')
        imagen.setAttribute('width','150rem')
        imagen.src = '../../../../../../assets/americanexpress.png'
        document.getElementById('logo-marca-trasera')!.appendChild(imagen)
        break;

      case "2":
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen1 = document.createElement('img')
        imagen1.setAttribute('width','140rem')
        imagen1.src = '../../../../../../assets/visa.png'
        document.getElementById('logo-marca-trasera')!.appendChild(imagen1)
        break; 

      case "3":
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen2 = document.createElement('img')
        imagen2.setAttribute('width','150rem')
        imagen2.src = '../../../../../../assets/americanexpress.png'
        document.getElementById('logo-marca-trasera')!.appendChild(imagen2)
        break;

      case "4":
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen3 = document.createElement('img')
        imagen3.setAttribute('width','140rem')
        imagen3.src = '../../../../../../assets/visa.png'
        document.getElementById('logo-marca-trasera')!.appendChild(imagen3)
        break;

      case "5":
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen4 = document.createElement('img')
        imagen4.setAttribute('width','130rem')
        imagen4.src = '../../../../../../assets/mastercard.png'
        document.getElementById('logo-marca-trasera')!.appendChild(imagen4)
        break;

      case "6":
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen5 = document.createElement('img')
        imagen5.setAttribute('width','180rem')
        imagen5.src = '../../../../../../assets/discover.png'
        document.getElementById('logo-marca-trasera')!.appendChild(imagen5)
        break;

      case "7":
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen6 = document.createElement('img')
        imagen6.setAttribute('width','130rem')
        imagen6.src = '../../../../../../assets/mastercard.png'
        document.getElementById('logo-marca-trasera')!.appendChild(imagen6)
        break;

      case "8":
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen7 = document.createElement('img')
        imagen7.setAttribute('width','180rem')
        imagen7.src = '../../../../../../assets/discover.png'
        document.getElementById('logo-marca-trasera')!.appendChild(imagen7)
        break;

      case "9":
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
        let imagen8 = document.createElement('img')
        imagen8.setAttribute('width','130rem')
        imagen8.src = '../../../../../../assets/mastercard.png'
        document.getElementById('logo-marca-trasera')!.appendChild(imagen8)
        break;

      case "": 
        document.getElementById('logo-marca')!.innerHTML = ''
        document.getElementById('logo-marca-trasera')!.innerHTML = ''
    }
    
  }

  // crear una funcion en vez del 2do switch y la variable de entrada sea logo marca trasera y logo marca y luego llamar ambas funciones

  voltearTarjeta(){
    if( document.getElementById('tarjeta')?.classList.contains('active') ){
      document.getElementById('tarjeta')?.classList.remove('active')
    }
  }

  rellenarCVV(){
    if( !document.getElementById('tarjeta')?.classList.contains('active') ) {
      document.getElementById('tarjeta')?.classList.add('active')
    }
  }

  payment(){
    this.store.saveRecord();
    this.router.navigateByUrl('/user');
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada correctamente',
    })
  }

}
