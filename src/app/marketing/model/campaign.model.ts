export class Campaign {
    id?: number;
    name?: string;
    startDate?: Date;
    endDate?: Date;
    description?: string;
    type?: CampaignType;
    status?: CampaignStatus;
}

export enum CampaignType {
    EMAIL = 'EMAIL',
    SOCIAL_MEDIA = 'SOCIAL_MEDIA',
    NEWS = 'NEWS'
}

export enum CampaignStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}
