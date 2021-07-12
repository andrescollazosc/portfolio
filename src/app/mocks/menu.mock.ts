import { MenuModel } from "../models/menu.model";

export class MenuMock {
    public static getDataMenu(): MenuModel[]{
        return[
            {
                router: '',
                label: 'home'
            },
            {
                router: 'contact',
                label: 'Contact'
            }
        ];
    }
}