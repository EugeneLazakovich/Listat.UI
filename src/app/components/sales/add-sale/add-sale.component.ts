import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { Sale } from 'src/app/models/sale.model';
import { ItemsService } from 'src/app/services/items.service';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {

  itemDetails: Item = {
    id: 0,
    name: '',
    description: '',
    metadata: '' 
  }
  saleDetails: Sale = {
    id: 0,
    name: '',
    price: 0,
    status: '',
    seller: '',
    buyer: '',
    itemId: 0,
    createdDt: ''
  }
  constructor(private route: ActivatedRoute, private saleService: SalesService, private itemService: ItemsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const itemId = Number(params.get('id'));

        if(itemId){
          this.itemService.getItem(itemId).subscribe({
            next: (response) => {
              this.itemDetails = response;
              if(response){
                this.saleDetails.itemId = this.itemDetails.id;
                this.saleDetails.name = this.itemDetails.name;
              }
            }
          })
        }
      }
    })
  }

  addSale(){
    this.saleService.addSale(this.saleDetails).subscribe({
      next: (sale) => {
        this.router.navigate(['items']);
      }
    });
  }

}
