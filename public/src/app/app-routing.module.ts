
// import { EditComponent } from './edit/edit.component';
// import { NewComponent } from './new/new.component';
import { ProjectsComponent } from './projects/projects.component';
import { HostilityComponent } from './hostility/hostility.component';
import { NinjamanComponent } from './ninjaman/ninjaman.component';
import { SwedishComponent } from './swedish/swedish.component';
import { SacredComponent } from './sacred/sacred.component';
import { JigsawComponent } from './jigsaw/jigsaw.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BooksComponent } from './books/books.component';
import { ProdCatComponent } from './prod-cat/prod-cat.component';
import { GoldComponent } from './gold/gold.component';
import { WeddingComponent } from './wedding/wedding.component';
import { CakesComponent } from './cakes/cakes.component';
import { ProdManComponent } from './prod-man/prod-man.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FetchComponent } from './fetch/fetch.component';
import { ShellPortfolioComponent } from './shell-portfolio/shell-portfolio.component';
import { CoinMachineComponent } from './coin-machine/coin-machine.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '',component: ShellPortfolioComponent,
        children: [
            { path: '',component: ProjectsComponent },
            { path: 'hostility',component: HostilityComponent },
            { path: 'ninjaman',component: NinjamanComponent },
            { path: 'swedish',component: SwedishComponent },
            { path: 'sacred',component: SacredComponent },
            { path: 'jigsaw',component: JigsawComponent },
            { path: 'inventory',component: InventoryComponent },
            { path: 'books_authors',component: BooksComponent },
            { path: 'products_categories',component: ProdCatComponent },
            { path: 'gold_getter',component: GoldComponent },
            { path: 'wedding_planner',component: WeddingComponent },
            { path: 'rate_my_cakes',component: CakesComponent },
            { path: 'product_manager',component: ProdManComponent },
            { path: 'coin_machine',component: CoinMachineComponent },
        ]
     },
    { path: 'fetch',component: FetchComponent },
    { path: '**', component: PageNotFoundComponent }
];

// const routes: Routes = [
//     { path: '',component: ProjectsComponent },
//     { path: 'hostility',component: HostilityComponent },
//     { path: 'ninjaman',component: NinjamanComponent },
//     { path: 'swedish',component: SwedishComponent },
//     { path: 'sacred',component: SacredComponent },
//     { path: 'jigsaw',component: JigsawComponent },
//     { path: 'inventory',component: InventoryComponent },
//     { path: 'books_authors',component: BooksComponent },
//     { path: 'products_categories',component: ProdCatComponent },
//     { path: 'gold_getter',component: GoldComponent },
//     { path: 'wedding_planner',component: WeddingComponent },
//     { path: 'rate_my_cakes',component: CakesComponent },
//     { path: 'product_manager',component: ProdManComponent },
//     { path: 'fetch',component: FetchComponent },
//     { path: '**', component: PageNotFoundComponent }
// ];

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
