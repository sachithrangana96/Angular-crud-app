import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { NewComponent } from './components/new/new.component';
import { FindComponent } from './components/find/find.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule  } from '@angular/material/button'
import { MatFormFieldModule  } from '@angular/material/form-field'
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule}  from '@angular/common/http' 
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    NewComponent,
    FindComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
