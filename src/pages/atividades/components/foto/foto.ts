import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'foto',
  templateUrl: 'foto.html',
})
@IonicPage({
  name: 'FotoPage',
})

export class FotoPage {


  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum: true,
    cameraDirection: 0,
    correctOrientation: true,
  };

  public photosStart = [
    {
      id: 1,
      tipo: 'inicio',
      src: 'assets/imgs/img-default.png',
    },
    {
      id: 2,
      tipo: 'inicio',
      src: 'assets/imgs/img-default.png',
    },
    {
      id: 3,
      tipo: 'inicio',
      src: 'assets/imgs/img-default.png',
    },
  ];
  public photosEnd = [
    {
      id: 1,
      tipo: 'fim',
      src: 'assets/imgs/img-default.png',
    },
    {
      id: 2,
      tipo: 'fim',
      src: 'assets/imgs/img-default.png',
    },
    {
      id: 3,
      tipo: 'fim',
      src: 'assets/imgs/img-default.png',
    },

  ];

  constructor(private camera: Camera) {  }

  changePicture(tipo) {
    this.camera.getPicture(this.options).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
    });
  }
}
