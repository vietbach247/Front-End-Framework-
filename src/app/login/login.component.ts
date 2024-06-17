import { Component } from '@angular/core';
import { User } from '../../types/User';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SvService } from '../sv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: User[] = [] as User[];
  authForm: FormGroup = {} as FormGroup;

  constructor(
    private sv: SvService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  handleSubmit() {
    this.sv.login(this.authForm.value).subscribe((data) => {
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigate(['/']);
    });
  }
}
