import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Buy } from "../../../core/models/buy.model";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  @ViewChild('circleColorRs') circleColorRs:ElementRef
  @ViewChild('circleColorAm') circleColorAm:ElementRef
  @ViewChild('circleTallaSM') circleTallaSM:ElementRef
  @ViewChild('circleTallaLXL') circleTallaLXL:ElementRef
  @ViewChild('circleTalla2XL3XL') circleTalla2XL3XL:ElementRef

  formShipping: FormGroup

  ctrlTalla = false
  ctrlColor = false
  btnCtrl1 = true

  buy: Buy = {
    color: '',
    talla: ''
  }

  constructor(
    private renderer2: Renderer2,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formShipping = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      location: ['', Validators.required],
      cell: ['', Validators.required],
      email: ['', Validators.email],
    })
  }

  optionRosa(){
    this.renderer2.setStyle(this.circleColorRs.nativeElement, 'opacity', '1')
    this.renderer2.setStyle(this.circleColorRs.nativeElement, 'border', '1.5px solid #22060e')
    this.renderer2.setStyle(this.circleColorAm.nativeElement, 'border', 'none')
    this.renderer2.setStyle(this.circleColorAm.nativeElement, 'opacity', '.4')
    this.buy.color = 'rosa'
    this.ctrlColor = true
    this.validateForm()
  }
  optionAmarillo(){
    this.renderer2.setStyle(this.circleColorAm.nativeElement, 'opacity', '1')
    this.renderer2.setStyle(this.circleColorAm.nativeElement, 'border', '1.5px solid #22060e')
    this.renderer2.setStyle(this.circleColorRs.nativeElement, 'opacity', '.4')
    this.renderer2.setStyle(this.circleColorRs.nativeElement, 'border', 'none')
    this.buy.color = 'amarillo'
    this.ctrlColor = true
    this.validateForm()

  }
  optionSM(){
    this.renderer2.setStyle(this.circleTallaSM.nativeElement, 'opacity', '1')
    this.renderer2.setStyle(this.circleTallaSM.nativeElement, 'border', '1.5px solid #22060e')
    this.renderer2.setStyle(this.circleTallaLXL.nativeElement, 'opacity', '.4')
    this.renderer2.setStyle(this.circleTallaLXL.nativeElement, 'border', 'none')
    this.renderer2.setStyle(this.circleTalla2XL3XL.nativeElement, 'opacity', '.4')
    this.renderer2.setStyle(this.circleTalla2XL3XL.nativeElement, 'border', 'none')
    this.buy.talla = 'S-M'
    this.ctrlTalla = true
    this.validateForm()
  }
  optionLXL(){
    this.renderer2.setStyle(this.circleTallaSM.nativeElement, 'opacity', '.4')
    this.renderer2.setStyle(this.circleTallaSM.nativeElement, 'border', 'none')
    this.renderer2.setStyle(this.circleTallaLXL.nativeElement, 'opacity', '1')
    this.renderer2.setStyle(this.circleTallaLXL.nativeElement, 'border', '1.5px solid #22060e')
    this.renderer2.setStyle(this.circleTalla2XL3XL.nativeElement, 'opacity', '.4')
    this.renderer2.setStyle(this.circleTalla2XL3XL.nativeElement, 'border', 'none')
    this.buy.talla = 'L-XL'
    this.ctrlTalla = true
    this.validateForm()
  }
  option2XL3XL(){
    this.renderer2.setStyle(this.circleTallaSM.nativeElement, 'opacity', '.4')
    this.renderer2.setStyle(this.circleTallaSM.nativeElement, 'border', 'none')
    this.renderer2.setStyle(this.circleTallaLXL.nativeElement, 'opacity', '.4')
    this.renderer2.setStyle(this.circleTallaLXL.nativeElement, 'border', 'none')
    this.renderer2.setStyle(this.circleTalla2XL3XL.nativeElement, 'opacity', '1')
    this.renderer2.setStyle(this.circleTalla2XL3XL.nativeElement, 'border', '1.5px solid #22060e')
    this.buy.talla = '2XL-3XL'
    this.ctrlTalla = true
    this.validateForm()
  }
  validateForm(){
    if (this.ctrlColor && this.ctrlTalla) {
      this.btnCtrl1 = false
    }
    console.log('Corriendo OK!!', this.btnCtrl1);
    
  }


}
