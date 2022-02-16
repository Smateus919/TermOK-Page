import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { GliderEvent } from 'glider-js';
import { Video } from "../../../core/models/video.model";
@Component({
  selector: 'app-featured-videos',
  templateUrl: './featured-videos.component.html',
  styleUrls: ['./featured-videos.component.scss']
})
export class FeaturedVideosComponent implements OnInit, OnChanges {
  
  mov = 100/3
  indi = 0
  imagenesPrev: Video[] = [
    {
      id: '1',
      title: 'Consejos para dormir bien',
      urlImage: '../../../../assets/img/1.jpg'
    },
    {
      id: '2',
      title: 'Batido verde para quemar grasa',
      urlImage: '../../../../assets/img/2.jpg'
    },
    {
      id: '3',
      title: 'Titulo de video 3',
      urlImage: '../../../../assets/img/3.png'
    },
    {
      id: '4',
      title: 'Titulo de video 4',
      urlImage: '../../../../assets/img/4.png'
    },
    {
      id: '5',
      title: 'Titulo de video 5',
      urlImage: '../../../../assets/img/1.png'
    },
    {
      id: '6',
      title: 'Titulo de video 6',
      urlImage: '../../../../assets/img/2.png'
    },
    {
      id: '7',
      title: 'Titulo de video 7',
      urlImage: '../../../../assets/img/3.png'
    },
    {
      id: '8',
      title: 'Titulo de video 8',
      urlImage: '../../../../assets/img/4.png'
    },
    {
      id: '9',
      title: 'Titulo de video 9',
      urlImage: '../../../../assets/img/1.png'
    }
  ]
  
  @ViewChild('carouselContenedor') carouselContenedor: ElementRef
  @ViewChild('ind1') eInd1: ElementRef
  @ViewChild('ind2') eInd2: ElementRef
  @ViewChild('ind3') eInd3: ElementRef

  constructor(private renderer: Renderer2) { 

  }


  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
  }
  
  ngAfterViewInit(){    
    this.renderer.setStyle(this.eInd1.nativeElement, 'background-color', '#fa2360')   
  }
  transformIndi1(){
    this.renderer.setStyle(this.carouselContenedor.nativeElement, 'transform', 'translateX(0)')
    this.renderer.setStyle(this.eInd1.nativeElement, 'background-color', '#fa2360')
    this.renderer.setStyle(this.eInd2.nativeElement, 'background-color', '#eff3f7')
    this.renderer.setStyle(this.eInd3.nativeElement, 'background-color', '#eff3f7')
    this.indi = 0
  }
  transformIndi2(){
    this.renderer.setStyle(this.carouselContenedor.nativeElement, 'transform', `translateX(-${this.mov}%)`)
    this.renderer.setStyle(this.eInd1.nativeElement, 'background-color', '#eff3f7')
    this.renderer.setStyle(this.eInd2.nativeElement, 'background-color', '#fa2360')
    this.renderer.setStyle(this.eInd3.nativeElement, 'background-color', '#eff3f7')
    this.indi = 1
  }
  transformIndi3(){
    this.renderer.setStyle(this.carouselContenedor.nativeElement, 'transform', `translateX(-${this.mov*2}%)`)
    this.renderer.setStyle(this.eInd1.nativeElement, 'background-color', '#eff3f7')
    this.renderer.setStyle(this.eInd2.nativeElement, 'background-color', '#eff3f7')
    this.renderer.setStyle(this.eInd3.nativeElement, 'background-color', '#fa2360')
    this.indi = 2
  }
  next(){
    switch (this.indi) {
      case 0:
        this.transformIndi2()
        break;
      case 1:
        this.transformIndi3()
        break
      case 2:
        this.transformIndi1()
        break
      default:
        alert('Valor invalido en carrusel')
        break;
    }
  }
  prev(){
    switch (this.indi) {
      case 0:
        this.transformIndi3()
        break;
      case 1:
        this.transformIndi1()
        break
      case 2:
        this.transformIndi2()
        break
      default:
        alert('Valor invalido en carrusel')
        break;
    }
  }

}
