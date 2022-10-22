import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  addItemRequest: Item = {
    id: 0,
    name: '',
    description: '',
    metadata: ''    
  }
  constructor(private itemService: ItemsService, private router: Router) { }

  ngOnInit(): void {
  }

  addItem(){
    this.itemService.addItem(this.addItemRequest).subscribe({
      next: (item) => {
        this.router.navigate(['items']);
      }
    });
  }

}
