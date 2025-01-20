import { ViewChild, ElementRef, Component, signal } from '@angular/core';
import { IonCol, IonRow, IonGrid, IonCardContent, IonModal, IonButton, IonInput, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonCard, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
/* Importe el módulo para formularios reactivos */
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { ProviderService } from '../services/provider.service';

/* Importe la función y el ícono */
import { addIcons } from 'ionicons';
import { cloudUploadOutline, camera } from 'ionicons/icons';

/* Importe el servicio */
import { TeachablemachineService } from '../services/teachablemachine.service';

/* Importe el pipe */
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, ReactiveFormsModule, PercentPipe, IonCardContent, IonModal, IonButton, IonInput, IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {

  /* Declare la referencia al elemento con el id image */
  @ViewChild('image', { static: false }) imageElement!: ElementRef<HTMLImageElement>;

  /* Lista de predicciones */
  predictions: any[] = [];

  /* Método para obtener la predicción a partir de la imagen */
  async predict() {
    try {
      const image = this.imageElement.nativeElement;
      this.predictions = await this.teachablemachine.predict(image);

      // Ordenar las predicciones por probabilidad en orden descendente
      this.predictions.sort((a, b) => b.probability - a.probability);

      // Obtener la categoría con la mayor probabilidad
      const topPrediction = this.predictions[0];

      // Asignar el nombre de la clase con mayor probabilidad al campo 'productCategory'
      this.productForm.patchValue({
        productCategory: topPrediction.className
      });
    } catch (error) {
      console.error(error);
      alert('Error al realizar la predicción.');
    }
  }

  imageReady = signal(false)
  imageUrl = signal("")

  /* Declare los atributos para almacenar el modelo y la lista de clases */
  modelLoaded = signal(false);
  classLabels: string[] = [];

  constructor(private teachablemachine: TeachablemachineService, private providerService: ProviderService) {
    /* Registre el ícono */
    addIcons({ cloudUploadOutline, camera });
  }

  /* El método onSubmit para enviar los datos del formulario mediante el servicio */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      const reader = new FileReader();

      // Convertir el archivo a una URL base64 para mostrarlo en el html
      reader.onload = () => {
        this.imageUrl.set(reader.result as string)
        this.imageReady.set(true)

        // Registrar el nombre del archivo en el formulario
        this.productForm.patchValue({
          imageName: file.name
        });
      };

      reader.readAsDataURL(file); // Leer el archivo como base64
    }
  }

  /* Método ngOnInit para cargar el modelo y las clases */
  async ngOnInit() {
    await this.teachablemachine.loadModel()
    this.classLabels = this.teachablemachine.getClassLabels()
    this.modelLoaded.set(true)
  }

  productForm: FormGroup = new FormGroup({
    productName: new FormControl('', Validators.required),
    productCategory: new FormControl('', Validators.required),
    productPrice: new FormControl(null, [Validators.required, Validators.min(0.01)]),
    productCode: new FormControl(''),
    imageName: new FormControl('')
  });

  collectionName = 'stock';

  modalOpen = false;  // Control del modal

  // Método para abrir el modal
  openModal() {
    this.modalOpen = true;
  }

  // Método para cerrar el modal
  closeModal() {
    this.modalOpen = false;
  }

  // Método para generar el código
  generateCode() {
    if (this.productForm.valid) {
      const { productCategory, productPrice } = this.productForm.value;
      const productCode = `${productCategory}-${Math.floor(productPrice)}-${Date.now()}`;
      this.productForm.patchValue({ productCode });
    } else {
      alert('Por favor, complete todos los campos antes de generar el código.');
    }
  }

  //Método para guardar en Firestore
  saveProduct() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.providerService.createDocument(this.collectionName, productData).then(() => {
        alert('Producto registrado con éxito');
        this.productForm.reset();
      }).catch((error) => {
        alert('Error al registrar el producto: ' + error.message);
      });
    } else {
      alert('Complete todos los campos antes de guardar.');
    }
  }

}
