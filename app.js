let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")["0"];
let age = document.getElementById("age");
function calculateAge(){
    let inputDate = userInput.value;
    
    if (inputDate === "") {
        age.innerHTML = "Please enter a valid date.";
        return;
    }
    let birthDate = new Date(userInput.value)
    if (isNaN(birthDate)) {
        age.innerHTML = "Please enter a valid date.";
        return;
    }
    let d1 = birthDate.getDate();
    console.log(d1);
    let m1 = birthDate.getMonth()+1;  // JavaScript months are 0-based so we add 1
    console.log(m1);

    let y1 = birthDate.getFullYear();
console.log(y1)
    let today = new Date();

    let d2 = today.getDate();
    console.log(d2);
    let m2 = today.getMonth()+1;
    console.log(m2);

    let y2 = today.getFullYear();
    console.log(y2);

    let d3, m3, y3
    y3 = y2-y1;
    if(m2>=m1){
        m3 = m2 - m1;
    }else{
    y3--;
    m3 = 12 + m2 - m1;
    }
    if(d2>=d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonths(y1, m1)+ d2- d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
age.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
}
function getDaysInMonths(year, month){
    return new Date(year, month, 0).getDate();
}
