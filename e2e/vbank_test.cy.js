describe('visit vfd', () => {
   it('should test for valid username and valid password', () => {
      //this test is to test for valid username
      cy.visit('https://veelage.vbank.ng')
      cy.location('protocol').should('eq', 'https:')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael007')
      cy.get('.bg-gradient').click()
      cy.contains('Welcome')
   })

   it('should test for valid username and invalid password', () => {
      //cy.title().should('eq', 'Verve Access')
      cy.visit('https://veelage.vbank.ng')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael00007')
      cy.get('.bg-gradient').click()
      cy.contains('Invalid email or password')
   })

   it('should test for invalid username and valid password', () => {
      //cy.title().should('eq', 'Verve Access')
      cy.visit('https://veelage.vbank.ng')
      cy.get('#email').type('klasicbrownieeegmailcom')
      cy.get('#password').type('michael0007')
      cy.get('.bg-gradient').click()
      // cy.find('please include an  in the email address   is missing an')
   })

   it('should test for wrong username and valid password', () => {
      //cy.title().should('eq', 'Verve Access')
      cy.visit('https://veelage.vbank.ng')
      cy.get('#email').type('klasicbrownieee@gmail.com')
      cy.get('#password').type('michael0007')
      cy.get('.bg-gradient').click()
      cy.contains('Email address not found')
   })



   it('should test for empty username and empty password', () => {
      //cy.title().should('eq', 'Verve Access')
      cy.visit('https://veelage.vbank.ng')
      cy.get('#email').type(' ')
      cy.get('#password').type(' ')
      cy.get('.bg-gradient').click()
      // cy.find({force:true}, 'Please fill in this field.')
   })

   it('should test for overview page', () => {
      //this test is to test for valid username
      cy.visit('https://veelage.vbank.ng')
      cy.location('protocol').should('eq', 'https:')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael007')
      cy.get('.bg-gradient').click()
      cy.get(':nth-child(2) > ul > :nth-child(1) > .flex > :nth-child(2)').click
   })

   it('should test for valid username and valid password', () => {
      //this test is to test for valid username
      cy.visit('https://veelage.vbank.ng')
      cy.location('protocol').should('eq', 'https:')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael007')
      cy.get('.bg-gradient').click()
      cy.contains('Welcome')
   })
   it('should test for valid username and invalid password', () => {
      //cy.title().should('eq', 'Verve Access')
      cy.visit('https://veelage.vbank.ng')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael00007')
      cy.get('.bg-gradient').click()
      cy.contains('Invalid email or password')
   })
 
   it('should test for wrong username and valid password', () => {
      //cy.title().should('eq', 'Verve Access')
      cy.visit('https://veelage.vbank.ng')
      cy.get('#email').type('klasicbrownieee@gmail.com')
      cy.get('#password').type('michael0007')
      cy.get('.bg-gradient').click()
      cy.contains('Email address not found')
   })
   
   
   it('should test for Referrals page', () => {
      //this test is to test for Referrals page
      cy.visit('https://veelage.vbank.ng')
      cy.location('protocol').should('eq', 'https:')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael007')
      cy.get('.bg-gradient').click()
      cy.get(':nth-child(2) > ul > :nth-child(2) > .flex').click


      // should check for Table headers
      cy.scrollTo('bottom')
      //check for the Some Referall Div
      cy.get('.my-6 > .text-xl')
   })


   it('should test for About v page', () => {
      //this test is to test for About v
      cy.visit('https://veelage.vbank.ng')
      cy.location('protocol').should('eq', 'https:')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael007')
      cy.get('.bg-gradient').click()
      cy.get(':nth-child(3) > ul > :nth-child(2) > .flex').click()
   })

   it('should test for About Veelage page', () => {
      //this test is to test for About Veelage
      cy.visit('https://veelage.vbank.ng')
      cy.location('protocol').should('eq', 'https:')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael007')
      cy.get('.bg-gradient').click()
      cy.get('ul > :nth-child(3) > .flex').click()
      cy.contains('About Veelage')

   })


   it('should test for Term And Conditions page', () => {
      //this test is to test for Term And Conditions page
      cy.visit('https://veelage.vbank.ng')
      cy.location('protocol').should('eq', 'https:')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael007')
      cy.get('.bg-gradient').click()
      cy.get('ul > :nth-child(4) > .flex > :nth-child(1)').click()
      cy.contains('Terms & Conditions')

   })

   it('should test for Rename Bank page', () => {
      //this test is to test for Rename Bank page
      cy.visit('https://veelage.vbank.ng')
      cy.location('protocol').should('eq', 'https:')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael007')
      cy.get('.bg-gradient').click()
      cy.get('ul > :nth-child(5) > .flex > :nth-child(1)').click()
      cy.contains('Welcome')

   })

   it('should test for Join the telegram community page', () => {
      //this test is to test for Join the telegram community page
      cy.visit('https://veelage.vbank.ng')
      cy.location('protocol').should('eq', 'https:')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael007')
      cy.get('.bg-gradient').click()
      cy.get('ul > :nth-child(6) > .flex > :nth-child(1)').click()
      cy.contains('Veelage Square')

   })

   it('should test for sign button', () => {
      //this test is to test for valid username
      cy.visit('https://veelage.vbank.ng')
      cy.location('protocol').should('eq', 'https:')
      cy.get('#email').type('klasicbrownie@gmail.com')
      cy.get('#password').type('michael007')
      cy.get('.bg-gradient').click()
      cy.get('.nav-logout > .flex').click()

   })
})

