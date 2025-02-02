document.addEventListener('DOMContentLoaded', function() {
    const habits = [
        { name: 'Morning Meditation' },
        { name: 'Spiritual Study' },
        { name: 'Asana' },
        { name: 'Pranayam' },
        { name: 'Evening Meditation' }
    ];

    const form = document.getElementById('habitForm');

    habits.forEach(habit => {
        const div = document.createElement('div');
        div.classList.add('mb-3', 'd-flex', 'align-items-center', 'justify-content-between');

        const label = document.createElement('label');
        label.textContent = habit.name;
        label.classList.add('form-label', 'fw-bold', 'me-2', 'w-50');

        const select = document.createElement('select');
        select.classList.add('form-select', 'w-50');
        select.name = habit.name.toLowerCase().replace(/\s+/g, '_');

        for (let i = 10; i <= 60; i += 10) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `${i} minutes`;
            select.appendChild(option);
        }

        div.appendChild(label);
        div.appendChild(select);
        form.appendChild(div);
    });

    const saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', function() {
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data);
        alert('Habits saved!');

        // Reset the form after saving
        form.reset();
    });
});
