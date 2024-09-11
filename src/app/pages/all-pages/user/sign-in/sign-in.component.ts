import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false],
    });
  }

  // Getter for easy access to form fields in the template
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    // Check if the credentials are correct
    if (email === 'customer@demo.com' && password === 'demo') {
      // Redirect to My Account page
      this.router.navigate(['/myaccount']);
    } else {
      // Handle incorrect login (e.g., show an error message)
      alert('Invalid credentials');
    }
  }
}
