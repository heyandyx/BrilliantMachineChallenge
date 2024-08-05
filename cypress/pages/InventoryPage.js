class InventoryPage {
    verifyItemsSortedByNameAsc() {
      cy.get('.inventory_item_name').then((items) => {
        const itemNames = [...items].map(item => item.innerText);
        const sortedNames = [...itemNames].sort();
        expect(itemNames).to.deep.equal(sortedNames);
      });
    }
  
    changeSortingToDesc() {
      cy.get('.product_sort_container').select('za');
    }
  
    verifyItemsSortedByNameDesc() {
      cy.get('.inventory_item_name').then((items) => {
        const itemNames = [...items].map(item => item.innerText);
        const sortedNames = [...itemNames].sort().reverse();
        expect(itemNames).to.deep.equal(sortedNames);
      });
    }
  }
  
  export default new InventoryPage();
  