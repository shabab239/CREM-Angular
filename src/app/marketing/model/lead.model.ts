import {Campaign} from "./campaign.model";

export class Lead {
    id?: number;
    name?: string;
    contactInfo?: string;
    interest?: string;
    status?: LeadStatus;
    source?: string;
    campaign: Campaign = new Campaign();
}

export enum LeadStatus {
    NEW = 'NEW',
    CONTACTED = 'CONTACTED',
    INTERESTED = 'INTERESTED',
    NOT_INTERESTED = 'NOT_INTERESTED',
    CONVERTED = 'CONVERTED',
    LOST = 'LOST'
}
