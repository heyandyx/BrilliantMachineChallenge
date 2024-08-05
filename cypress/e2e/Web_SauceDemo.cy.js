import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('Sauce Demo Tests', () => {
  before(() => {
    LoginPage.visit();
  });

  it('should log in and verify sorting of items', () => {
    // Login
    LoginPage.typeUsername();
    LoginPage.typePassword();
    LoginPage.submit();

    // Verify sorting by Name (A -> Z)
    InventoryPage.verifyItemsSortedByNameAsc();

    // Change sorting to Name (Z -> A)
    InventoryPage.changeSortingToDesc();

    // Verify sorting by Name (Z -> A)
    InventoryPage.verifyItemsSortedByNameDesc();
  });
});
