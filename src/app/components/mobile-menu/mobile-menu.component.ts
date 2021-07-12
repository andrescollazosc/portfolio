import { Component, Input, OnInit } from '@angular/core';
import { MenuModel } from '../../models/menu.model';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  @Input() menuConfig: MenuModel[] = [];

  public isShow: boolean = false;
  public iconClass: string = 'fas fa-bars';

  ngOnInit(): void {}

  public showMenu(): void {
    this.isShow = !this.isShow;
    this.iconClass = !this.isShow ? 'fas fa-bars' : 'fas fa-times';
  }
}
