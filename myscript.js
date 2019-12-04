//var firstR = $(".firstR");
//var secondR = $(".secondR");
//var thirdR = $(".thirdR");
//var fourR = $(".fourR");
// Arrays Insid Array
//var arr = [firstR,secondR,thirdR,fourR];

/*var a = 0;
var counter = 1;
var counterTow = 5;
var counterThree = 9;
var counterFour = 13;

var noWinOrLose = 0;
var resultOne = 0;
var resultTwo = 0;*/

/*$(document).ready(function(){
    $(".firstRow").click(function(){
        
            if (a == 0){
                if (counter <= 4){
                $("#box"+counter).addClass("green");
                counter++;
                noWinOrLose++;
                a = 1;
                }

            }else if (a == 1){
                if (counter <= 4){
                $("#box"+counter).addClass("red");
                counter++;
                noWinOrLose++;
                a = 0;
                }
            }
    });

    $(".secondRow").click(function(){
        if (a == 0){
            if (counterTow <= 8){
            $("#box"+counterTow).addClass("green");
            counterTow++;
            noWinOrLose++;
            a = 1;}
        } else if (a == 1){
            if (counterTow <= 8){
            $("#box"+counterTow).addClass("red");
            counterTow++;
            noWinOrLose++;
            a = 0;
            }
        }
    });

    $(".thirdRow").click(function(){
        if (a == 0){
            if (counterThree <= 12){
            $("#box"+counterThree).addClass("green");
            counterThree++;
            noWinOrLose++;
            a = 1;
            }
        }else if (a == 1){
            if (counterThree <= 12){
            $("#box"+counterThree).addClass("red");
            counterThree++;
            noWinOrLose++;
            a = 0;
            }
        }
    });

    $(".fourRow").click(function(){
        if (a == 0){
            if (counterFour <= 16){
            $("#box"+counterFour).addClass("green");
            counterFour++;
            noWinOrLose++;
            a = 1;
            }
        }else if (a == 1){
            if (counterFour <= 16){
            $("#box"+counterFour).addClass("red");
            counterFour++;
            noWinOrLose++;
            a = 0;
            }
        }
    });
});

function startAgin(){
    a = 0;
    counter = 1;
    counterTow = 5;
    counterThree = 9;
    counterFour = 13;
    noWinOrLose = 0;
    $(".firstR").removeClass("red");
    $(".firstR").removeClass("green");
    $(".secondR").removeClass("red");
    $(".secondR").removeClass("green");
    $(".thirdR").removeClass("red");
    $(".thirdR").removeClass("green");
    $(".fourR").removeClass("red");
    $(".fourR").removeClass("green");
}*/

/*function chickColor(box1,box2,box3,box4,color,player, pClass,result){
    //var firstRowCounter = 0;
    //var resultP1 = 0;
    //var resultP2 = 0;
    if ($(box1).hasClass(color) && $(box2).hasClass(color) 
            && $(box3).hasClass(color) && $(box4).hasClass(color)){

            alert("congrats player : "+ player);
                result++;
                $(pClass).text(result);
                startAgin();
    }
}*/


/*function winOrlose(){
    var resultP1 = 0;
    var resultP2 = 0;
    $(document).ready(function(){
        $("#gameBord").click(function(){
            chickColor("#box1","#box2","#box3","#box4","green","One", ".resultP1");
            chickColor("#box1","#box2","#box3","#box4","red","Two", ".resultP2");

            chickColor("#box5","#box6","#box7","#box8","green","One", ".resultP1");
            chickColor("#box5","#box6","#box7","#box8","red","Two", ".resultP2");
            
            chickColor("#box9","#box10","#box11","#box12","green","One", ".resultP1");
            chickColor("#box9","#box10","#box11","#box12","red","Two", ".resultP2");

            chickColor("#box13","#box14","#box15","#box16","green","One", ".resultP1");
            chickColor("#box13","#box14","#box15","#box16","red","Two", ".resultP2");

            chickColor("#box4","#box8","#box12","#box16","green","One", ".resultP1");
            chickColor("#box4","#box8","#box12","#box16","red","Two", ".resultP2");

            chickColor("#box3","#box7","#box11","#box15","green","One", ".resultP1");
            chickColor("#box3","#box7","#box11","#box15","red","Two", ".resultP2");

            chickColor("#box2","#box6","#box10","#box14","green","One", ".resultP1");
            chickColor("#box2","#box6","#box10","#box14","red","Two", ".resultP2");

            chickColor("#box1","#box5","#box9","#box13","green","One", ".resultP1");
            chickColor("#box1","#box5","#box9","#box13","red","Two", ".resultP2");

            chickColor("#box1","#box6","#box11","#box16","green","One", ".resultP1");
            chickColor("#box1","#box6","#box11","#box16","red","Two", ".resultP2");

            chickColor("#box13","#box10","#box7","#box4","green","One", ".resultP1");
            chickColor("#box13","#box10","#box7","#box4","red","Two", ".resultP2");*/
            /*if ($("#box1").hasClass("green") && $("#box2").hasClass("green") 
            && $("#box3").hasClass("green") && $("#box4").hasClass("green")){
                alert("congrats player One");
                resultP1++;
                $(".resultP1").text(resultP1);
                startAgin();
            }else if ($("#box1").hasClass("red") && $("#box2").hasClass("red") 
            && $("#box3").hasClass("red") && $("#box4").hasClass("red")){
                alert("congrats player Tow");
                resultP2++;
                $(".resultP2").text(resultP2);
                startAgin();
            } 
            else if ($("#box5").hasClass("green") && $("#box6").hasClass("green") 
            && $("#box7").hasClass("green") && $("#box8").hasClass("green")){
                alert("congrats player One");
                resultP1++;
                $(".resultP1").text(resultP1);
                startAgin();
            }else if ($("#box5").hasClass("red") && $("#box6").hasClass("red") 
            && $("#box7").hasClass("red") && $("#box8").hasClass("red")){
                alert("congrats player Tow");
                resultP2++;
                $(".resultP2").text(resultP2);
                startAgin();
            }
            else if ($("#box9").hasClass("green") && $("#box10").hasClass("green") 
            && $("#box11").hasClass("green") && $("#box12").hasClass("green")){
                alert("congrats player One");
                resultP1++;
                $(".resultP1").text(resultP1);
                startAgin();
            }else if ($("#box9").hasClass("red") && $("#box10").hasClass("red") 
            && $("#box11").hasClass("red") && $("#box12").hasClass("red")){
                alert("congrats player Tow");
                resultP2++;
                $(".resultP2").text(resultP2);
                startAgin();
            }
            else if ($("#box13").hasClass("green") && $("#box14").hasClass("green") 
            && $("#box15").hasClass("green") && $("#box16").hasClass("green")){
                alert("congrats player One");
                resultP1++;
                $(".resultP1").text(resultP1);
                startAgin();
            }else if ($("#box13").hasClass("red") && $("#box14").hasClass("red") 
            && $("#box15").hasClass("red") && $("#box16").hasClass("red")){
                alert("congrats player Tow");
                resultP2++;
                $(".resultP2").text(resultP2);
                startAgin();
            }

            else if ($("#box1").hasClass("green") && $("#box6").hasClass("green") 
            && $("#box11").hasClass("green") && $("#box16").hasClass("green")){
                alert("congrats player One");
                resultP1++;
                $(".resultP1").text(resultP1);
                startAgin();
            }else if ($("#box1").hasClass("red") && $("#box6").hasClass("red") 
            && $("#box11").hasClass("red") && $("#box16").hasClass("red")){
                alert("congrats player Tow");
                resultP2++;
                $(".resultP2").text(resultP2);
                startAgin();
            }
            else if ($("#box4").hasClass("green") && $("#box7").hasClass("green") 
            && $("#box10").hasClass("green") && $("#box13").hasClass("green")){
                alert("congrats player One");
                resultP1++;
                $(".resultP1").text(resultP1);
                startAgin();
            }else if ($("#box4").hasClass("red") && $("#box7").hasClass("red") 
            && $("#box10").hasClass("red") && $("#box13").hasClass("red")){
                alert("congrats player Tow");
                resultP2++;
                $(".resultP2").text(resultP2);
                startAgin();
            }

            else if ($("#box1").hasClass("green") && $("#box5").hasClass("green") 
            && $("#box9").hasClass("green") && $("#box13").hasClass("green")){
                alert("congrats player One");
                resultP1++;
                $(".resultP1").text(resultP1);
                startAgin();
            }else if ($("#box1").hasClass("red") && $("#box5").hasClass("red") 
            && $("#box9").hasClass("red") && $("#box13").hasClass("red")){
                alert("congrats player Tow");
                resultP2++;
                $(".resultP2").text(resultP2);
                startAgin();
            }
            else if ($("#box2").hasClass("green") && $("#box6").hasClass("green") 
            && $("#box10").hasClass("green") && $("#box14").hasClass("green")){
                alert("congrats player One");
                resultP1++;
                $(".resultP1").text(resultP1);
                startAgin();
            }else if ($("#box2").hasClass("red") && $("#box6").hasClass("red") 
            && $("#box10").hasClass("red") && $("#box14").hasClass("red")){
                alert("congrats player Tow");
                resultP2++;
                $(".resultP2").text(resultP2);
                startAgin();
            }
            else if ($("#box3").hasClass("green") && $("#box7").hasClass("green") 
            && $("#box11").hasClass("green") && $("#box15").hasClass("green")){
                alert("congrats player One");
                resultP1++;
                $(".resultP1").text(resultP1);
                startAgin();
            }else if ($("#box3").hasClass("red") && $("#box7").hasClass("red") 
            && $("#box11").hasClass("red") && $("#box15").hasClass("red")){
                alert("congrats player Tow");
                resultP2++;
                $(".resultP2").text(resultP2);
                startAgin();
            }
            else if ($("#box4").hasClass("green") && $("#box8").hasClass("green") 
            && $("#box12").hasClass("green") && $("#box16").hasClass("green")){
                alert("congrats player One");
                resultP1++;
                $(".resultP1").text(resultP1);
                startAgin();
            }else if ($("#box4").hasClass("red") && $("#box8").hasClass("red") 
            && $("#box12").hasClass("red") && $("#box16").hasClass("red")){
                alert("congrats player Tow");
                resultP2++;
                $(".resultP2").text(resultP2);
                startAgin();
            }*/
            
            /*if (noWinOrLose === 16){
                alert("Tray Agin")
                console.log(noWinOrLose);
                startAgin()
            }            
        });
    });

}
winOrlose();*/

/*function chickColor(box1,box2,box3,box4,color,player, pClass){

    if ($(box1).hasClass(color) && $(box2).hasClass(color) 
            && $(box3).hasClass(color) && $(box4).hasClass(color)){

            alert("congrats player : "+ player);

            if (a == 0){
                if ( resultOne == 0 ){
                    resultOne = 1;
                    $(pClass).text(resultOne);
                    startAgin();
                 } else if (resultOne >= 1){
                    resultOne++;
                    $(pClass).text(resultOne);
                    startAgin();
                 }
            }if (a == 1){
                if ( resultTwo == 0 ){
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
}*/

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
                //arrGreen.push($("#box"+counter));
                //console.log(arrGreen)
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


    ///////////////////////////////////////////////////////////////////////////////////
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
                        resultFun("Lord Voldemort wone", ".resultP1");

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



/*function checkColor(){
     
    $(document).ready(function(){
        $("#gameBord").click(function(){
            player();          

                for (var i = 0; i < arr.length; i++){
                    for (var j = 0; j < arr[i].length; j++){

                        //للاعمده
                        if (($(arr[i][j]).hasClass("green")) && ($(arr[i][j+1]).hasClass("green")) &&
                        ($(arr[i][j+2]).hasClass("green")) && ($(arr[i][j+3]).hasClass("green"))){
                            resultFun("One", ".resultP1");

                        }
                        if (($(arr[i][j]).hasClass("red")) && ($(arr[i][j+1]).hasClass("red")) &&
                        ($(arr[i][j+2]).hasClass("red")) && ($(arr[i][j+3]).hasClass("red"))){
                            resultFun("Two", ".resultP2");
                        }
                        
                        ////problem when i came at the end (i) index: //صفوف
                        
                        if(($(arr[i][j]).hasClass("green")) && ($(arr[i+1][j]).hasClass("green")) &&
                            ($(arr[i+2][j]).hasClass("green")) && ($(arr[i+3][j]).hasClass("green"))){
                            resultFun("One", ".resultP1");

                        }
                        if(($(arr[i][j]).hasClass("red")) && ($(arr[i+1][j]).hasClass("red")) &&
                        ($(arr[i+2][j]).hasClass("red")) && ($(arr[i+3][j]).hasClass("red"))){
                            resultFun("Two", ".resultP2");}
                        
                        //////////////////////////////////////////////////////من الزاوية اليمين لليسار
                        if (($(arr[i][j]).hasClass("green")) && ($(arr[i+1][j+1]).hasClass("green")) &&
                        ($(arr[i+2][j+2]).hasClass("green")) && ($(arr[i+3][j+3]).hasClass("green"))){
                            resultFun("One", ".resultP1");
                            console.log(arr[i][j]);
                        }
                        if (($(arr[i][j]).hasClass("red")) && ($(arr[i+1][j+1]).hasClass("red")) &&
                        ($(arr[i+2][j+2]).hasClass("red")) && ($(arr[i+3][j+3]).hasClass("red"))){
                            resultFun("Two", ".resultP2");
                            console.log(arr[i][j]);
                        }

                        /*if (($(arr[i][j]).hasClass("green")) && ($(arr[i+1][j+1]).hasClass("green")) &&
                        ($(arr[i+2][j+2]).hasClass("green")) && ($(arr[i+3][j+3]).hasClass("green"))){
                            resultFun("One", ".resultP1");
                            console.log(this);
                        }

                        if (($(arr[i][j]).hasClass("red")) && ($(arr[i+1][j+1]).hasClass("red")) &&
                        $((arr[i+2][j+2]).hasClass("red")) && ($(arr[i+3][j+3]).hasClass("red"))){
                            resultFun("Two", ".resultP2");
                        }*/

                        /////////////////////////////////////////////////////

                        /*if (($(arr[i][j]).hasClass("green")) && ($(arr[i+1][j-1]).hasClass("green")) &&
                        ($(arr[i+2][j-2]).hasClass("green")) && ($(arr[i+3][j-3]).hasClass("green"))){
                            resultFun("One", ".resultP1");
                        }

                        if (($(arr[i][j]).hasClass("red")) && ($(arr[i+1][j-1]).hasClass("red")) &&
                        $((arr[i+2][j-2]).hasClass("red")) && ($(arr[i+3][j-3]).hasClass("red"))){
                            resultFun("Two", ".resultP2");
                        }
                    }
                }    
        });
    })
}*/
//checkColor();

function resultFun(player, pClass){
    //$(className).addClass(colorName);
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