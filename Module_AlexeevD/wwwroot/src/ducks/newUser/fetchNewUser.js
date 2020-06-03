import { api } from '../index';

export const fetchNewUser = ({
  login, firstname, password, confirm,
}) => {

  return api.post('/Auth/SignUp', {
    Login: login,
    Name: firstname,
    Password: password,
    ConfirmPassword: confirm,
  })
    .then((response) => console.log(response))
    .catch((err) => {
      console.dir(err);
      throw new Error(err.message);
    });
};
