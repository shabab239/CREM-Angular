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
};
