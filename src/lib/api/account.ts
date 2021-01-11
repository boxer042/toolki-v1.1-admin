import axios from 'axios';

export const createAccount = (form: CreateAccountFormData) =>
  axios.post('http://localhost:4000/account/add', form);

type CreateAccountFormData = {
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
};

// Account Favorite
export const togglefavoritesAccount = async ({
  _id,
  favorites,
}: {
  _id: string;
  favorites: boolean;
}) =>
  await axios.post('http://localhost:4000/account/favorites', {
    _id: _id,
    favorites: favorites,
  });

export const getAccount = (id: string) =>
  axios.get(`http://localhost:4000/account/detail/${id}`);
