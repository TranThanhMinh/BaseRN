let Domain = require("./Domain")
export const BASE_API = Domain.API_SERVER;
export const BASE_API_2 = Domain.API_SERVER_2;
export const DOMAIN_API = BASE_API + '/';
export const DOMAIN_API_2 = BASE_API_2 ;


export const LOGIN = DOMAIN_API + 'login' 
export const Employees = DOMAIN_API_2 + 'employees' 


