import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import { Orders } from "../../../core/models/orders.model";
import { myValidators } from "../../../utils/validators";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class ShoppingComponent implements OnInit {

  @ViewChild('circleColorRs') circleColorRs:ElementRef
  @ViewChild('circleColorAm') circleColorAm:ElementRef
  @ViewChild('circleTallaSM') circleTallaSM:ElementRef
  @ViewChild('circleTallaLXL') circleTallaLXL:ElementRef
  @ViewChild('circleTalla2XL3XL') circleTalla2XL3XL:ElementRef

  formShipping: FormGroup
  formConfirmOrder: FormGroup

  ctrlTalla = false
  ctrlColor = false
  btnCtrl1 = true
  btnLessCtrl = true
  tmValidForNext = false

  orders: Orders = {
    color: '',
    talla: '',
    cant: 1
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
      TermCond: [false, [Validators.requiredTrue]] 
    })
    this.formConfirmOrder = this.formBuilder.group({
      color: ['', Validators.required],
      size: ['', Validators.required],
      cant: 1
    })
  }

  optionRosa(){
    this.renderer2.setStyle(this.circleColorRs.nativeElement, 'opacity', '1')
    this.renderer2.setStyle(this.circleColorRs.nativeElement, 'border', '1.5px solid #22060e')
    this.renderer2.setStyle(this.circleColorAm.nativeElement, 'border', 'none')
    this.renderer2.setStyle(this.circleColorAm.nativeElement, 'opacity', '.4')
    this.formConfirmOrder.controls['color'].setValue('Rosa')
    this.orders.color = this.formConfirmOrder.controls['color'].value
    console.log(this.formConfirmOrder.controls['color'].value);    
    this.ctrlColor = true
    this.validateForm()
    
  }
  optionAmarillo(){
    this.renderer2.setStyle(this.circleColorAm.nativeElement, 'opacity', '1')
    this.renderer2.setStyle(this.circleColorAm.nativeElement, 'border', '1.5px solid #22060e')
    this.renderer2.setStyle(this.circleColorRs.nativeElement, 'opacity', '.4')
    this.renderer2.setStyle(this.circleColorRs.nativeElement, 'border', 'none')
    this.formConfirmOrder.controls['color'].setValue('Amarillo')
    this.orders.color = this.formConfirmOrder.controls['color'].value
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
    this.formConfirmOrder.controls['size'].setValue('S-M')
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
    this.formConfirmOrder.controls['size'].setValue('L-XL')
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
    this.formConfirmOrder.controls['size'].setValue('2XL-3XL')
    this.ctrlTalla = true
    this.validateForm()
  }
  validateForm(){
    if (this.ctrlColor && this.ctrlTalla) {
      this.btnCtrl1 = false
    }    
  }
  addCant(){
    if (this.orders.cant < 50) {
      this.orders.cant += 1 
      this.btnLessCtrl = false  
    }
  }
  lessCant(){
    this.orders.cant -= 1
    if (this.orders.cant <= 1) {
      this.btnLessCtrl = true  
      this.orders.cant = 1
    }
  }

  tmValid(){
    console.log('resultado:', this.formShipping.get('TermCond')?.valid);    
    this.formShipping.get('TermCond')?.valid ? this.tmValidForNext = false : this.tmValidForNext = true
  }

}
