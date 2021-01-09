import axios from 'axios';

export const createAccount = (form: {
  name: string;
  contact: {
    office: string;
    fax: string;
  };
  manager: {
    name: string;
    position: string;
    mobile: string;
  };
  detail: {
    address: string;
    businessNumber: string;
    ceo: string;
  };
}) => axios.post('http://localhost:4000/account/add', form);
