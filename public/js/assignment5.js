console.log("--- Page 5 ---");

const chart = document.querySelector('.chart');
const adult = 6;
const immature =4;


//er wordt een nieuwe grafiek gemaakt van het type 'bar'
new Chart(chart, {
    type: 'pie',
    data: {
      //de labels komen op de x as
      labels:  [' volwassen', 'niet volwassen'],
      datasets: [{
        label: '# of Votes',
        // de data komt op de y as
        data: [adult, immature],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});