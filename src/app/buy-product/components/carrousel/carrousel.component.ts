import { Component, OnInit } from '@angular/core';
import { ImageF } from "../../../core/models/imgFaja.model";

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  imgGrande: string = '../../../../assets/img/imgFaja1.png'

  imagenesFaja: ImageF[] = [
    {
      id: '1',
      urlImage: '../../../../assets/img/imgFaja1.png'
    },
    {
      id: '1',
      urlImage: '../../../../assets/img/imgFaja2.png'
    },
    {
      id: '1',
      urlImage: '../../../../assets/img/imgFaja3.jpg'
    },
    {
      id: '1',
      urlImage: '../../../../assets/img/Detalle-faja.PNG'
    },
    {
      id: '1',
      urlImage: '../../../../assets/img/Faja2.png'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }
  

  asignarImgGrande(url){
    this.imgGrande = url
  }

}
