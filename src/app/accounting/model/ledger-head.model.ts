export class LedgerHead {
    id: number;
    name: string;
    type: LedgerHeadType;
    companyId: number;
}

export enum LedgerHeadType {
    ASSET = 'ASSET',
    LIABILITY = 'LIABILITY',
    INCOME = 'INCOME',
    EXPENSE = 'EXPENSE'
}
