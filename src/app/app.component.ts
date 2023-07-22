import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  suggestUserName() {
    const suggestedName = 'Superuser';

    // this way make override all form
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    // this way dont make override all form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
}
