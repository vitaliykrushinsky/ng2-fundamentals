import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector: '[validateLocation]',
    // add custom validator to NG_VALIDATORS - existing list built-in of validators handle by Angular 
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]  
})
export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } {
        // tree structure of accesss node element like DOM
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        // going up level of node DOM; level form
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
            // validation passing
            return null;
        } else {
            // { [key: string]: any }
            return {validateLocation: false}
        }
    }
}  