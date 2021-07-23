import { ContactInfoModel } from "../models/contact-info.model";

export class ContactInfoMock {
    
    public static getContactInfo(): ContactInfoModel[] {
        return [
            {
                icon: 'fas fa-user',
                label: 'Name',
                descripcion: 'Andres Collazos'
            },
            {
                icon: 'far fa-envelope',
                label: 'Email',
                descripcion: 'andrescollazosc@gmail.com'
            },
            {
                icon: 'fas fa-phone-square',
                label: 'Phone',
                descripcion: '3012544562'
            }
        ];
    }

}