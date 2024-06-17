// olumlu.js

document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('positiveData');
    var data = JSON.parse(localStorage.getItem('veri')) || [];

    data.forEach(function(item, index) {
        if (item.status === 'olumlu') {
            var row = table.insertRow();
            var cellNumber = row.insertCell(0);
            var cellName = row.insertCell(1);
            var cellAddress = row.insertCell(2);
            var cellDate = row.insertCell(3);
            var cellNext7Days = row.insertCell(4);
            var cellNext28Days = row.insertCell(5);

            cellNumber.textContent = index + 1;
            cellName.textContent = item.name;
            cellAddress.textContent = item.address;
            cellDate.textContent = item.date;

            // 7 gün sonrası hesaplama
            var next7Date = new Date(item.date);
            next7Date.setDate(next7Date.getDate() + 7);
            cellNext7Days.textContent = formatDate(next7Date);

            // 28 gün sonrası hesaplama
            var next28Date = new Date(item.date);
            next28Date.setDate(next28Date.getDate() + 28);
            cellNext28Days.textContent = formatDate(next28Date);
        }
    });
});

// Tarih formatını düzenleme
function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return day + '.' + month + '.' + year;
}
