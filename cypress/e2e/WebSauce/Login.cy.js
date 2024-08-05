import LoginPage from '../../pages/LoginPage';

describe('Sauce Demo Login', () => {
  before(() => {
    LoginPage.visit();
  });

  it('should log in website', () => {

    // Login
    LoginPage.typeUsername();
    LoginPage.typePassword();
    LoginPage.submit();
});
});