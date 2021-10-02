import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-batch-details',
  template: `
  <div *ngFor="let value of batch">
  <h2> {{"Batch Name : " + value.Batch}} </h2>
  <h2> {{"Fee : " + value.Fee}} </h2>
</div>
  `,
  styles: [  ]
})
export class BatchDetailsComponent implements OnInit {

  constructor(private service2 : AppServiceService) { }

  batch : any = [];
  ngOnInit()
  {
    this.getBatchDataFromAPI();
  }

  getBatchDataFromAPI()
  {
    this.service2.getBatch().subscribe(response => this.batch = response);
    // this.service2.getBatch().subscribe((response) =>{
    //   console.log("Data Of Batch", response)
    // }); 
  }

}
