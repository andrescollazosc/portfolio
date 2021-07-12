import { Component, Input, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/models/menu.model';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent implements OnInit {

  @Input() menuConfig: MenuModel[] = [];

  ngOnInit(): void {
  }

}
