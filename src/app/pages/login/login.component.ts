import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'mb-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  _cd: ChangeDetectorRef = inject(ChangeDetectorRef);
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    date : new FormControl(new Date()),
  });


  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.loginForm.value);
  }

  get dateControl() {
    return this.loginForm.get('date') as FormControl;
  }
}
