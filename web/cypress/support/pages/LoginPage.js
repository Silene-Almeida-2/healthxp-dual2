
import popup from './components/Popup'
class LoginPage {

    constructor() {
        this.popup = popup
    }

    go(user) {
        cy.visit('/')
    }

    fill(user) {
         cy.get('input[name=email]').clear().as('email')
         cy.get('input[name=password]').clear().as('password')

         user.email ? cy.get('@email') .type(user.email) : cy.log('empyt email')
         user.password ? cy.get('@password').type(user.password) :  cy.log('empyt password')
        }         
    
    submit() {
        cy.contains('button', 'Entrar').click()
    }

    doLogin(user) {
        this.go()
        this.fill(user)
        this.submit()
    }
}

    export default new LoginPage()