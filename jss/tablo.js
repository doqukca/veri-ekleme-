// tablo.js

document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('dataTable');
    var data = JSON.parse(localStorage.getItem('veri')) || [];

    data.forEach(function(item, index) {
        var row = table.insertRow();
        var cellNumber = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellStatus = row.insertCell(2);
        var cellAddress = row.insertCell(3);
        var cellDate = row.insertCell(4);
        var cellNext7Days = row.insertCell(5);
        var cellNext28Days = row.insertCell(6);

        cellNumber.textContent = index + 1;
        cellName.textContent = item.name;
        cellStatus.textContent = item.status;
        cellAddress.textContent = item.address;
        cellDate.textContent = item.date;

        // Duruma göre satır rengini ayarla
        if (item.status === 'olumlu') {
            row.style.backgroundColor = '#d4edda'; // Yeşil arka plan
        } else if (item.status === 'olumsuz') {
            row.style.backgroundColor = '#f8d7da'; // Kırmızı arka plan
        } else {
            row.style.backgroundColor = '#f8f9fa'; // Gri arka plan
        }

        // 7 gün sonrası hesaplama
        var next7Date = new Date(item.date);
        next7Date.setDate(next7Date.getDate() + 7);
        cellNext7Days.textContent = formatDate(next7Date);

        // 28 gün sonrası hesaplama
        var next28Date = new Date(item.date);
        next28Date.setDate(next28Date.getDate() + 28);
        cellNext28Days.textContent = formatDate(next28Date);
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
