import { Component, Input } from '@angular/core';
import { MenuModel } from 'src/app/models/menu.model';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent {

  @Input() menuConfig: MenuModel[] = [];

}
