import { AbstractControl } from '@angular/forms'

export class myValidators {
    static termValid(control: AbstractControl){
        const value = control.value
        console.log(value)
        if(value == false || value == ''){
            return {term_invalid: true}
        }
        return null
    }
}