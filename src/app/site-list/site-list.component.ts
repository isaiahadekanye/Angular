import { Component, OnInit } from "@angular/core";
import { Item } from "../item";
import { ItemService } from "../item.service";

@Component({
  selector: "app-site-list",
  templateUrl: "./site-list.component.html",
  styleUrls: ["./site-list.component.css"]
})
export class SiteListComponent implements OnInit {
  items: Item[];
  currentDate = new Date();
  count = 0;
  countnew = 0;
  viewer = false;
  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => (this.items = items));
    this.count = this.items.length;
    this.countnew = this.items.filter(item => item.newitem == true).length;
    this.items.forEach(function(item, index) {
      if (item.fullDescription.length > 20) {
        item.fullDescription = item.fullDescription.substr(0, 20).concat("...");
      }
    });
  }
  hide(): void {
    if (this.items.length == 0) {
      this.itemService.getItems().subscribe(items => (this.items = items));
      this.items.forEach(function(item, index) {
        if (item.fullDescription.length > 20) {
          item.fullDescription = item.fullDescription
            .substr(0, 20)
            .concat("...");
        }
      });
      this.count = this.items.length;
      this.countnew = this.items.filter(item => item.newitem == true).length;
    } else {
      this.items = [];
      this.count = this.items.length;
      this.countnew = this.items.filter(item => item.newitem == true).length;
    }
  }

  add(): void {
    if (this.viewer) {
      this.viewer = false;
    } else {
      this.viewer = true;
    }
  }
  delete(item: Item): void {
    this.items = this.items.filter(i => i !== item);
    this.count = this.items.length;
    this.countnew = this.items.filter(item => item.newitem == true).length;
  }

  save(
    name: string,
    ShortDescription: string,
    FullDescription: string,
    image: string
  ): void {
    if (!name) {
      this.viewer = false;
      return;
    }
    let newFullDescription = FullDescription;

    console.log(FullDescription.length);
    if (FullDescription.length > 20) {
      newFullDescription = FullDescription.substr(0, 20).concat("...");
    }
    const tmp = {
      id: this.items.length + 1,
      name: name,
      shortDescription: ShortDescription,
      fullDescription: newFullDescription,
      image: image,
      newitem: true
    };
    this.items.unshift(tmp);
    this.count = this.items.length;
    this.countnew = this.items.filter(item => item.newitem == true).length;
    this.viewer = false;
  }
}
