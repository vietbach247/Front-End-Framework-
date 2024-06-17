import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Product } from '../../../types/Product';
import { SvService } from '../../sv.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  products: Product[] = [] as Product[];
  productForm: FormGroup = {} as FormGroup;
  errorMessage: string | null = null;

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
  handleSubmit() {
    try {
      this.sv.createProduct(this.productForm.value).subscribe((data) => {
        this.router.navigate(['/']);
      });
    } catch (error) {
      this.errorMessage = 'Có lỗi xảy ra khi thêm sản phẩm. Vui lòng thử lại.';
      alert('Lỗi api' + this.errorMessage);
    }
  }
}
