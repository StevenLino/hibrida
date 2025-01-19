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
      titulo: 'Camisa',
      imagen: 'assets/img/camisa.jpg',
      categoria: 'Ropa Formal',
      precio: '$25.00',
      codigo: 'C001',
    },
    {
      titulo: 'Camiseta',
      imagen: 'assets/img/camiseta.jpg',
      categoria: 'Ropa Casual',
      precio: '$15.00',
      codigo: 'C002',
    },
    {
      titulo: 'Pantalón',
      imagen: 'assets/img/pantalon.jpg',
      categoria: 'Ropa Formal',
      precio: '$40.00',
      codigo: 'P001',
    },
    {
      titulo: 'Pantaloneta',
      imagen: 'assets/img/pantaloneta.jpg',
      categoria: 'Ropa Deportiva',
      precio: '$20.00',
      codigo: 'P002',
    },
    {
      titulo: 'Gorra',
      imagen: 'assets/img/gorra.jpg',
      categoria: 'Accesorios',
      precio: '$10.00',
      codigo: 'G001',
    },
    {
      titulo: 'Calzado',
      imagen: 'assets/img/calzado.jpg',
      categoria: 'Zapatos',
      precio: '$50.00',
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

