import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgControl } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HomePage } from './home/home.page';
import { AdditemPage } from './Additem/additem.page';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy , }],
  bootstrap: [AppComponent],
})
export class AppModule {}
