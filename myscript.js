function player(){
    if (noWinOrLose === 36){
        alert("Try Again, It is tie")
        $(".phedar").text("Player One : Lord Voldemort").css("color","#D9AC2A");
        startAgin()
    }
    if (a == 0 ){
        $(".phedar").text("Player One : Lord Voldemort").css("color","#D9AC2A");
    }else if (a == 1){
        $(".phedar").text("Player Two : Albus Dumbledore").css("color","#D50B53");
    }
}

var firstR = $(".firstR");
var secondR = $(".secondR");
var thirdR = $(".thirdR");
var fourR = $(".fourR");
var fiveR = $(".fiveR");
var sixR = $(".sixR");

var arr = [firstR,secondR,thirdR,fourR,fiveR,sixR];


var a = 0;
var counterOne = 1;
var counterTow = 7;
var counterThree = 13;
var counterFour = 19;
var counterFive = 25;
var counterSix = 31;

var noWinOrLose = 0;
var resultOne = 0;
var resultTwo = 0;

$(document).ready(function(){
    $(".firstRow").click(function(){
        
            if (a == 0){
                if (counterOne <= 6){
                $("#box"+counterOne).addClass("green");
                counterOne++;
                noWinOrLose++;
                a = 1;
                }

            }else if (a == 1){
                if (counterOne <= 6){
                $("#box"+counterOne).addClass("red");
                counterOne++;
                noWinOrLose++;
                a = 0;
                }
            }
    });

    $(".secondRow").click(function(){
        if (a == 0){
            if (counterTow <= 12){
            $("#box"+counterTow).addClass("green");
            counterTow++;
            noWinOrLose++;
            a = 1;}
        } else if (a == 1){
            if (counterTow <= 12){
            $("#box"+counterTow).addClass("red");
            counterTow++;
            noWinOrLose++;
            a = 0;
            }
        }
    });

    $(".thirdRow").click(function(){
        if (a == 0){
            if (counterThree <= 18){
            $("#box"+counterThree).addClass("green");
            counterThree++;
            noWinOrLose++;
            a = 1;
            }
        }else if (a == 1){
            if (counterThree <= 18){
            $("#box"+counterThree).addClass("red");
            counterThree++;
            noWinOrLose++;
            a = 0;
            }
        }
    });

    $(".fourRow").click(function(){
        if (a == 0){
            if (counterFour <= 24){
            $("#box"+counterFour).addClass("green");
            counterFour++;
            noWinOrLose++;
            a = 1;
            }
        }else if (a == 1){
            if (counterFour <= 24){
            $("#box"+counterFour).addClass("red");
            counterFour++;
            noWinOrLose++;
            a = 0;
            }
        }
    });
    $(".fiveRow").click(function(){
        if (a == 0){
            if (counterFive <= 30){
            $("#box"+counterFive).addClass("green");
            counterFive++;
            noWinOrLose++;
            a = 1;
            }
        }else if (a == 1){
            if (counterFive <= 30){
            $("#box"+counterFive).addClass("red");
            counterFive++;
            noWinOrLose++;
            a = 0;
            }
        }
    });

    $(".sixRow").click(function(){
        if (a == 0){
            if (counterSix <= 36){
            $("#box"+counterSix).addClass("green");
            counterSix++;
            noWinOrLose++;
            a = 1;
            }
        }else if (a == 1){
            if (counterSix <= 36){
            $("#box"+counterSix).addClass("red");
            counterSix++;
            noWinOrLose++;
            a = 0;
            }
        }
    });

    ////////////////////////////////
    $("#gameBord").click(function(){
        player();        
            for (var i = 0; i < arr.length; i++){
                for (var j = 0; j < arr[i].length; j++){

                    //columns
                    if (($(arr[i][j]).hasClass("green")) && ($(arr[i][j+1]).hasClass("green")) &&
                    ($(arr[i][j+2]).hasClass("green")) && ($(arr[i][j+3]).hasClass("green"))){
                        resultFun("Lord Voldemort won", ".resultP1");

                    }
                    if (($(arr[i][j]).hasClass("red")) && ($(arr[i][j+1]).hasClass("red")) &&
                    ($(arr[i][j+2]).hasClass("red")) && ($(arr[i][j+3]).hasClass("red"))){
                        resultFun("Albus Dumbledore won :)", ".resultP2");
                    }
                    
                    //Rows
                    
                    if(($(arr[i][j]).hasClass("green")) && ($(arr[i+1][j]).hasClass("green")) &&
                        ($(arr[i+2][j]).hasClass("green")) && ($(arr[i+3][j]).hasClass("green"))){
                        resultFun("Lord Voldemort won", ".resultP1");

                    }
                    if(($(arr[i][j]).hasClass("red")) && ($(arr[i+1][j]).hasClass("red")) &&
                    ($(arr[i+2][j]).hasClass("red")) && ($(arr[i+3][j]).hasClass("red"))){
                        resultFun("Albus Dumbledore won :)", ".resultP2");}
                    
                    //from left to right
                    if (($(arr[i][j]).hasClass("green")) && ($(arr[i+1][j+1]).hasClass("green")) &&
                    ($(arr[i+2][j+2]).hasClass("green")) && ($(arr[i+3][j+3]).hasClass("green"))){
                        resultFun("Lord Voldemort won", ".resultP1");

                    }
                    if (($(arr[i][j]).hasClass("red")) && ($(arr[i+1][j+1]).hasClass("red")) &&
                    ($(arr[i+2][j+2]).hasClass("red")) && ($(arr[i+3][j+3]).hasClass("red"))){
                        resultFun("Albus Dumbledore won :)", ".resultP2");
                    }

                    //from right to left//dosent work
                    if (($(arr[i][j]).hasClass("green")) && ($(arr[i-1][j+1]).hasClass("green")) &&
                    ($(arr[i-2][j+2]).hasClass("green")) && ($(arr[i-3][j+3]).hasClass("green"))){
                        resultFun("Lord Voldemort won", ".resultP1");
                    }

                    if (($(arr[i][j]).hasClass("red")) && ($(arr[i-1][j+1]).hasClass("red")) &&
                    $((arr[i-2][j+2]).hasClass("red")) && ($(arr[i-3][j+3]).hasClass("red"))){
                        resultFun("Albus Dumbledore won :)", ".resultP2");
                    }

                }
            }           
    });
});

function startAgin(){
    a = 0;
    counterOne = 1;
    counterTow = 7;
    counterThree = 13;
    counterFour = 19;
    counterFive = 25;
    counterSix = 31;
    noWinOrLose = 0;
    $(".phedar").text("Player One : Lord Voldemort").css("color","#D9AC2A");

    $(".firstR").removeClass("red");
    $(".firstR").removeClass("green");
    $(".secondR").removeClass("red");
    $(".secondR").removeClass("green");
    $(".thirdR").removeClass("red");
    $(".thirdR").removeClass("green");
    $(".fourR").removeClass("red");
    $(".fourR").removeClass("green");
    $(".fiveR").removeClass("red");
    $(".fiveR").removeClass("green");
    $(".sixR").removeClass("red");
    $(".sixR").removeClass("green");
}

function resultFun(player, pClass){
    alert(player);
    if (a == 0){
        if (resultOne == 0){
            resultOne = 1;
            $(pClass).text(resultOne);
            startAgin();
        } else if (resultOne >= 1){
            resultOne++;
            $(pClass).text(resultOne);
            startAgin();
        }
    }if (a == 1){
        if (resultTwo == 0){
            resultTwo = 1;
            $(pClass).text(resultTwo);
            startAgin();
        } else if (resultTwo >= 1){
            resultTwo++;
            $(pClass).text(resultTwo);
            startAgin();
        }
    }
}