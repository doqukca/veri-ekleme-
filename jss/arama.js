// arama.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchButton').addEventListener('click', search);
});

function search() {
    var input = document.getElementById('searchInput').value.trim().toLowerCase();
    var table = document.getElementById('searchResults');
    var data = JSON.parse(localStorage.getItem('veri')) || [];

    // Tabloyu temizle
    table.getElementsByTagName('tbody')[0].innerHTML = '';

    var found = false; // Aranan isme ait veri bulundu mu?

    data.forEach(function(item, index) {
        var name = item.name.toLowerCase();
        if (name === input) {
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

            // 7 gün sonrası hesaplama
            var next7Date = new Date(item.date);
            next7Date.setDate(next7Date.getDate() + 7);
            cellNext7Days.textContent = formatDate(next7Date);

            // 28 gün sonrası hesaplama
            var next28Date = new Date(item.date);
            next28Date.setDate(next28Date.getDate() + 28);
            cellNext28Days.textContent = formatDate(next28Date);

            found = true;
        }
    });

    // Aranan isimle eşleşen veri bulunamadıysa
    if (!found) {
        // Tabloya "Aranan isme ait veri bulunamadı." mesajı ekle
        var row = table.insertRow();
        var cellNoResult = row.insertCell(0);
        cellNoResult.colSpan = 7;
        cellNoResult.textContent = "Aranan isme ait veri bulunamadı.";
    }
}

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
