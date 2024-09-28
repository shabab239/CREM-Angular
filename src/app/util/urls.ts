// const baseUrl: string = 'http://localhost:3000';
const baseUrl: string = 'http://localhost/api';

export const API_URLS = {
  login: `${baseUrl}/auth/login`,
  company: `${baseUrl}/company`,
  user: `${baseUrl}/user`,

  dashboard: `${baseUrl}/admin/dashboard`,
  faculty: `${baseUrl}/faculty`,
  department: `${baseUrl}/department`,
  program: `${baseUrl}/program`,
  semester: `${baseUrl}/semester`,
  course: `${baseUrl}/course`,
  student: `${baseUrl}/student`,
  examination: `${baseUrl}/examination`,
  result: `${baseUrl}/result`,
  fee: `${baseUrl}/fee`,
  accounting: `${baseUrl}/accounting`,
};
