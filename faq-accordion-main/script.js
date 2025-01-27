document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const button4 = document.getElementById('button4');

    const answer1 = document.getElementById('answer1');
    const answer2 = document.getElementById('answer2');
    const answer3 = document.getElementById('answer3');
    const answer4 = document.getElementById('answer4');

    function showAnswer1() {
        console.log('Showing answer 1');
        answer1.style.display = 'block';
        button1.src = "./assets/images/icon-minus.svg";
    }

    function showAnswer2() {
        console.log('Showing answer 2');
        answer2.style.display = 'block';
        button2.src = "./assets/images/icon-minus.svg";
    }

    function showAnswer3() {
        console.log('Showing answer 3');
        answer3.style.display = 'block';
        button3.src = "./assets/images/icon-minus.svg";
    }

    function showAnswer4() {
        console.log('Showing answer 4');
        answer4.style.display = 'block';
        button4.src = "./assets/images/icon-minus.svg";
    }

    function hideAnswer1() {
        console.log('Hiding answer 1');
        answer1.style.display = 'none';
        button1.src = "./assets/images/icon-plus.svg";
    }

    function hideAnswer2() {
        console.log('Hiding answer 2');
        answer2.style.display = 'none';
        button2.src = "./assets/images/icon-plus.svg";
    }

    function hideAnswer3() {
        console.log('Hiding answer 3');
        answer3.style.display = 'none';
        button3.src = "./assets/images/icon-plus.svg";
    }

    function hideAnswer4() {
        console.log('Hiding answer 4');
        answer4.style.display = 'none';
        button4.src = "./assets/images/icon-plus.svg";
    }

    button1.addEventListener('click', function() { 
        console.log('Button 1 clicked');
        if (button1.src.includes("icon-plus.svg")) {
            showAnswer1();
        } else {
            hideAnswer1();
        }
    });

    button2.addEventListener('click', function() { 
        console.log('Button 2 clicked');
        if (button2.src.includes("icon-plus.svg")) {
            showAnswer2();
        } else {
            hideAnswer2();
        }
    });

    button3.addEventListener('click', function() {
        console.log('Button 3 clicked');
        if (button3.src.includes("icon-plus.svg")) {
            showAnswer3();
        } else {
            hideAnswer3();
        }
    });

    button4.addEventListener('click', function() {
        console.log('Button 4 clicked');
        if (button4.src.includes("icon-plus.svg")) {
            showAnswer4();
        } else {
            hideAnswer4();
        }
    });

    console.log('Script loaded');
});


