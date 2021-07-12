import { ProfileCardModel } from "../models/profile-card.model";

export class ProfileCardMock {
    
    /**
     * getProfile
 : ProfileCardModel    */
    public static getProfile(): ProfileCardModel {
        return {
            title: 'Hi, I am Andres Collazos, Nice to meet you',
            description: 'I am from Popayán Colombia and I have worked as a software developer for the last nine years, years in which I have had the opportunity to participate in different projects for different sectors, for which I have obtained different skills in back-end and front-end in different technologies.'
        };
    }

}