function checkAccessibility() {
    const url = document.getElementById('websiteURL').value;
    if (!url) {
        alert('Please enter a URL');
        return;
    }

    // Example of dummy data
    const results = [
        {
            check: 'Alt text for images',
            tool1: 5,
            tool2: 3
        },
        {
            check: 'Keyboard accessibility',
            tool1: 2,
            tool2: 2
        }
    ];

    const tbody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear previous results

    results.forEach(result => {
        const row = tbody.insertRow();
        row.insertCell().textContent = result.check;
        row.insertCell().textContent = result.tool1;
        row.insertCell().textContent = result.tool2;
        const compareButton = document.createElement('button');
        compareButton.textContent = 'Compare';
        compareButton.onclick = function() {
            alert('Comparison details for ' + result.check);
        };
        const cell = row.insertCell();
        cell.appendChild(compareButton);
    });
}
