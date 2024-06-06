function tambahLebar(index) {
    let progressBars = document.querySelectorAll('.progress-bar');
    let button = document.querySelectorAll('.btn-outline-danger');
    let lebarSaatIni = parseFloat(progressBars[index].style.width);
    let tambahan = 25;
    if (lebarSaatIni < 100) {
        let lebarBaru = lebarSaatIni + tambahan;
        progressBars[index].style.width = lebarBaru + '%';
        progressBars[index].setAttribute('aria-valuenow', lebarBaru);

        switch (lebarBaru) {
            case 0:
                button[index].innerHTML = 'Buat';
                break;
            
            case 25:
                progressBars[index].innerHTML = 'Pesanan Dalam Proses';
                button[index].innerHTML = 'Selesai';
                break;
            
            case 50:
                progressBars[index].innerHTML = 'Pesanan Selesai Dibuat';
                button[index].innerHTML = 'Antar';
                break;
            
            case 75:
                progressBars[index].innerHTML = 'Pesanan Dalam Perjalanan';
                button[index].innerHTML = 'Selesai';
                break;
            
            case 100:
                progressBars[index].innerHTML = 'Pesanan Selesai!';
                button[index].innerHTML = 'Selesai';
                break;
        
            default:
                break;
        }
    }
}