function displayMenu() {
        const navMenu = document.getElementById("navMenu");
        const navBars = document.getElementById("navBars");
        const mainNav = document.getElementById("mainNav");

        if (navMenu.style.display === "block") {
                navMenu.style.display = "none";
                mainNav.style.outline = "#04a5e5 solid 2px ";
                navBars.style.outline = "none";
        } else {
                navMenu.style.display = "block";
                mainNav.style.outline = "none";
                navBars.style.outline = "#04a5e5 solid 2px";
        }
}

function ageismInstruct() {
        age = document.getElementById("fname").value;
        randomNum = Math.floor(Math.random() * 100);

        smalRandom = Math.floor(Math.random() * 20);
        smallRandom = Math.floor(Math.random() * 20);
        smalllRandom = Math.floor(Math.random() * 20);


        if(age < 18) {
                document.getElementById("trueFalse").style.display = "block";
                document.getElementById("trueFalse").style.outline = "#40A02B solid 2px ";
                document.getElementById("trueFalse").style.backgroundColor = "#eff5f2";
                document.getElementById("toggle").style.display = "list-item";
                document.getElementById("toggle").innerHTML = "Enter Any Password :)";

                document.getElementById("toggle2").style.display = "none";
                document.getElementById("toggle3").style.display = "none";
                document.getElementById("toggle4").style.display = "none";
        }
        if(age > 18 && age < 25 ) {
                document.getElementById("trueFalse").style.display = "block";
                document.getElementById("trueFalse").style.outline = "#D20F39 solid 2px ";
                document.getElementById("trueFalse").style.backgroundColor = "#f5efef";
                document.getElementById("toggle").style.display = "list-item";
                document.getElementById("toggle").innerHTML = "Passwords require a special symbol!";


                document.getElementById("toggle2").style.display = "none";
                document.getElementById("toggle3").style.display = "none";
                document.getElementById("toggle4").style.display = "none";
        }
        if(age > 25 && age < 40 ) {
                document.getElementById("trueFalse").style.display = "block";
                document.getElementById("trueFalse").style.outline = "#D20F39 solid 2px ";
                document.getElementById("trueFalse").style.backgroundColor = "#f5efef";
                document.getElementById("toggle").style.display = "list-item";
                document.getElementById("toggle").innerHTML = "Passwords require a special symbol!";
                document.getElementById("toggle2").style.display = "list-item";
                document.getElementById("toggle2").innerHTML = "Passwords require a minium of 8 characters!";
                document.getElementById("toggle3").style.display = "list-item";
                document.getElementById("toggle3").innerHTML = "Passwords require a minimum of 3 numbers!";

                document.getElementById("toggle4").style.display = "none";


        }
        if(age > 40 && age < 75 ) {
                document.getElementById("trueFalse").style.display = "block";
                document.getElementById("trueFalse").style.outline = "#D20F39 solid 2px ";
                document.getElementById("trueFalse").style.backgroundColor = "#f5efef";
                document.getElementById("toggle").style.display = "list-item";
                document.getElementById("toggle").innerHTML = "Passwords require a special symbol!";
                document.getElementById("toggle2").style.display = "list-item";
                document.getElementById("toggle2").innerHTML = "Passwords require a minium of 8 characters!";
                document.getElementById("toggle3").style.display = "list-item";
                document.getElementById("toggle3").innerHTML = `Passwords require a maximum of 3 numbers that add up to ${randomNum}!`;
                document.getElementById("toggle4").style.display = "list-item";
                document.getElementById("toggle4").innerHTML = "Passwords require a minimum of 6 unique characters!";



                document.getElementById("info").innerHTML = `Passwords require 3 unique special symbols, a minimum of 8 characters, 3 numbers that add up to ${randomNum}, a capital letter, and at least 6 unique characters in total.`;
        }
        if(age > 75 && age < 100 ) {
                document.getElementById("trueFalse").style.display = "block";
                document.getElementById("trueFalse").style.outline = "#D20F39 solid 2px ";
                document.getElementById("trueFalse").style.backgroundColor = "#f5efef";
                
                document.getElementById("toggle").style.display = "list-item";
                document.getElementById("toggle").innerHTML = "Passwords require a special symbol!";
                document.getElementById("toggle2").style.display = "list-item";
                document.getElementById("toggle2").innerHTML = `Passwords require a minium of ${smalRandom} characters!`;
                document.getElementById("toggle3").style.display = "list-item";
                document.getElementById("toggle3").innerHTML = `Passwords require a maximum of ${smallRandom} numbers that add up to ${randomNum}!`;
                document.getElementById("toggle4").style.display = "list-item";
                document.getElementById("toggle4").innerHTML = `Passwords require a minimum of ${smalllRandom} unique characters!`;
        }
        if(age > 100) {
                document.getElementById("trueFalse").style.display = "block";
                document.getElementById("trueFalse").style.outline = "#D20F39 solid 2px ";
                document.getElementById("trueFalse").style.backgroundColor = "#f5efef";

                smalRandom = smalRandom * Math.floor(Math.random() * 20);
                smallRandom = smallRandom * Math.floor(Math.random() * 20);
                smalllRandom = smalllRandom * Math.floor(Math.random() * 20);
                  
                document.getElementById("toggle").style.display = "list-item";
                document.getElementById("toggle").innerHTML = "Passwords require a special symbol!";
                document.getElementById("toggle2").style.display = "list-item";
                document.getElementById("toggle2").innerHTML = `Passwords require a minium of ${smalRandom} characters!`;
                document.getElementById("toggle3").style.display = "list-item";
                document.getElementById("toggle3").innerHTML = `Passwords require a maximum of ${smallRandom} numbers that add up to ${randomNum}!`;
                document.getElementById("toggle4").style.display = "list-item";
                document.getElementById("toggle4").innerHTML = `Passwords require a minimum of ${smalllRandom} unique characters!`;
      }
}

function ageism() {
        const age = document.getElementById("fname").value;
        const password = document.getElementById("lname").value;
        alert(`Your age is ${age} and your password is ${password}`);
}
