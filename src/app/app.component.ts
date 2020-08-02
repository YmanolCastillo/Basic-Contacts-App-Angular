import { Component } from '@angular/core';
import { Contactos } from '../app/models/contactos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contactosArray: Contactos[] = [
    { id: 1, nombre: 'Ymanol Martinez', telefono: '829-302-6892' },
    { id: 2, nombre: 'Testing App', telefono: '849-352-6792' },
    { id: 3, nombre: 'Jason Tedx', telefono: '829-302-6892' },
    { id: 4, nombre: 'Just for fun', telefono: '849-352-6792' },
    { id: 5, nombre: 'Max Steel', telefono: '829-302-6892' },
    { id: 6, nombre: 'The Test', telefono: '849-352-6792' },
    { id: 7, nombre: 'Mixed Name', telefono: '829-302-6892' },
    { id: 8, nombre: 'Hola Mundo', telefono: '849-352-6792' },
  ];


  //Creo una propiedad para la Clase Contactos
  selectedContacto : Contactos = new Contactos();

  AddOrEdit()
  {
    if(this.selectedContacto.id === 0)
    {
      this.selectedContacto.id = this.contactosArray.length + 1;
      //Guardo el Contacto dentro del Arreglo
      this.contactosArray.push(this.selectedContacto);
    }

    //Limpio las entradas cuando agrego el contacto
    this.selectedContacto = new Contactos();
  }

  OpenForEdit(contacto : Contactos)
  {
    this.selectedContacto = contacto;
  }

  Eliminar()
  {
    this.contactosArray = this.contactosArray.filter(x => x != this.selectedContacto);

    //Limpio las entradas del Form
    this.selectedContacto = new Contactos();
  }

}
