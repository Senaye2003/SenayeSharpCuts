document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    const modal = document.getElementById('booking-modal');
    const btn = document.getElementById('confirm-booking-btn');
    const span = document.getElementsByClassName('close')[0];
    const bookingDetails = document.getElementById('booking-details');
    const confirmBtn = document.querySelector('.modal-content .btn');
    const confirmedBookingDetails = document.getElementById('confirmed-booking-details');

    if (btn) {
        btn.onclick = function() {
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;
            bookingDetails.innerText = `Date: ${date}\nTime: ${time}`;
            modal.style.display = 'block';
        }
    }

    if (span) {
        span.onclick = function() {
            modal.style.display = 'none';
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    if (confirmBtn) {
        confirmBtn.onclick = function() {
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;
            confirmedBookingDetails.innerText = `Your booking is confirmed for Date: ${date} and Time: ${time}`;
            modal.style.display = 'none';
        }
    }

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            tabContents.forEach(content => {
                content.style.display = content.id === tab ? 'block' : 'none';
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '9d2f5228d5d6ef0da4a70c210d562341';
    const weatherContainer = document.getElementById('weather-info');

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Charlotte,NC,US&appid=${apiKey}&units=imperial`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            displayWeather(data);
        } catch (error) {
            weatherContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    };

    const displayWeather = (data) => {
        weatherContainer.innerHTML = `
            <p>Temperature: ${data.main.temp}°F</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Location: ${data.name}</p>
        `;
    };

    fetchWeather();
});