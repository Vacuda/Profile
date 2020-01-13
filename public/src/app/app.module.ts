import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
// import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { HostilityComponent } from './hostility/hostility.component';
import { NinjamanComponent } from './ninjaman/ninjaman.component';
import { SwedishComponent } from './swedish/swedish.component';
import { SacredComponent } from './sacred/sacred.component';
import { JigsawComponent } from './jigsaw/jigsaw.component';
import { InventoryComponent } from './inventory/inventory.component';
// import { ShowComponent } from './show/show.component';

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
    // ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppComponent],
//   providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }


