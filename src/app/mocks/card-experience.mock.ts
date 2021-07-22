import { CardExperienceModel } from "../models/card-experience.model";

export class CardExperienceMock {
    
    public static getExperienceData(): CardExperienceModel[] {
        return[
            {
                urlCompany: 'https://www.endava.com',
                pathLogo: 'https://s3-symbol-logo.tradingview.com/endava--600.png',
                company: 'Endava',
                job: 'Senior Developer',
                date: 'Current'
            },
            {
                urlCompany: 'https://www.hexacta.com/',
                pathLogo: 'https://i.pinimg.com/280x280_RS/7d/dd/54/7ddd549b8f3eea8446084b15b245c5b9.jpg',
                company: 'Hexacta',
                job: 'Senior Developer',
                date: 'Oct 11 2020 - Jun 05 2021'
            },
            {
                urlCompany: 'https://stefanini.com/es',
                pathLogo: 'https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/b78ed8009f131f98a0f092c4eb4d9ae3',
                company: 'Stefanini',
                job: 'Front-end Developer',
                date: 'Feb 18 2019 - Sep 15 2020'
            },
            {
                urlCompany: 'https://globalhitss.com/',
                pathLogo: 'https://media-exp3.licdn.com/dms/image/C560BAQFwJpbo_4k-hg/company-logo_200_200/0/1537984388477?e=2159024400&v=beta&t=glugXLScEZBQA0Vzi3DyuJHD4RyKKaeZeVHlIFf7VI4',
                company: 'Global Hitss',
                job: 'Back-end Developer',
                date: 'Dec 07 2017 - Feb 10 2019'
            },            
        ];
    }

}