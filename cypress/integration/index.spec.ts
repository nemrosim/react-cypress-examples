describe('My First Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it('should render text', () => {
        cy.contains('Edit src/App.tsx and save to reload.');
    });

    it('should render link with a proper href', () => {
        cy.get('a')
            .should('have.attr', 'href')
            .and('include', 'https://reactjs.org');
    });

    it('should render link with blank target', () => {
        cy.get('a')
            .should('have.attr', 'target')
            .and('include', '_blank');
    });
});
