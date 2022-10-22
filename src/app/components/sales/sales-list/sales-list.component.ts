import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/sale.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  sales: Sale[] = [];
  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.salesService.getAllSales().subscribe({
      next: (sales) => {
        console.log(sales);
        this.sales = sales;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

}
