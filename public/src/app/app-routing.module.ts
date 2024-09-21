

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
import { TalismansComponent } from './talismans/talismans.component';
import { UnrealComponent } from './unreal/unreal.component';
import { BlenderComponent } from './blender/blender.component';
import { ShellTalismansWebComponent } from './shell-talismans-web/shell-talismans-web.component';
import { UnityComponent } from './unity/unity.component';
import { HoneyHivesComponent } from './honey-hives/honey-hives.component';
import { CropToolComponent } from './crop-tool/crop-tool.component';
import { FetchFriendComponent } from './fetch-friend/fetch-friend.component';
import { FantasticKnockAboutComponent } from './fantastic-knock-about/fantastic-knock-about.component';
import { ReceiptsComponent } from './receipts/receipts.component';
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
            { path: 'swedish',component: SwedishComponent },
            { path: 'sacred',component: SacredComponent },
            { path: 'jigsaw',component: JigsawComponent },
            { path: 'inventory',component: InventoryComponent },
            { path: 'wedding_planner',component: WeddingComponent },
            { path: 'coin_machine',component: CoinMachineComponent },
            { path: 'diabetes',component: DiabetesComponent },
            { path: 'unity',component: UnityComponent },
            { path: 'honey_hives',component: HoneyHivesComponent },
            { path: 'crop_tool',component: CropToolComponent },
            { path: 'fetch_friend',component: FetchFriendComponent },
            { path: 'fantastic_knock_about',component: FantasticKnockAboutComponent },
        ]
     },
    { path: 'web',component: ShellPortfolioWebComponent,
        children: [
            { path: '',component: WebProjectsComponent },
            { path: 'hostility',component: HostilityComponent },
            // { path: 'talismans',component: TalismansComponent },
            { path: 'swedish',component: SwedishComponent },
            { path: 'sacred',component: SacredComponent },
            { path: 'jigsaw',component: JigsawComponent },
            { path: 'inventory',component: InventoryComponent },
            { path: 'wedding_planner',component: WeddingComponent },
            { path: 'coin_machine',component: CoinMachineComponent },
            { path: 'diabetes',component: DiabetesComponent },
            { path: 'honey_hives',component: HoneyHivesComponent },
            { path: 'crop_tool',component: CropToolComponent },
            { path: 'fetch_friend',component: FetchFriendComponent },
            { path: 'receipts',component: ReceiptsComponent },
        ]
    },
    // { path: 'i_want_to_work_for_iron_galaxy',component: CaterIronGalaxyComponent,
    // children: [
    //     { path: '',component: ProjectsComponent },
    // ]



    // },
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
