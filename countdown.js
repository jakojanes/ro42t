
/*Kood saadud: https://www.w3schools.com/howto/howto_js_countdown.asp, koodi meie poolt kohandatud*/


var end = new Date('05/03/2023 12:00 AM'); /*Mis kuupäevani countdown on*/
    /*Teen muutujad, et hiljem arvutada sekundeid jne...*/
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date(); /*Praegune kuupäev */
        var distance = end - now; /*Kalkuleerin praeguse ja otsitava kuu vahe*/
        if (distance < 0) { /*Kui kuupäev on möödas, siis kuvab Möödas*/

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Möödas!';

            return;
        }
        /*Kalkuleerin mitu sekundit, minutit, tundi ja päeva on valimisteni*/
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        /*Kuvab arvutatud väärtused HTMLi failis (veebilehel)*/
        document.getElementById('countdown').innerHTML = days + ' päeva ';
        document.getElementById('countdown').innerHTML += hours + ' tundi ';
        document.getElementById('countdown').innerHTML += minutes + ' minutit ';
        document.getElementById('countdown').innerHTML += seconds + ' sekundit valimisteni';
    }

    timer = setInterval(showRemaining, 1000);