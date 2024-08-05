describe('API Test for Fake Store', () => {

    it('should find and count objects with specific properties', () => {
        // Definindo a URL da API
        const apiUrl = 'https://fakestoreapi.com/products';

        cy.request(apiUrl).then((response) => {

            // Check that the response status is 200
            cy.request(apiUrl).its('status').should('equal', 200);

            // Get the list of products
            const products = response.body;

            // Filter products to find electronics
            const electronicsProducts = products.filter(product => product.category === 'electronics');
            
            // Counting the number of electronic products
            const count = electronicsProducts.length;

            // number of electronics products with a rating greater than 4
            const highRateProducts = electronicsProducts.filter(product => product.rating.rate > 4);
            const highRateCount = highRateProducts.length;

            // Print the count of electronics products
            cy.log(`Total number of electronics products: ${count}`);
            cy.log(`Number of electronics products with rating greater than 4: ${highRateCount}`);
            console.log('Electronic products found:', electronicsProducts);

            // Verify that there are electronics products with rating greater than 4
            expect(highRateCount).to.be.greaterThan(0);
        });
    });
});
