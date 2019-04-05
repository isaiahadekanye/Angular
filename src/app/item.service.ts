import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Item } from "./item";
import { Items } from "./full-item-list";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor() {}

  getItems(): Observable<Item[]> {
    return of(Items);
  }

  getItem(id: number): Observable<Item> {
    return of(Items.find(item => item.id === id));
  }
}
