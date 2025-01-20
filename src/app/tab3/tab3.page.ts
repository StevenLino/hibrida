import { Component } from '@angular/core';
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonSearchbar, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonModal, 
  IonButtons, 
  IonButton, 
  IonImg, 
  IonList, 
  IonItem, 
  IonLabel 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonSearchbar, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonModal, 
    IonButtons, 
    IonButton, 
    IonImg, 
    IonList, 
    IonItem, 
    IonLabel, 
    ExploreContainerComponent
  ],
})
export class Tab3Page {
  categorias = [
    {
      titulo: 'Camisa1',
      imagen: 'assets/img/camisa1.jpg',
      categoria: 'Ropa Formal',
      precio: '$25.00',
      codigo: 'C001',
    },
    {
      titulo: 'Camisa2',
      imagen: 'assets/img/camisa2.jpg',
      categoria: 'Ropa Formal',
      precio: '$30.00',
      codigo: 'C001',
    },
    {
      titulo: 'Camisa3',
      imagen: 'assets/img/camisa3.jpg',
      categoria: 'Ropa Formal',
      precio: '$20.00',
      codigo: 'C001',
    },
    {
      titulo: 'Camiseta1',
      imagen: 'assets/img/camiseta1.jpg',
      categoria: 'Ropa Casual',
      precio: '$15.00',
      codigo: 'C002',
    },
    {
      titulo: 'Camiseta2',
      imagen: 'assets/img/camiseta2.jpg',
      categoria: 'Ropa Casual',
      precio: '$18.00',
      codigo: 'C002',
    },
    {
      titulo: 'Pantalón1',
      imagen: 'assets/img/pantalon1.jpg',
      categoria: 'Ropa Formal',
      precio: '$30.00',
      codigo: 'P001',
    },
    {
      titulo: 'Pantalón2',
      imagen: 'assets/img/pantalon2.jpg',
      categoria: 'Ropa Formal',
      precio: '$40.00',
      codigo: 'P001',
    },
    {
      titulo: 'Pantalón3',
      imagen: 'assets/img/pantalon3.jpg',
      categoria: 'Ropa Formal',
      precio: '$32.00',
      codigo: 'P001',
    },
    {
      titulo: 'Pantaloneta1',
      imagen: 'assets/img/pantaloneta1.jpg',
      categoria: 'Ropa Deportiva',
      precio: '$20.00',
      codigo: 'P002',
    },
    {
      titulo: 'Pantaloneta2',
      imagen: 'assets/img/pantaloneta2.jpg',
      categoria: 'Ropa Deportiva',
      precio: '$15.00',
      codigo: 'P002',
    },
    {
      titulo: 'Pantaloneta3',
      imagen: 'assets/img/pantaloneta3.jpg',
      categoria: 'Ropa Deportiva',
      precio: '$14.00',
      codigo: 'P002',
    },
    {
      titulo: 'Gorra1',
      imagen: 'assets/img/gorra1.jpg',
      categoria: 'Accesorios',
      precio: '$12.00',
      codigo: 'G001',
    },
    {
      titulo: 'Gorra2',
      imagen: 'assets/img/gorra2.jpg',
      categoria: 'Accesorios',
      precio: '$10.00',
      codigo: 'G001',
    },
    {
      titulo: 'Calzado1',
      imagen: 'assets/img/calzado1.jpg',
      categoria: 'Zapatos',
      precio: '$40.00',
      codigo: 'Z001',
    },
    {
      titulo: 'Calzado2',
      imagen: 'assets/img/calzado2.jpg',
      categoria: 'Zapatos',
      precio: '$50.00',
      codigo: 'Z001',
    },
    {
      titulo: 'Calzado3',
      imagen: 'assets/img/calzado3.jpg',
      categoria: 'Zapatos',
      precio: '$20.00',
      codigo: 'Z001',
    },
  ];

  searchQuery = '';  // Variable para capturar el texto del buscador
  filteredCategorias = [...this.categorias];  // Copia inicial del array para filtrado
  isModalOpen = false;
  selectedItem: any = null;

  constructor() {}

  // Función que se ejecuta cada vez que el usuario escribe en el searchbar
  onSearchChange() {
    if (this.searchQuery.trim() === '') {
      this.filteredCategorias = [...this.categorias];  // Si no hay texto, muestra todas las categorías
    } else {
      this.filteredCategorias = this.categorias.filter(item => 
        item.titulo.toLowerCase().includes(this.searchQuery.toLowerCase())  // Filtra por título
      );
    }
  }

  openItemDetails(item: any) {
    if (!this.isModalOpen) {  // Solo abre el modal si no está abierto
      this.selectedItem = item;
      this.isModalOpen = true;
    }
  }
  
  closeModal() {
    this.isModalOpen = false;
    this.selectedItem = null;  // Limpiar el item seleccionado después del cierre
      // Tiempo suficiente para que el modal se cierre antes de limpiar
  }
  
  onBackdropClick() {
    this.closeModal();
  }
  
}

