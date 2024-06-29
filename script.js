document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackList = document.getElementById('feedbackList');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const employeeId = document.getElementById('employeeId').value;
        const feedback = document.getElementById('feedback').value;
        const rating = document.querySelector('input[name="rate"]:checked').value;

        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');

        const feedbackTitle = document.createElement('h3');
        feedbackTitle.textContent = `${name} (${employeeId})`;
        feedbackItem.appendChild(feedbackTitle);

        const feedbackRating = document.createElement('p');
        feedbackRating.textContent = `Rating: ${rating} stars`;
        feedbackItem.appendChild(feedbackRating);

        const feedbackContent = document.createElement('p');
        feedbackContent.textContent = feedback;
        feedbackItem.appendChild(feedbackContent);

        feedbackList.appendChild(feedbackItem);

        feedbackForm.reset();
    });

    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            body.setAttribute('data-theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
        }
    });
});