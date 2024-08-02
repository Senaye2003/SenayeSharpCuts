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