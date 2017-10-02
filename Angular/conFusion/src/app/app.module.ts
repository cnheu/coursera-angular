import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';




import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { DishService } from './services/dish.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,

  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
