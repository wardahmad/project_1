function player(){
    if (noWinOrLose === 36){
        alert("Try Again, It is tie")
        $(".phedar").text("Player One : Lord Voldemort").css("color","#D9AC2A");
        //startAgin()
    }
    if (a == 0 ){
        $(".phedar").text("Player One : Lord Voldemort").css("color","#D9AC2A");
    }else if (a == 1){
        $(".phedar").text("Player Two : Albus Dumbledore").css("color","#D50B53");
    }
}

var firstC = $(".firstC");
var secondC = $(".secondC");
var thirdC = $(".thirdC");
var fourC = $(".fourC");
var fiveC = $(".fiveC");
var sixC = $(".sixC");

var arr = [firstC,secondC,thirdC,fourC,fiveC,sixC];


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
    
    $(".firstCol").click(function(){
        
            if (a == 0){
                if (counterOne <= 6){
                $("#box"+counterOne).addClass("yellow");
                counterOne++;
                noWinOrLose++;
                a = 1;
                }

            }else if (a == 1){
                if (counterOne <= 6){
                $("#box"+counterOne).addClass("pink");
                counterOne++;
                noWinOrLose++;
                a = 0;
                }
            }
    });

    $(".secondCol").click(function(){
        if (a == 0){
            if (counterTow <= 12){
            $("#box"+counterTow).addClass("yellow");
            counterTow++;
            noWinOrLose++;
            a = 1;}
        } else if (a == 1){
            if (counterTow <= 12){
            $("#box"+counterTow).addClass("pink");
            counterTow++;
            noWinOrLose++;
            a = 0;
            }
        }
    });

    $(".thirdCol").click(function(){
        if (a == 0){
            if (counterThree <= 18){
            $("#box"+counterThree).addClass("yellow");
            counterThree++;
            noWinOrLose++;
            a = 1;
            }
        }else if (a == 1){
            if (counterThree <= 18){
            $("#box"+counterThree).addClass("pink");
            counterThree++;
            noWinOrLose++;
            a = 0;
            }
        }
    });

    $(".fourCol").click(function(){
        if (a == 0){
            if (counterFour <= 24){
            $("#box"+counterFour).addClass("yellow");
            counterFour++;
            noWinOrLose++;
            a = 1;
            }
        }else if (a == 1){
            if (counterFour <= 24){
            $("#box"+counterFour).addClass("pink");
            counterFour++;
            noWinOrLose++;
            a = 0;
            }
        }
    });
    $(".fiveCol").click(function(){
        if (a == 0){
            if (counterFive <= 30){
            $("#box"+counterFive).addClass("yellow");
            counterFive++;
            noWinOrLose++;
            a = 1;
            }
        }else if (a == 1){
            if (counterFive <= 30){
            $("#box"+counterFive).addClass("pink");
            counterFive++;
            noWinOrLose++;
            a = 0;
            }
        }
    });

    $(".sixCol").click(function(){
        if (a == 0){
            if (counterSix <= 36){
            $("#box"+counterSix).addClass("yellow");
            counterSix++;
            noWinOrLose++;
            a = 1;
            }
        }else if (a == 1){
            if (counterSix <= 36){
            $("#box"+counterSix).addClass("pink");
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
                    if (($(arr[i][j]).hasClass("yellow")) && ($(arr[i][j+1]).hasClass("yellow")) &&
                    ($(arr[i][j+2]).hasClass("yellow")) && ($(arr[i][j+3]).hasClass("yellow"))){                     
                        resultFun("Lord Voldemort won :(", ".resultP1");
                        
                    }

                    if (($(arr[i][j]).hasClass("pink")) && ($(arr[i][j+1]).hasClass("pink")) &&
                    ($(arr[i][j+2]).hasClass("pink")) && ($(arr[i][j+3]).hasClass("pink"))){                       
                        resultFun("Albus Dumbledore won :)", ".resultP2");
                    }
                    
                    //Rows
                    if(($(arr[i][j]).hasClass("yellow")) && ($(arr[i+1][j]).hasClass("yellow")) &&
                        ($(arr[i+2][j]).hasClass("yellow")) && ($(arr[i+3][j]).hasClass("yellow"))){
                        resultFun("Lord Voldemort won :(", ".resultP1");

                    }
                    if(($(arr[i][j]).hasClass("pink")) && ($(arr[i+1][j]).hasClass("pink")) &&
                    ($(arr[i+2][j]).hasClass("pink")) && ($(arr[i+3][j]).hasClass("pink"))){
                        resultFun("Albus Dumbledore won :)", ".resultP2");}
                    
                    //from left to right(diagonal)
                    if (($(arr[i][j]).hasClass("yellow")) && ($(arr[i+1][j+1]).hasClass("yellow")) &&
                    ($(arr[i+2][j+2]).hasClass("yellow")) && ($(arr[i+3][j+3]).hasClass("yellow"))){
                        resultFun("Lord Voldemort won :(", ".resultP1");

                    }
                    if (($(arr[i][j]).hasClass("pink")) && ($(arr[i+1][j+1]).hasClass("pink")) &&
                    ($(arr[i+2][j+2]).hasClass("pink")) && ($(arr[i+3][j+3]).hasClass("pink"))){
                        resultFun("Albus Dumbledore won :)", ".resultP2");
                    }

                    //from right to left(diagonal)
                    if (($(arr[i][j]).hasClass("yellow")) && ($(arr[i+1][j-1]).hasClass("yellow")) &&
                    ($(arr[i+2][j-2]).hasClass("yellow")) && ($(arr[i+3][j-3]).hasClass("yellow"))){
                        resultFun("Lord Voldemort won :(", ".resultP1");
                    }
                    if (($(arr[i][j]).hasClass("pink")) && ($(arr[i+1][j-1]).hasClass("pink")) && 
                    ($(arr[i+2][j-2]).hasClass("pink")) && ($(arr[i+3][j-3]).hasClass("pink"))){
                        resultFun("Albus Dumbledore won :)", ".resultP2");
                    }
                }
            }           
    });

    //////////////////////////////////////////////////////////
    /*$(".startAgin").click(function(){
        a = 0;
        counterOne = 1;
        counterTow = 7;
        counterThree = 13;
        counterFour = 19;
        counterFive = 25;
        counterSix = 31;
        noWinOrLose = 0;
        $(".phedar").text("Player One : Lord Voldemort").css("color","#D9AC2A");
        $(".winnerp").text("");
        $(".firstR").removeClass("pink");
        $(".firstR").removeClass("yellow");
        $(".secondR").removeClass("pink");
        $(".secondR").removeClass("yellow");
        $(".thirdR").removeClass("pink");
        $(".thirdR").removeClass("yellow");
        $(".fourR").removeClass("pink");
        $(".fourR").removeClass("yellow");
        $(".fiveR").removeClass("pink");
        $(".fiveR").removeClass("yellow");
        $(".sixR").removeClass("pink");
        $(".sixR").removeClass("yellow");
    });*/
});

function resultFun(txt,pClass){
    if (a == 1){
        if (resultOne == 0){
            resultOne = 1;
            $(pClass).text(resultOne);
            $(".firstCol , .secondCol , .thirdCol , .fourCol , .fiveCol , .sixCol").off("click");

        } /*else if (resultOne >= 1){
            $(pClass).text(resultOne);
            $(".firstCol , .secondCol , .thirdCol , .fourCol , .fiveCol , .sixCol").off("click");
        }*/
        $(".winnerp").text(txt).css("color","#D9AC2A");

    }if (a == 0){
        if (resultTwo == 0){
            resultTwo = 1;
            $(pClass).text(resultTwo);
            $(".firstCol , .secondCol , .thirdCol , .fourCol , .fiveCol , .sixCol").off("click");

        } /*else if (resultTwo >= 1){
            resultTwo++;
            $(pClass).text(resultTwo);
            $(".firstCol , .secondCol , .thirdCol , .fourCol , .fiveCol , .sixCol").off("click");
        }*/
        $(".winnerp").text(txt).css("color","#D50B53");
    }
}