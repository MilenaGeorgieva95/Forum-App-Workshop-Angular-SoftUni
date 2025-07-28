import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    },
  ],
})
export class EmailDirective implements Validator {
  @Input() appEmail: string[] = [];
  constructor() {}

  validator: ValidatorFn = () => null;

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control);

    return null;
  }

  emailValidator(domains: string): ValidatorFn {
    //[A-Za-z]+@gmail.(com|bg)
    return (control) => {
      console.log(control.value);

      return null;
    };
  }
}
