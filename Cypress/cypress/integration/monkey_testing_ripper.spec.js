describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvent(10);
    })
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomClick(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
        });
    }   
}

function randomEvent(monkeys) {
    var monkeysLeft = monkeys;    
    var eventsArray = ["a","input","select", "button"]
    if(monkeysLeft > 0) {      
      var event = eventsArray[getRandomInt(0, eventsArray.length)];
      getRandomEventLink(event, monkeysLeft);            
    } else {
      cy.log("There is no more monkeys");
    }
}

function getRandomEventLink(event, monkeysLeft) {    
    cy.get('body').then((body) => {
        if (body.find(event).length > 0) {
          cy.get(event).then($links => {
            var randomEventLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomEventLink) && !Cypress.dom.isDetached(randomEventLink)) {
                cy.log("Execute monkey #" + monkeysLeft.toString());
                cy.log("Execute event " + event); 
                monkeysLeft = monkeysLeft - 1;            
                switch (event) {
                    case "a":
                        cy.wrap(randomEventLink).click({force: true});
                        cy.log("success");                        
                    break;
                    case "input":
                        cy.wrap(randomEventLink).click().type("testing text", {force: true});
                        cy.log("success");
                    break;
                    case "select":
                        cy.get(randomEventLink).then(element => cy.get(randomEventLink).select(element.val(), {force: true}));
                        cy.log("success");
                    break;
                    case "button":
                        cy.wrap(randomEventLink).click({force: true});
                        cy.log("success");
                    break;
                    default:
                    break;
                }
            }
            cy.wait(1000);
            randomEvent(monkeysLeft);
            });
        }
    });
}