
// import { EditComponent } from './edit/edit.component';
// import { NewComponent } from './new/new.component';
import { ProjectsComponent } from './projects/projects.component';
import { HostilityComponent } from './hostility/hostility.component';
import { NinjamanComponent } from './ninjaman/ninjaman.component';
import { SwedishComponent } from './swedish/swedish.component';
import { SacredComponent } from './sacred/sacred.component';
import { JigsawComponent } from './jigsaw/jigsaw.component';
import { InventoryComponent } from './inventory/inventory.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '',component: ProjectsComponent },
    { path: 'hostility',component: HostilityComponent },
    { path: 'ninjaman',component: NinjamanComponent },
    { path: 'swedish',component: SwedishComponent },
    { path: 'sacred',component: SacredComponent },
    { path: 'jigsaw',component: JigsawComponent },
    { path: 'inventory',component: InventoryComponent },
//   { path: '####/new',component: NewComponent },
//   { path: '####/edit/:id', component: EditComponent },
//   { path: '', pathMatch: 'full', redirectTo: '/' },
//   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [
//     { path: 'product',component: ProductComponent, children: [
//         { path: 'details/:id', component: ProductDetailComponent },
//     ]},
//     { path: 'review',component: ReviewComponent, children: [
//         { path: 'details/:id', component: ReviewDetailComponent },
//     ]},
//     { path: '', pathMatch: 'full', redirectTo: '/product' },
// ];
