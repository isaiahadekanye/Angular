import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SiteListComponent } from "./site-list/site-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
  declarations: [AppComponent, SiteListComponent, ItemDetailComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
