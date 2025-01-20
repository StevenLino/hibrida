import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon, IonLabel, IonItem, IonText, IonAvatar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Title } from '@angular/platform-browser';
import { chatbubbleOutline, colorFill, heartOutline, logOutOutline, notificationsOutline, optionsOutline, personOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon, IonLabel, IonItem, IonText, IonAvatar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonSearchbar, IonGrid, IonRow, IonCol],
})
export class Tab4Page implements OnInit{
  options: any[] = [];

  constructor() {
    addIcons({
      personOutline,
      optionsOutline,
      notificationsOutline,
      logOutOutline,
      chatbubbleOutline,
      heartOutline
    });
  }

  ngOnInit() {
    console.log('profile init');
    this.options = [
      {title: 'Datos', icon: 'person-outline', color: 'primary'},
      {title: 'Contacto', icon: 'chatbubble-outline', color: 'primary'},
      {title: 'Favoritos', icon: 'heart-outline', color: 'primary'},
      {title: 'Ajustes', icon: 'options-outline', color: 'primary'},
      {title: 'Notificaciones', icon: 'notifications-outline', color: 'primary'},
      {title: 'Salir', icon: 'log-out-outline', color: 'secondary', background:'primary'},
    ];
  }

  getRows(){
    const rows = [];
    for(let i = 0; i < this.options.length; i += 3){
      rows.push(this.options.slice(i, i + 3));
    }
    return rows;
  }
}
