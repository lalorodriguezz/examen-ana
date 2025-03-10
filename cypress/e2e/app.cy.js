describe('ProfilePage', () => {
    beforeEach(() => {
      // Ajusta la URL según la configuración de tu aplicación
      cy.visit('/profile');
    });
  
    it('should render the profile page correctly', () => {
      cy.get('h1').contains('Perfil').should('be.visible');
      cy.get('img[alt="Profile"]').should('be.visible');
      cy.get('button').contains('Guardar cambios').should('be.visible');
    });
  
    it('should allow the user to fill out the form', () => {
      cy.get('input[placeholder="Nombre de pila"]').type('John');
      cy.get('input[placeholder="Apellido"]').type('Doe');
      cy.get('input[placeholder="Correo electrónico"]').type('john.doe@example.com');
      cy.get('input[placeholder="Selecciona tu fecha de nacimiento"]').click();
  
      // Refinamos el selector para evitar múltiples coincidencias
      cy.get('.react-datepicker__day--001:not(.react-datepicker__day--outside-month)')
        .first()
        .click(); // Selecciona el primer día visible del mes actual
  
      cy.get('button').contains('Masculino').click();
      cy.get('input[placeholder="Ubicación"]').type('New York');
    });
  
    it('should submit the form', () => {
      cy.get('input[placeholder="Nombre de pila"]').type('John');
      cy.get('input[placeholder="Apellido"]').type('Doe');
      cy.get('input[placeholder="Correo electrónico"]').type('john.doe@example.com');
      cy.get('input[placeholder="Selecciona tu fecha de nacimiento"]').click();
  
      // Selector corregido para evitar conflictos con múltiples días
      cy.get('.react-datepicker__day--001:not(.react-datepicker__day--outside-month)')
        .first()
        .click();
  
      cy.get('button').contains('Masculino').click();
      cy.get('input[placeholder="Ubicación"]').type('New York');
      cy.get('button').contains('Guardar cambios').click();
  
      
    });
  });
  