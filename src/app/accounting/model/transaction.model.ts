import {Account} from "./account.model";

export class Transaction {
    id: number;
    amount: number;
    transactionDate: Date;
    groupTransactionId: string;
    particular: string;
    type: TransactionType;
    account: Account;
}

export enum TransactionType {
    DEBIT = 'DEBIT',
    CREDIT = 'CREDIT'
}
