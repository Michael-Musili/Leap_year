function check_leapyear(){
    var leapyear = document.getElementById("year").value;

    if((leapyear % 4 ==0 && (leapyear % 100 !=0) || (leapyear % 400 == 0))){
        alert(leapyear + " is a leap year");

    }else {
        alert(leapyear + " is Not a leap year");
    }
}