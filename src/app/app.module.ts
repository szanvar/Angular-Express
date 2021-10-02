import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchDetailsComponent,
    AdminDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
