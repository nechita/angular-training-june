import { Directive } from '@angular/core';
import { Validator, ValidatorFn, FormControl, NG_VALIDATORS } from '@angular/forms';

import { isUrl } from './url.validator';

@Directive({
  selector: '[isUrl][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: IsUrlValidator, multi: true }
  ]
})
export class IsUrlValidator implements Validator {

  validator: ValidatorFn;

  constructor() {
    this.validator = isUrl();
  }

  validate(control: FormControl) {
    return this.validator(control);
  }
}
