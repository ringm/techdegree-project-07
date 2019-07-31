var ctx = document.getElementById('traffic').getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: '',
            data: [500, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: ['rgba(115, 119, 191, 0.2)'],
            borderColor: ['rgba(115, 119, 191, 1)'],
            borderWidth: 2
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines:{
                    drawTicks: false,
                },
                ticks: {
                    padding: 20
                },
            }],
            yAxes: [{
                gridLines:{
                    drawTicks: false,
                },
                ticks: {
                    min: 500,
                    max: 2500,
                    beginAtZero: false,
                    padding: 20,
                }
            }]
        },
        elements: {
            line: {
                tension: 0
            },
            point: {
                radius: 8,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(115, 119, 191, 1)',
            }
        }
    }
});

var ctx2 = document.getElementById('daily-traffic').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: '',
            data: [75, 110, 170, 120, 230, 200, 140],
            backgroundColor: [
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
                'rgba(115, 119, 191, 1)',
            ],
            borderColor: [''],
            borderWidth: 0
        }]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                barThickness: 24,
                gridLines:{
                    drawTicks: false,
                },
                ticks: {
                    padding: 20,
                }
            }],
            yAxes: [{
                gridLines:{
                    drawTicks: false,
                },
                ticks: {
                    min: 50,
                    max: 250,
                    beginAtZero: false,
                    padding: 20
                }
            }]
        }
    }
});

var ctx3 = document.getElementById('mobile-users').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            label: '',
            data: [3, 5, 12],
            backgroundColor: [
                'rgba(116, 177, 191, 1)',
                'rgba(129, 201, 143, 1)',
                'rgba(115, 119, 191, 1)',
            ],
            borderColor: ['',],
            borderWidth: 0
        }]
    },
    options: {
        legend: {
            position: 'right',
        },
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    display: false,
                }
            }]
        }
    }
});
