const URL = 'http://localhost:8081';
let entries = [];

let user = null;
let users = [];

const dateAndTimeToDate = (dateString, timeString) => {
    return new Date(`${dateString}T${timeString}`).toISOString();
};

const createEntry = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entry = {};
    entry['checkIn'] = dateAndTimeToDate(formData.get('checkInDate'), formData.get('checkInTime'));
    entry['checkOut'] = dateAndTimeToDate(formData.get('checkOutDate'), formData.get('checkOutTime'));
    entry['user'] = {id: formData.get('userId')}

    const userId = formData.get('userId');

    fetch(`${URL}/entries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entry)
    }).then((result) => {
        result.json().then((entry) => {
            entries.push(entry);
        });
    });

    fetch(`${URL}/users`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            users = result;
            renderEntries();
        });
    });

    /*fetch(`${URL}/users?${userId}`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            user = result[0];
        });
    });*/

    renderEntries();
};

const indexEntries = () => {
    fetch(`${URL}/users`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            users = result;
            renderEntries();
        });
    });
};

const createCell = (text) => {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
};

const createDelete = (id) => {
    const cell = document.createElement('td');
    cell.innerHTML = "<button onclick='deleteEntry(" + id + ")'>Delete</button>";
    return cell;
};

const deleteEntry = (entryId) => {
    fetch(`${URL}/entries`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(entryId)
    }).then((result) => {
        result.json().then((result) => {
            entries = result;
            renderEntries();
        });
    });

    fetch(`${URL}/users`, {
        method: 'GET'
    }).then((result) => {
        result.json().then((result) => {
            users = result;
            renderEntries();
        });
    });

    renderEntries();
};

const renderEntries = () => {
    const display = document.querySelector('#entryDisplay');
    display.innerHTML = '';

    users.forEach((user) => {
        user.entries.forEach((entry) => {
            const row = document.createElement('tr');

            row.appendChild(createCell(entry.id));
            row.appendChild(createCell(new Date(entry.checkIn).toLocaleString()));
            row.appendChild(createCell(new Date(entry.checkOut).toLocaleString()));
            row.appendChild(createCell(user.username));
            row.appendChild(createDelete(entry.id));
            display.appendChild(row);
        });
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const createEntryForm = document.querySelector('#createEntryForm');
    createEntryForm.addEventListener('submit', createEntry);
    indexEntries();
});