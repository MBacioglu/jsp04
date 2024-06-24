console.log("--- Page 4 ---");

const inputName = document.querySelector('.fname-input');
const inputAge = document.querySelector('.age-input');
const submitbutton = document.querySelector('.submit-button');
submitbutton.addEventListener('click', function(e){
    e.preventDefault();


    //we lezen de waarden uit van het formulier
    const fullName = inputName.value;
    const age = inputAge.value;

    (async () => {
        //we voeren de fetch uit naar de url /user-add, gebruiken de POST methode en gaan json versturen in de body
        const rawResponse = await fetch('/Person-add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName: fullName, age: age })
        });
        //het antwoord wat we van de server terugkrijgen zetten we om naar een JavaScript object met json();
        const content = await rawResponse.json();

        //in het object wat we terugkrijgen verwachten we de property userAdded die ofwel true of false is
        if(content.personAdded){
            //als de waarde true is dan is de gebruiker toegevoegd
            alert('person toegevoegd');
        } else{
            //als de waarde false is dan is er iets misgegaan met het toevoegen
            alert('Niet gelukt om het person  toe te voegen');
        }

    })();
})