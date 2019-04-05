import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { SiteListComponent } from "./site-list/site-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/item", pathMatch: "full" },
  { path: "detail/:id", component: ItemDetailComponent },
  { path: "item", component: SiteListComponent }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
