

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
import { ShellPortfolioComponent } from './shell-portfolio/shell-portfolio.component';
import { CoinMachineComponent } from './coin-machine/coin-machine.component';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { ShellPortfolioWebComponent } from './shell-portfolio-web/shell-portfolio-web.component';
import { TalismansComponent } from './talismans/talismans.component';
import { UnrealComponent } from './unreal/unreal.component';
import { BlenderComponent } from './blender/blender.component';
import { CaterIronGalaxyComponent } from './cater-iron-galaxy/cater-iron-galaxy.component';
import { ShellTalismansWebComponent } from './shell-talismans-web/shell-talismans-web.component';
import { UnityComponent } from './unity/unity.component';
import { HoneyHivesComponent } from './honey-hives/honey-hives.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '',component: ShellPortfolioComponent,
        children: [
            { path: '',component: ProjectsComponent },
            // { path: 'talismans',component: TalismansComponent },
            { path: 'unreal',component: UnrealComponent },
            { path: 'blender',component: BlenderComponent },
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
            { path: 'diabetes',component: DiabetesComponent },
            { path: 'unity',component: UnityComponent },
            { path: 'honey_hives',component: HoneyHivesComponent },
        ]
     },
    { path: 'web',component: ShellPortfolioWebComponent,
        children: [
            { path: '',component: WebProjectsComponent },
            { path: 'hostility',component: HostilityComponent },
            // { path: 'talismans',component: TalismansComponent },
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
            { path: 'diabetes',component: DiabetesComponent },
        ]
    },
    { path: 'i_want_to_work_for_iron_galaxy',component: CaterIronGalaxyComponent,
    },
    { path: 'talismans',component: TalismansComponent,
    },
    { path: 'web/talismans',component: ShellTalismansWebComponent,
    },
    { path: '**', component: PageNotFoundComponent }
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
