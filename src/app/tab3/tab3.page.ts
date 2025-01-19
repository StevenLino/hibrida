import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonSearchbar, IonGrid, IonRow, IonCol],
})
export class Tab3Page {
  categorias = [
    { titulo: 'Camisa', imagen: 'https://example.com/camisa.jpg' },
    { titulo: 'Camiseta', imagen: 'https://example.com/camiseta.jpg' },
    { titulo: 'Pantalón', imagen: 'https://example.com/pantalon.jpg' },
    { titulo: 'Pantaloneta', imagen: 'https://example.com/pantaloneta.jpg' },
    { titulo: 'Gorra', imagen: 'https://example.com/gorra.jpg' },
    { titulo: 'Calzado', imagen: 'https://example.com/calzado.jpg' },
  ];
  constructor() {}
}
