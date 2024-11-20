// const baseUrl: string = 'http://localhost:3000';
const baseUrl: string = 'http://localhost/api';

export const API_URLS = {
    login: `${baseUrl}/auth/login`,
    company: `${baseUrl}/company`,
    user: `${baseUrl}/user`,

    dashboard: `${baseUrl}/admin/dashboard`,
    project: `${baseUrl}/project`,
    stage: `${baseUrl}/stage`,
    worker: `${baseUrl}/worker`,
    task: `${baseUrl}/task`,
    rawMaterial: `${baseUrl}/rawMaterial`,
    supplier: `${baseUrl}/supplier`,
    booking: `${baseUrl}/booking`,
    payment: `${baseUrl}/payment`,
    account: `${baseUrl}/account`,
    transaction: `${baseUrl}/transaction`,
    ledger: `${baseUrl}/ledger`,

    lead: `${baseUrl}/lead`,
    campaign: `${baseUrl}/campaign`,
    conversation: `${baseUrl}/conversation`,
};
