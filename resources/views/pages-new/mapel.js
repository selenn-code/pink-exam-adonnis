let cek, btn, isChecked = false;

document.addEventListener('DOMContentLoaded', function() {
    cek = document.getElementById('centang');
    btn = document.getElementById('checkboxBtn');
});

function klikButton(){
    if (!cek || !btn) return;
    isChecked = !isChecked;
    if (isChecked) {
        cek.style.display = 'block';
        btn.style.backgroundColor = '#FF7E7E';
    } else {
        cek.style.display = 'none';
        btn.style.backgroundColor = '#FF7E7E';
    }
}
