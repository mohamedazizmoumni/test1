import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ListAlbumsComponentComponent } from './list-albums-component/list-albums-component.component';
import { ArchivesComponentComponent } from './archives-component/archives-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddAlbumComponentComponent } from './add-album-component/add-album-component.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  {path:'list-albums-component',component:ListAlbumsComponentComponent},
  {path:'archives-component',component:ArchivesComponentComponent},
  {path:'add-album-component',component:AddAlbumComponentComponent}

];
@NgModule({
  declarations: [
    AppComponent,

    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ListAlbumsComponentComponent,
    ArchivesComponentComponent,
    AddAlbumComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
FormsModule,
HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
