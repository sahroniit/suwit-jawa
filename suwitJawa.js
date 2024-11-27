// game suwit jawa v2.0

// untuk membuat fungsi pilihan element gambar dari komputer dengan memanfaatkan bilangan Math random
function getPilihanComp() {
  // untuk membuat bilangan Math random dari 0 sampai 1
  const comp = Math.random();

  // untuk mengonversi bilangan random menjadi string pilihan element gambar dari komputer, if () return ''; sama saja dengan if () { hasil = ''; }, dan return ''; sama saja dengan else { hasil = ''; }
  if (comp < 0.36) return 'gajah';
  if (comp >= 0.36 && comp < 0.71) return 'orang';
  return 'semut';
}

// untuk membuat fungsi hasil pilihan element gambar dari player dan komputer, maka wajib menuliskan parameternya
function getHasil(comp, player) {
  // if () return () ? '' : ''; sama saja dengan if () { hasil = () ? '' : ''; } , dan if berikutnya merupakan else if
  if (player == comp) return 'SERI';
  if (player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
  if (player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
  if (player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
}

// untuk membuat fungsi acak element gambar pilihan dari komputer
function acakGambar() {
  const imgComp = document.querySelector('.img-computer');
  const gambar = ['gajah', 'orang', 'semut'];
  let i = 0;
  const waktuMulai = new Date().getTime();

  // untuk membuat waktu dimulainya acak setiap element gambar pilihan dari komputer, akan terus berganti selama interval waktu 100 = 0,1 detik
  setInterval(function () {
    // untuk membuat waktu berhentinya acak element gambar pilihan dari komputer, akan berhenti setelah interval waktu 1000 = 1 detik
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }

    // untuk membuat looping pilihan element gambar dari komputer, setelah mencapai index 2 maka akan kembali ke index 0
    imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}

// untuk membuat skor awal komputer
let skorComp = 0;
// untuk membuat element h3 skor komputer
const h1 = document.getElementsByTagName('h1')[0];
const hSkorComp = document.createElement('h3');
const teksHSkorComp = document.createTextNode('Komputer : ' + skorComp);
hSkorComp.appendChild(teksHSkorComp);
hSkorComp.style.textAlign = 'center';
// untuk menyisipkan element h3 skor komputer ke bawah element h1 
document.body.insertBefore(hSkorComp, h1.nextSibling);

// untuk membuat skor awal player
let skorPlayer = 0;
// untuk membuat element h3 player
const hSkorPlayer = document.createElement('h3');
const teksHSkorPlayer = document.createTextNode('Player : ' + skorPlayer);
hSkorPlayer.appendChild(teksHSkorPlayer);
hSkorPlayer.style.textAlign = 'center';
// untuk menyisipkan element h3 skor player ke bawah element h3 skor komputer
document.body.insertBefore(hSkorPlayer, hSkorComp.nextSibling);

// untuk membuat aksi ketika player meng-klik pilihan element gambar
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (e) {
  e.addEventListener('click', function () {
    // untuk menambahkan pilihan element gambar dari komputer
    const pilihanComp = getPilihanComp();
    // untuk menambahkan pilihan element gambar dari player
    const pilihanPlayer = e.className;
    // untuk membandingkan pilihan element gambar dari komputer dan player
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    // untuk menambahkan acak pilihan element gambar dari komputer
    acakGambar();

    // untuk membuat waktu tunggu pilihan element gambar dari komputer, akan ditampilkan setelah acak gambar selama interval waktu 1000 = 1 detik
    setTimeout(function () {
      // untuk mengubah pilihan element gambar dari komputer
      const imgComp = document.querySelector('.img-computer');
      imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');

      // untuk menampilkan hasil perbandingan pilihan element gambar dari komputer dan player, berupa element teks menang atau kalah
      const info = document.querySelector('.info');
      info.innerHTML = hasil;

      // untuk membuat kondisi hasil perbandingan pilihan element gambar dari komputer dan player
      if (hasil == 'KALAH') {
        skorComp++;
      } else if (hasil == 'MENANG') {
        skorPlayer++;
      }
      // untuk menambahkan angka skor ke element h3 skor dari komputer dan player
      hSkorComp.innerHTML = 'Komputer : ' + skorComp;
      hSkorPlayer.innerHTML = 'Player : ' + skorPlayer;
    }, 1000);
  });
});