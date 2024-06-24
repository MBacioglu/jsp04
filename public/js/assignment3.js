console.log("--- Page 3 ---");

/**
 * @description: Deze functie genereert een card
 * @message: parameter om een tekstbericht mee te geven
 **/
function createCard(message) {
    const cardElement = `
        <div class="card">
            <div class="message-box">
                <div class="message-content">${message}</div>
            </div>
            <div class="avatar">
                <img src="../images/female-avatar.svg" alt="avatar" srcset="" width="40" height="40">
            </div>
        </div>
    `;
    return cardElement;
}

// Fetch data from /persons and display it
async function fetchAndDisplayPersons() {
    try {
        const response = await fetch('/persons');
        const persons = await response.json();

        const personsContainer = document.querySelector('.persons-container');
        const adultContainer = document.querySelector('.adult-container');

        personsContainer.innerHTML = ''; // Clear any existing content
        adultContainer.innerHTML = '';   // Clear any existing content

        persons.forEach(person => {
            const card = createCard(`${person.name} (${person.age})`);
            personsContainer.innerHTML += card;
            if (person.age > 18) {
                adultContainer.innerHTML += card;
            }
        });
    } catch (error) {
        console.error('Error fetching persons:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayPersons);