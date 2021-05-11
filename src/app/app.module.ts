import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {PusherService} from './pusher.service';
import { AgmCoreModule } from '@agm/core';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAQuQnzLIZKhQhvHLJf1_szWEDzKRqXGSk',
      libraries: ['geometry']
    }),
  ],
  providers: [PusherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
