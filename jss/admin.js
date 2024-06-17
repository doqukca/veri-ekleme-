// admin.js

document.getElementById('addForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var status = document.getElementById('status').value;
    var address = document.getElementById('address').value;
    var date = document.getElementById('date').value;

    var newData = {
        name: name,
        status: status,
        address: address,
        date: date
    };

    var data = JSON.parse(localStorage.getItem('veri')) || [];
    data.push(newData);
    localStorage.setItem('veri', JSON.stringify(data));

    // Formu temizle
    document.getElementById('addForm').reset();

    alert('Veri başarıyla eklendi!');
});
