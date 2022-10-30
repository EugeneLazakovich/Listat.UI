import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleFilter } from 'src/app/models/sale-filter.model';
import { Sale } from 'src/app/models/sale.model';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  statuses = ['None', 'Canceled', 'Finished', 'Active'];
  isCreatedDt: any = false;
  isAsc: any = true;
  sales: Sale[] = [];
  saleFilter: SaleFilter = {
    name: '',
    status: '',
    seller: '',
    sort_key: '',
    sort_order: ''
  }
  constructor(private salesService: SalesService, private router: Router) {  }

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

  getSales(){
    this.saleFilter.sort_key = this.isCreatedDt ? "CreatedDt" : "Price";
    this.saleFilter.sort_order = this.isAsc ? "asc" : "desc";
    this.salesService.getSales(this.saleFilter).subscribe({
      next: (sales) => {
        console.log(sales);
        this.sales = sales;
      }
    })
  }
}
