import { MenuModel } from "../models/menu.model";

export class MenuMock {
    public static getDataMenu(): MenuModel[]{
        return[
            {
                router: '#profile',
                label: 'Profile'
            },
            {
                router: '#experience',
                label: 'Work Experience'
            },
            {
                router: '#contact',
                label: 'Contact'
            }
        ];
    }
}