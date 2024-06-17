import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../../types/Product';
import { SvService } from '../../sv.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  products: Product[] = [] as Product[];
  productForm: FormGroup = {} as FormGroup;
  id: string | number | undefined;

  constructor(
    private sv: SvService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      quantity: [0, [Validators.required, Validators.min(0)]],
      active: [false],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sv.getProduct(this.id).subscribe((data) => {
      this.productForm.patchValue(data);
    });
  }

  handleSubmit() {
    this.sv.updateProduct(this.productForm.value, this.id).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }
}
