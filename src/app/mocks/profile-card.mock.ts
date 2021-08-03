import { ProfileCardModel } from "../models/profile-card.model";

export class ProfileCardMock {
        
    public static getProfile(): ProfileCardModel {
        return {
            title: 'Hi, I am Andres Collazos, Nice to meet you',
            description: 'I am a systems engineer with more than nine years of experience as a software developer, in my experience I have had the opportunity to work for many sectors in different technologies, I am passionate about good code and a coffee lover..'
        };
    }

}