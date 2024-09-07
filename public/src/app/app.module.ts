import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { HostilityComponent } from './hostility/hostility.component';
import { SwedishComponent } from './swedish/swedish.component';
import { SacredComponent } from './sacred/sacred.component';
import { JigsawComponent } from './jigsaw/jigsaw.component';
import { InventoryComponent } from './inventory/inventory.component';
import { WeddingComponent } from './wedding/wedding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShellPortfolioComponent } from './shell-portfolio/shell-portfolio.component';
import { CoinMachineComponent } from './coin-machine/coin-machine.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { ShellPortfolioWebComponent } from './shell-portfolio-web/shell-portfolio-web.component';
import { BlenderComponent } from './blender/blender.component';
import { TalismansComponent } from './talismans/talismans.component';
import { UnrealComponent } from './unreal/unreal.component';
//import { CaterIronGalaxyComponent } from './cater-iron-galaxy/cater-iron-galaxy.component';
import { ShellTalismansWebComponent } from './shell-talismans-web/shell-talismans-web.component';
import { UnityComponent } from './unity/unity.component';
import { HoneyHivesComponent } from './honey-hives/honey-hives.component';
import { CropToolComponent } from './crop-tool/crop-tool.component';
import { FetchFriendComponent } from './fetch-friend/fetch-friend.component';
import { FantasticKnockAboutComponent } from './fantastic-knock-about/fantastic-knock-about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HostilityComponent,
    SwedishComponent,
    SacredComponent,
    JigsawComponent,
    InventoryComponent,
    WeddingComponent,
    PageNotFoundComponent,
    ShellPortfolioComponent,
    CoinMachineComponent,
    DiabetesComponent,
    WebProjectsComponent,
    ShellPortfolioWebComponent,
    BlenderComponent,
    TalismansComponent,
    UnrealComponent,
    //CaterIronGalaxyComponent,
    ShellTalismansWebComponent,
    UnityComponent,
    HoneyHivesComponent,
    CropToolComponent,
    FetchFriendComponent,
    FantasticKnockAboutComponent
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


