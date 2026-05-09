import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms";

// Email uniqueness is enforced by Clerk on form submission.
// This validator is retained as a no-op to avoid breaking any remaining references.
@Injectable({
  providedIn: 'root'
})
export class EmailTaken implements AsyncValidator {
  validate = (_control: AbstractControl): Promise<ValidationErrors | null> => {
    return Promise.resolve(null);
  }
}
