import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingModule} from './routing/routing.module';
import { FormsModule,ReactiveFormsModule } from'@angular/forms';
import { ReusableComponent } from './reusable/reusable.component';
import { NameModule } from './name/name.module';
import { ServeService } from './serve.service';
@NgModule({
  declarations: [
    AppComponent,
    ReusableComponent,
  

  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,NameModule,
    RoutingModule
  ],
  providers: [ServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
