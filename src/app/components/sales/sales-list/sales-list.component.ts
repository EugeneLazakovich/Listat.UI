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
  limits = ['5', '10', '25', '50'];
  isCreatedDt: boolean = false;
  isAsc: boolean = true;
  sales: Sale[] = [];
  saleFilter: SaleFilter = {
    name: '',
    status: '',
    seller: '',
    sort_key: '',
    sort_order: '',
    limit: '10',
    page: '1'
  }
  constructor(private salesService: SalesService, private router: Router) {  }

  ngOnInit(): void {
    /*this.salesService.getAllSales().subscribe({
      next: (sales) => {
        this.sales = sales;
      },
      error: (response) => {
        console.log(response);
      }
    });*/
    this.getSales();
  }

  getSales(){
    this.saleFilter.sort_key = this.isCreatedDt ? "CreatedDt" : "Price";
    this.saleFilter.sort_order = this.isAsc ? "asc" : "desc";
    this.salesService.getSales(this.saleFilter).subscribe({
      next: (sales) => {
        this.sales = sales;
      }
    })
  }
}
