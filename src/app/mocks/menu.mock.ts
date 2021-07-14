import { MenuModel } from "../models/menu.model";

export class MenuMock {
    public static getDataMenu(): MenuModel[]{
        return[
            {
                router: '',
                label: 'Home'
            },
            {
                router: 'experience',
                label: 'My Experience'
            },
            {
                router: 'contact',
                label: 'Contact'
            }            
        ];
    }
}