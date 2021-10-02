import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-admin-details',
  template: `
    <div *ngFor="let value of admin">
        <h2> {{"Name : " + value.Name}} </h2>
        <h2> {{"Email : " + value.Email}} </h2>
        <h2> {{"Mobile : " + value.Mobile}} </h2>
    </div>
  `,
  styles: [
  ]
})
export class AdminDetailsComponent implements OnInit {

  constructor(private service1 : AppServiceService) { }

  public admin: any = [];

  ngOnInit(): void 
  {
    this.getAdminDataFromAPI();
  }

  getAdminDataFromAPI()
  {
      this.service1.getData().subscribe(response => this.admin = response)
      //  this.service1.getData().subscribe((response) => {
      //    console.log("Data Of Admin :", response);
      //  })

  }
}

