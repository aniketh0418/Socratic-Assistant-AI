window.addEventListener('scroll', () => {
    const chatButton = document.querySelector('.floating-chat-button');
    if (window.scrollY > 300) {
        chatButton.style.display = 'block';
    } else {
        chatButton.style.display = 'none';
    }
});


document.querySelector('.floating-chat-button').addEventListener('click', () => {
    window.open('https://socraticteacher-eogkwzebntu3bhdu8mshzw.streamlit.app/', '_blank'); // Replace with your actual Streamlit app URL
});

const ctx1 = document.getElementById('chart1').getContext('2d');
new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Yes', 'Sometimes', 'Rarely'],
        datasets: [{
            data: [22.6, 41.9, 35.5],
            backgroundColor: ['#36A2EB', 'rgb(255, 102, 0)', 'rgb(0, 242, 236)']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Students comfortable to ask questions in class',
                color: 'rgb(255, 102, 0)',
                font:{
                    size: 18
                }
            },
            legend: {
                labels: {
                    color: '#ffffff', 
                    font: {
                        size: 14 
                    }
                }
            },
        }
    }
});


const ctx2 = document.getElementById('chart2').getContext('2d');
new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Lectures', 'Discussions'],
        datasets: [{
            data: [16.1, 83.9],
            backgroundColor: ['rgb(255, 102, 0)', 'rgb(0, 242, 236)']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Learning via Discussions vs Lectures',
                color: 'rgb(255, 102, 0)',
                font:{
                    size: 18
                }
            },
            legend: {
                labels: {
                    color: '#ffffff', 
                    font: {
                        size: 14 
                    }
                }
            }
        }
    }
});


const ctx3 = document.getElementById('chart3').getContext('2d');
new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Yes', 'I think so', 'I wanna try'],
        datasets: [{
            data: [32.3, 48.4, 19.4],
            backgroundColor: ['rgb(255, 102, 0)', '#36A2EB', 'rgb(0, 242, 236)']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Is Socratic Assistant AI helpful?',
                color: 'rgb(255, 102, 0)',
                font:{
                    size: 18
                }
            },
            legend: {
                labels: {
                    color: '#ffffff', 
                    font: {
                        size: 14 
                    }
                }
            }
        }
    }
});


const ctx4 = document.getElementById('chart4').getContext('2d');
new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['More Discussions', 'Using AI tools', 'More examples'],
        datasets: [{
            data: [19.4, 45.2, 35.5],
            backgroundColor: ['rgb(255, 102, 0)', '#36A2EB', 'rgb(0, 242, 236)']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Prefer learning via?',
                color: 'rgb(255, 102, 0)',
                font:{
                    size: 18
                }
            },
            legend: {
                labels: {
                    color: '#ffffff', 
                    font: {
                        size: 14 
                    }
                }
            }
        }
    }
});