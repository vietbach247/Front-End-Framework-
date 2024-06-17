import { Component } from '@angular/core';
import { User } from '../../types/User';
import { SvService } from '../sv.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
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
    this.sv.register(this.authForm.value).subscribe((data) => {
      this.router.navigate(['/login']);
    });
  }
}
