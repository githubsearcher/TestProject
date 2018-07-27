import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { appRoutingProviders, routing } from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import { StorageService } from './services/localStorage.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
  appRoutingProviders,
  StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
