import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonAvatar, IonItem, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personSharp, rocket, clipboardOutline, peopleCircle, triangle, ellipse, square, library, addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonAvatar, IonItem, IonText],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ personSharp, rocket, clipboardOutline, peopleCircle, triangle, ellipse, square, library, addCircleOutline });
  }
}
