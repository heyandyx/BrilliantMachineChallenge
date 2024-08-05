class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/');
    }
  
    typeUsername(username) {
      cy.get('#user-name').type('standard_user');
    }
  
    typePassword(password) {
      cy.get('#password').type('secret_sauce');
    }
  
    submit() {
      cy.get('#login-button').click();
    }
  }
  
  export default new LoginPage();
  