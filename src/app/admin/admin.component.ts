import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../types/Product';
import { SvService } from '../sv.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  products: Product[] = [] as Product[];

  constructor(private sv: SvService) {}

  ngOnInit(): void {
    this.sv.getProducts().subscribe((data) => {
      this.products = data as Product[];
    });
  }

  handleDelete(id: string | number | undefined) {
    if (confirm('Are you sure ?')) {
      this.sv.deleteProduct(id).subscribe((data) => {
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  }
}
