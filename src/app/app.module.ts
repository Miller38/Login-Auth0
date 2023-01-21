import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
// Import the module from the SDK
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    CrearClienteComponent,
    ListarClienteComponent,
    ErrorComponent,
    SobreNosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-51kkoyfzhq5skyfx.us.auth0.com',
      clientId: 'E59PT6Cu9m8MSG6tTybjePrQP2XGIiWv'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
