//BÀI 1
let btnTong = document.getElementById('btnTong');
btnTong.onclick = function(){
    let luongngay = document.getElementById('luongngay').value*1;
    let songaylam = document.getElementById('songaylam').value*1;
    let tongluong = 0;
    tongluong = luongngay*songaylam;
    let resultb1 = document.getElementById('resultb1');
    resultb1.innerHTML = 'Tổng lương: ' + tongluong;
}

// BÀI 2
let btnb2 = document.getElementById('btnb2');
btnb2.onclick = function(){
    let number1 = document.getElementById('number1').value*1;
    let number2 = document.getElementById('number2').value*1;
    let number3 = document.getElementById('number3').value*1;
    let number4 = document.getElementById('number4').value*1;
    let number5 = document.getElementById('number5').value*1;
    let tongb2 = 0;
    tongb2 = number1 + number2 + number3 + number4 + number5;
    let resultb2 = document.getElementById('resultb2');
    resultb2.innerHTML = 'Tổng 5 số là: ' + tongb2;
}

// BÀI 3
let btnb3 = document.getElementById('btnb3');
btnb3.onclick = function(){
    let sotien = document.getElementById('sotien').value*1;
    //Giá USD mặc định 1 USD = 23500
    let usd = 23500;
    let tienquydoi = 0;
    tongtien = sotien*usd;
    let resultb3 = document.getElementById('resultb3');
    resultb3.innerHTML = 'Số tiền quy đổi ra USD: ' + tongtien;
}

//BÀI 4
let btnb4 = document.getElementById('btnb4');
btnb4.onclick = function(){
    let chieudai = document.getElementById('chieudai').value*1;
    let chieurong = document.getElementById('chieurong').value*1;
    let chuvi = 0;
    let dientich = 0;
    chuvi = (chieudai + chieurong)*2;
    dientich = chieudai*chieurong;
    let resultb4 = document.getElementById('resultb4');
    resultb4.innerHTML = 'Chu vi hình chữ nhật: ' + chuvi + '<br>' + 'Diện tích hình chữ nhật: ' + dientich;
}

//BÀI 5
let btnb5 = document.getElementById('btnb5');
btnb5.onclick = function(){
    let so2chuso = document.getElementById('so2chuso').value*1;
    // Tách từng chữ số và tính tổng
    let hangChuc = Math.floor(so2chuso / 10);
    let hangDonVi = so2chuso % 10;
    let tong = hangChuc + hangDonVi;
    let resultb5 = document.getElementById('resultb5');
    resultb5.innerHTML = 'Tổng 2 ký số: ' + tong;
}