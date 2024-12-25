const { startButton } = require("./startButton");

        const targetDateInput = document.getElementById('targetDate');
        const countdownDisplay = document.getElementById('countdown');
        let countdownInterval;

        startButton.addEventListener('click', () => {
            const targetDate = new Date(targetDateInput.value);

            if (isNaN(targetDate)) {
                alert('Please select a valid date and time.');
                return;
            }

            clearInterval(countdownInterval);

            countdownInterval = setInterval(() => {
                const currentTime = new Date();
                const timeRemaining = targetDate - currentTime;

                if (timeRemaining <= 0) {
                    clearInterval(countdownInterval);
                    countdownDisplay.textContent = 'Time is up!';
                    return;
                }

                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                countdownDisplay.textContent = `Time Remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
            }, 1000);
        });
