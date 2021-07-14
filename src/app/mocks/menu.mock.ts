import { MenuModel } from "../models/menu.model";

export class MenuMock {
    public static getDataMenu(): MenuModel[]{
        return[
            {
                router: '',
                label: 'Home'
            },
            {
                router: '#profile-container',
                label: 'Profile'
            },
            {
                router: '',
                label: 'My Jobs'
            },
            {
                router: '#contact-section',
                label: 'Contact'
            }
        ];
    }
}