$(document).ready(function(){
    $.get("http://192.168.1.57/json.htm?type=schedules&filter=device", function(data, status){
        for(i in data.result){
                if(data.result[i].TimerID == 13){
                    $("#time_week").val(data.result[i].Time)
                };
                if(data.result[i].TimerID == 14){
                    $("#time_weekend").val(data.result[i].Time)
                };
        }
      });
    $("#btn_update").click(function(){
        var weekHour = $("#time_week").val().substring(0,2)
        var weekMin = $("#time_week").val().substring(3,5)
        var weekendHour = $("#time_weekend").val().substring(0,2)
        var weekendMin = $("#time_weekend").val().substring(3,5)
        $.get("http://192.168.1.57/json.htm?type=command&param=updatetimer&idx=13&active=true&timertype=2&hour="+weekHour+"&min="+weekMin+"&randomness=false&command=1&days=256", function(data, status){
            if(data.status != "OK"){
                alert("BUG !")
            }
        });
        $.get("http://192.168.1.57/json.htm?type=command&param=updatetimer&idx=14&active=true&timertype=2&hour="+weekendHour+"&min="+weekendMin+"&randomness=true&command=1&days=512", function(data, status){
            if(data.status != "OK"){
                alert("BUG !")
            }
            $("#btn_update").addClass("btn-success")
            $("#btn_update").removeClass("btn-primary")
        });
    }); 
    $("#btn_fume").click(function(){
        $.get("http://192.168.1.57/json.htm?type=command&param=switchlight&idx=21&switchcmd=On", function(data, status){
        if(data.status != "OK"){
            alert("BUG !");
        }
        });
    });
        
    $("#btn_pasfume").click(function(){
        $.get("http://192.168.1.57/json.htm?type=command&param=switchlight&idx=21&switchcmd=Off", function(data, status){
        if(data.status != "OK"){
            alert("BUG !")
        }
        });
    });
    $("#btn_lablight").click(function(){
    $.get("http://192.168.1.57/json.htm?type=command&param=switchlight&idx=16&switchcmd=Toggle", function(data, status){
    if(data.status != "OK"){
        alert("BUG !")
        }
        });
    });
    $("#btn_volet").click(function(){
    $.get("http://192.168.1.57/json.htm?type=command&param=switchlight&idx=24&switchcmd=On", function(data, status){
    if(data.status != "OK"){
        alert("BUG !")
        }
        });
    });
    $("#btn_volet-1").click(function(){
    $.get("http://192.168.1.57/json.htm?type=command&param=switchlight&idx=24&switchcmd=Off", function(data, status){
    if(data.status != "OK"){
        alert("BUG !")
        }
        });
    });

});

//192.168.1.10/json.htm?type=command&param=updatetimer&idx=6&active=true&timertype=2&hour=0&min=20&randomness=true&command=1&days=256