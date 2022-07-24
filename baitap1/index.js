
document.getElementById("btnCalc").onclick = function () {
    // input
    var fullName = document.getElementById("fullName");
    var salaryPerYear = document.getElementById("salaryPerYear").value * 1;
    var people = document.getElementById("people").value * 1;

    //   Xử lý
    var numberPeople = people * 16e5;
    var taxMoney = 0;

    if (salaryPerYear <= 6e7) {
        taxMoney = (salaryPerYear - 4e6 - numberPeople) * 0.05;
    } 

    else if (soTR > 6e7 && soTR <= 12e7) {
        taxMoney = (salaryPerYear - 4e6 - numberPeople) * 0.1;
    }

     else if (soTR > 12e7 && soTR <= 21e7) {
        taxMoney = (salaryPerYear - 4e6 - numberPeople) * 0.15;
    }
    
    else if (soTR > 21e7 && soTR <= 384e6) {
        taxMoney = (salaryPerYear - 4e6 - numberPeople) * 0.2;
    }
    
    else if (soTR > 384e6 && soTR <= 624e6) {
        taxMoney = (salaryPerYear - 4e6 - numberPeople) * 0.25;
    }
    
    else if (soTR > 624e6 && soTR <= 96e7) {
        taxMoney = (salaryPerYear - 4e6 - numberPeople) * 0.3;
    }
    
    else if (soTR > 96e7) {
        taxMoney = (salaryPerYear - 4e6 - numberPeople) * 0.35;
    }
  
    // format vnđ
    var format = new Intl.NumberFormat("vn-VN");
    var taxMoneyVnd = format.format(taxMoney) + " vnd";
    // Đầu ra
    document.getElementById("notifiCation").innerHTML = taxMoneyVnd;
  };
  