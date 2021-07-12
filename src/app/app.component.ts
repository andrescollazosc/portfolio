import { Component } from '@angular/core';
import { MenuModel } from './models/menu.model';
import { MenuMock } from './mocks/menu.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-services-briefcase';

  public menuConfig: MenuModel[] = MenuMock.getDataMenu();
}
