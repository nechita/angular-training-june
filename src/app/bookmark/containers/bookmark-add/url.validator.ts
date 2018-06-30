import { AbstractControl, ValidatorFn } from '@angular/forms';

export function isUrl(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value ? control.value : '';
    return (value.startsWith('http://') || value.startsWith('https://')) ? null : {
      isNotUrl: { valid: false }
    };
  };
}
