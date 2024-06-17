document.getElementById('confirmDelete').addEventListener('click', function() {
    var entryNo = document.getElementById('entryNo').value.trim();

    var isConfirmed = confirm("Bu girişi silmek istediğinizden emin misiniz?");
    
    if (isConfirmed) {
        deleteEntry(entryNo);
    } else {
        alert("Silme işlemi iptal edildi.");
    }
});

async function deleteEntry(entryNo) {
    try {
        const response = await fetch(`http://localhost:3000/api/entries/${entryNo}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error(error);
        alert("Veri silinirken bir hata oluştu.");
    }
}
