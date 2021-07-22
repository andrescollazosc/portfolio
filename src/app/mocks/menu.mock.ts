import { MenuModel } from "../models/menu.model";

export class MenuMock {
    public static getDataMenu(): MenuModel[]{
        return[
            {
                router: '#profile-container',
                label: 'Profile'
            },
            {
                router: '#experience-container',
                label: 'Work Experience'
            },
            {
                router: '#contact-section',
                label: 'Contact'
            }
        ];
    }
}