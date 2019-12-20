function player(){
    if (noWinOrLose === 48){
        alert("Try Again, It is tie")
        $(".phedar").text("Player One : Lord Voldemort").css("color","#D9AC2A");
        //startAgin()
    }
    if (a == 0 ){
        $(".phedar").text("Player One : Lord Voldemort").css("color","#D9AC2A");
        $("#playerOne").animate({opacity: 1,speed: "fast"});
        $("#playerTwo").animate({opacity: '0.5',speed: "fast"});

    }else if (a == 1){
        $(".phedar").text("Player Two : Albus Dumbledore").css("color","#D50B53");
        $("#playerOne").animate({opacity: '0.5',speed: "fast"});
        $("#playerTwo").animate({opacity: 1,speed: "fast"});
    }
}

/*function addColor(box,counter,classColor,p,audio){
    $(box+counter).addClass(classColor);
    counter++;
    noWinOrLose++;
    a = p ;
    $(audio).attr({
        'src':'audio/click.mp3',
        'volume':0.4,
        'autoplay':'autoplay'}).appendTo("body");
}*/

var firstC = $(".firstC");
var secondC = $(".secondC");
var thirdC = $(".thirdC");
var fourC = $(".fourC");
var fiveC = $(".fiveC");
var sixC = $(".sixC");
var sevenC = $(".sevenC");
var eightC = $(".eightC");

var arr = [firstC,secondC,thirdC,fourC,fiveC,sixC,sevenC,eightC];

var a = 0;
var counterOne = 1;
var counterTow = 7;
var counterThree = 13;
var counterFour = 19;
var counterFive = 25;
var counterSix = 31;
var counterSeven = 37;
var conterEight = 43;

var noWinOrLose = 0;
var resultOne = 0;
var resultTwo = 0;

$(document).ready(function(){    
    $(".firstCol").click(function(){
            if (a == 0){
                if (counterOne <= 6){
                    //addColor("#box",counterOne,"yellow",1,"<audio></audio>")
                $("#box"+counterOne).addClass("yellow");
                counterOne++;
                noWinOrLose++;
                a = 1;
                $("<audio></audio>").attr({
                    'src':'audio/click.mp3',
                    'volume':0.4,
                    'autoplay':'autoplay'
                }).appendTo("body");
                }

            }else if (a == 1){
                if (counterOne <= 6){
                    //addColor("#box",counterOne,"pink",0,"<audio></audio>")
                $("#box"+counterOne).addClass("pink");
                counterOne++;
                noWinOrLose++;
                a = 0;
                $("<audio></audio>").attr({
                    'src':'audio/click.mp3',
                    'volume':0.4,
                    'autoplay':'autoplay'
                }).appendTo("body");
                }
            }
    });

    $(".secondCol").click(function(){
        if (a == 0){
            if (counterTow <= 12){
            $("#box"+counterTow).addClass("yellow");
            counterTow++;
            noWinOrLose++;
            a = 1;
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            }
        } else if (a == 1){
            if (counterTow <= 12){
            $("#box"+counterTow).addClass("pink");
            counterTow++;
            noWinOrLose++;
            a = 0;
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
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
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            }
        }else if (a == 1){
            if (counterThree <= 18){
            $("#box"+counterThree).addClass("pink");
            counterThree++;
            noWinOrLose++;
            a = 0;
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
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
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            }
        }else if (a == 1){
            if (counterFour <= 24){
            $("#box"+counterFour).addClass("pink");
            counterFour++;
            noWinOrLose++;
            a = 0;
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
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
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            }
        }else if (a == 1){
            if (counterFive <= 30){
            $("#box"+counterFive).addClass("pink");
            counterFive++;
            noWinOrLose++;
            a = 0;
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
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
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            }
        }else if (a == 1){
            if (counterSix <= 36){
            $("#box"+counterSix).addClass("pink");
            counterSix++;
            noWinOrLose++;
            a = 0;
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            }
        }
    });

    $(".sevenCol").click(function(){
        if (a == 0){
            if (counterSeven <= 42){
            $("#box"+counterSeven).addClass("yellow");
            counterSeven++;
            noWinOrLose++;
            a = 1;
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            }
        }else if (a == 1){
            if (counterSeven <= 42){
            $("#box"+counterSeven).addClass("pink");
            counterSeven++;
            noWinOrLose++;
            a = 0;
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            }
        }
    });

    $(".eightCol").click(function(){
        if (a == 0){
            if (conterEight <= 48){
            $("#box"+conterEight).addClass("yellow");
            conterEight++;
            noWinOrLose++;
            a = 1;
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            }
        }else if (a == 1){
            if (conterEight <= 48){
            $("#box"+conterEight).addClass("pink");
            conterEight++;
            noWinOrLose++;
            a = 0;
            $("<audio></audio>").attr({
                'src':'audio/click.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
            }
        }
    });

    $("#gameBord").click(function(){
        player();        
            for (var i = 0; i < arr.length; i++){
                for (var j = 0; j < arr[i].length; j++){
                    //columns
                    if (($(arr[i][j]).hasClass("yellow")) && ($(arr[i][j+1]).hasClass("yellow")) &&
                    ($(arr[i][j+2]).hasClass("yellow")) && ($(arr[i][j+3]).hasClass("yellow"))){                     
                        resultFun("Lord Voldemort won :(", ".resultP1");}
                        
                    if (($(arr[i][j]).hasClass("pink")) && ($(arr[i][j+1]).hasClass("pink")) &&
                    ($(arr[i][j+2]).hasClass("pink")) && ($(arr[i][j+3]).hasClass("pink"))){                       
                        resultFun("Albus Dumbledore won :)", ".resultP2");}
                    
                    if (i > arr.length-4){
                        //Rows
                        if(($(arr[i][j]).hasClass("yellow")) && ($(arr[i-1][j]).hasClass("yellow")) &&
                        ($(arr[i-2][j]).hasClass("yellow")) && ($(arr[i-3][j]).hasClass("yellow"))){
                        resultFun("Lord Voldemort won :(", ".resultP1");}

                        if(($(arr[i][j]).hasClass("pink")) && ($(arr[i-1][j]).hasClass("pink")) &&
                        ($(arr[i-2][j]).hasClass("pink")) && ($(arr[i-3][j]).hasClass("pink"))){
                        resultFun("Albus Dumbledore won :)", ".resultP2");}

                        

                    }if (i <= arr.length-4){
                        //Rows
                        if(($(arr[i][j]).hasClass("yellow")) && ($(arr[i+1][j]).hasClass("yellow")) &&
                        ($(arr[i+2][j]).hasClass("yellow")) && ($(arr[i+3][j]).hasClass("yellow"))){
                        resultFun("Lord Voldemort won :(", ".resultP1");}

                        if(($(arr[i][j]).hasClass("pink")) && ($(arr[i+1][j]).hasClass("pink")) &&
                        ($(arr[i+2][j]).hasClass("pink")) && ($(arr[i+3][j]).hasClass("pink"))){
                        resultFun("Albus Dumbledore won :)", ".resultP2");}

                        //from left to right(diagonal)
                        if (($(arr[i][j]).hasClass("yellow")) && ($(arr[i+1][j+1]).hasClass("yellow")) &&
                        ($(arr[i+2][j+2]).hasClass("yellow")) && ($(arr[i+3][j+3]).hasClass("yellow"))){
                        resultFun("Lord Voldemort won :(", ".resultP1");}

                        if (($(arr[i][j]).hasClass("pink")) && ($(arr[i+1][j+1]).hasClass("pink")) &&
                        ($(arr[i+2][j+2]).hasClass("pink")) && ($(arr[i+3][j+3]).hasClass("pink"))){
                        resultFun("Albus Dumbledore won :)", ".resultP2");}

                        //from right to left(diagonal)
                        if (($(arr[i][j]).hasClass("yellow")) && ($(arr[i+1][j-1]).hasClass("yellow")) &&
                        ($(arr[i+2][j-2]).hasClass("yellow")) && ($(arr[i+3][j-3]).hasClass("yellow"))){
                        resultFun("Lord Voldemort won :(", ".resultP1");}

                        if (($(arr[i][j]).hasClass("pink")) && ($(arr[i+1][j-1]).hasClass("pink")) && 
                        ($(arr[i+2][j-2]).hasClass("pink")) && ($(arr[i+3][j-3]).hasClass("pink"))){
                        resultFun("Albus Dumbledore won :)", ".resultP2");}

                    }
                    
                    

                }
            }           
    });
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
    $("#playerOne").animate({opacity: 1,speed: "fast"});
    $("#playerTwo").animate({opacity: 1,speed: "fast"});
    
    if (a == 1){
        if (resultOne == 0){
            resultOne = 1;
            $(pClass).text(resultOne);
            $(".firstCol , .secondCol , .thirdCol , .fourCol , .fiveCol , .sixCol , .sevenCol , .eightCol").off("click");
            $("<audio></audio>").attr({
                'src':'audio/win.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
        } /*else if (resultOne >= 1){
            $(pClass).text(resultOne);
            $(".firstCol , .secondCol , .thirdCol , .fourCol , .fiveCol , .sixCol").off("click");
        }*/
        $(".winnerp").text(txt).css("color","#D9AC2A");

    }if (a == 0){
        if (resultTwo == 0){
            resultTwo = 1;
            $(pClass).text(resultTwo);
            $(".firstCol , .secondCol , .thirdCol , .fourCol , .fiveCol , .sixCol , .sevenCol , .eightCol").off("click");
            $("<audio></audio>").attr({
                'src':'audio/win.mp3',
                'volume':0.4,
                'autoplay':'autoplay'
            }).appendTo("body");
        } /*else if (resultTwo >= 1){
            resultTwo++;
            $(pClass).text(resultTwo);
            $(".firstCol , .secondCol , .thirdCol , .fourCol , .fiveCol , .sixCol").off("click");
        }*/
        $(".winnerp").text(txt).css("color","#D50B53");
    }
}
