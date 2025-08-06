import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
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

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const validatorFunc = this.emailValidator(this.appEmail);
    return validatorFunc(control);
  }

  emailValidator(domains: string[]): ValidatorFn {
    const domainsStr = domains.join('|');
    const regExp = new RegExp(`[A-Za-z]+@gmail.(${domainsStr})`);

    return (control) => {
      const isEmailInvalid: boolean =
        control.value === '' || regExp.test(control.value);
      return isEmailInvalid ? null : { emailValidator: true };
    };
  }
}
