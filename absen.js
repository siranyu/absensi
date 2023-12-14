let absen = document.querySelector("#hadir");
let keterangan = {};

function hadirValue() {
    if (absen.checked == true) {
        document.querySelector("#keterangan").style.display = "none";
        document.querySelector("#textKeterangan").style.display = "none";
    } else {
        document.querySelector("#keterangan").style.display = "unset";
        document.querySelector("#textKeterangan").style.display = "unset";
    }
}

function dropdownValue() {
    keterangan = document.getElementById("keterangan").value;
}

function btnSubmit() {
    let absen = document.querySelector("#hadir");
    let namaSiswa = document.querySelector("#nama-siswa").value;

    if (namaSiswa == 0) {
        alert("Tolong isi NAMA SISWA terlebih dahulu!");

        return;
    } else {
        let table = document.getElementById("table");
        let row = table.insertRow(1);

        if (absen.checked == true) {
            let siswa = row.insertCell(0);
            siswa.innerHTML = namaSiswa;

            let infoKet = row.insertCell(1);
            infoKet.innerHTML = 'Hadir';

        } else {
            if (keterangan == 'sakit') {
                let siswa = row.insertCell(0);
                siswa.innerHTML = namaSiswa;

                let infoKet = row.insertCell(1);
                infoKet.innerHTML = 'Sakit';

            } else if (keterangan == 'izin') {
                let siswa = row.insertCell(0);
                siswa.innerHTML = namaSiswa;

                let infoKet = row.insertCell(1);
                infoKet.innerHTML = 'Izin';

            } else if (keterangan == 'alfa') {
                let siswa = row.insertCell(0);
                siswa.innerHTML = namaSiswa;

                let infoKet = row.insertCell(1);
                infoKet.innerHTML = 'Alfa';
            } else {
                alert('Tolong pilih KETERANGAN terlebih dahulu!');
            }
        }
    }
}