import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { HostilityComponent } from './hostility/hostility.component';
import { NinjamanComponent } from './ninjaman/ninjaman.component';
import { SwedishComponent } from './swedish/swedish.component';
import { SacredComponent } from './sacred/sacred.component';
import { JigsawComponent } from './jigsaw/jigsaw.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BooksComponent } from './books/books.component';
import { GoldComponent } from './gold/gold.component';
import { WeddingComponent } from './wedding/wedding.component';
import { CakesComponent } from './cakes/cakes.component';
import { ProdCatComponent } from './prod-cat/prod-cat.component';
import { ProdManComponent } from './prod-man/prod-man.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShellPortfolioComponent } from './shell-portfolio/shell-portfolio.component';
import { CoinMachineComponent } from './coin-machine/coin-machine.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { ShellPortfolioWebComponent } from './shell-portfolio-web/shell-portfolio-web.component';
import { BlenderComponent } from './blender/blender.component';
import { TalismansComponent } from './talismans/talismans.component';
import { UnrealComponent } from './unreal/unreal.component';
import { CaterIronGalaxyComponent } from './cater-iron-galaxy/cater-iron-galaxy.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HostilityComponent,
    NinjamanComponent,
    SwedishComponent,
    SacredComponent,
    JigsawComponent,
    InventoryComponent,
    BooksComponent,
    GoldComponent,
    WeddingComponent,
    CakesComponent,
    ProdCatComponent,
    ProdManComponent,
    PageNotFoundComponent,
    ShellPortfolioComponent,
    CoinMachineComponent,
    DiabetesComponent,
    WebProjectsComponent,
    ShellPortfolioWebComponent,
    BlenderComponent,
    TalismansComponent,
    UnrealComponent,
    CaterIronGalaxyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


