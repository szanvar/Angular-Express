import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';

const routes: Routes = [
  {path : 'getData' , component : AdminDetailsComponent},
  {path : 'getBatches', component : BatchDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
