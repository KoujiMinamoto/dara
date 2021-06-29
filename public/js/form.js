function timer1(){
    
    var starttime = window.localStorage.reststart;
    var start = Date.parse(starttime);
    var now = new  Date();
    var diffMs = (now - start);
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    var diffs = Math.round((((diffMs % 86400000) % 3600000) %60000)/1000); 
    document.getElementById('Resttime').innerHTML=diffHrs+' hrs '+diffMins+" mins "+diffs+" s";
}

function startTimer()//开始
{
    clock=setInterval(timer,1000);
}
function hold(){
    getHoldingTime();
    setholdingstatus();
    document.getElementById("hd").style.display = "block";
    var datetime = new Date();
    var Stringtime  = datetime.toString();
    window.localStorage.reststart = Stringtime;
    clock=setInterval(timer1,1000);
}
//when onload to check if in holdingstatus
function holdingstatus(){
    var id = window.localStorage.id;
    $.ajax({
        url: './api/getHoldingTime/'+id,
        type: "get",
        dataType: "json",
        success: function (response) { 
            var status = response[0].time;
            if(status.length<10){

            }else{
                getHoldingTime();
                document.getElementById("hd").style.display = "block";
                window.localStorage.reststart = status;
                clock=setInterval(timer1,1000);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Error '+xhr.status+' | '+thrownError);
            
        },
    });
}
//when press holding button and set to holding status
function setholdingstatus(){
    var id = window.localStorage.id;
    var  now = new Date();
    var time  = now.toString();
    $.ajax({
        url: './api/setHoldingTime/'+id+'/'+time,
        type: "get",
        dataType: "json",
        success: function (response) { 
            console.log("setholding succeess");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            
            
        },
    });

}
//when press stop button and set to holding status
function cancelholdingstatus(){
    var id = window.localStorage.id;
    var time  = "noholding";
    $.ajax({
        url: './api/setHoldingTime/'+id+'/'+time,
        type: "get",
        dataType: "json",
        success: function (response) { 
            console.log("cancelholding succeess");
        },
        error: function (xhr, ajaxOptions, thrownError) {
            
            
        },
    });

}

function stop(){
    
    var holdingtimebefore = window.localStorage.holdingtime;
    var inhdtimebefore = parseInt(holdingtimebefore);
    var starttime = window.localStorage.reststart;
    var id = window.localStorage.id;
    var start = Date.parse(starttime);
    var now = new  Date();
    var diffMs = (now - start);
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); 
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); 
    var totalrest = diffHrs*60+diffMins;
    var holdingtime = totalrest+inhdtimebefore;
    window.localStorage.totalrest= holdingtime;
    cancelholdingstatus();
    //update to database
    $.ajax({
        url: './api/updateMin/'+id+'/'+holdingtime,
        type: "get",
        dataType: "json",
        success: function (response1) { 
            console.log(holdingtime);
            document.getElementById("hd").style.display = "none";
            document.getElementById('totalrest').innerHTML="You have rest "+holdingtime+" mins ";
            
            

        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Error '+xhr.status+' | '+thrownError);
            document.getElementById("hd").style.display = "none";
            document.getElementById('totalrest').innerHTML="You have rest "+holdingtime+" mins ";
        },
    });

    

}

function getHoldingTime(){
    var id = window.localStorage.id;
    $.ajax({
        url: './api/getMin/'+id,
        type: "get",
        dataType: "json",
        success: function (response1) {
            
            console.log(response1[0]);
            var time = response1[0].mins
            console.log(time);
            window.localStorage.holdingtime = time;
            
            

        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Error '+xhr.status+' | '+thrownError);
            window.localStorage.holdingtime = 0;
            
        },
    });

}
function cancel(){
    
    var id = window.localStorage.id;
    var confirmText = "Are you sure you want to delete this object?";
    if(confirm(confirmText)) {
        $.ajax({
            url: './api/deleteAll/'+id,
            type: "get",
            dataType: "json",
            success: function (response1) {
                

                document.getElementById("bg").style.display = "none";
                
                localStorage.clear();
                window.open("login",target="_self");

            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('Error '+xhr.status+' | '+thrownError);
                document.getElementById("bg").style.display = "none";
            },
        });

    }
}
function logout(){
    window.open("login",target="_self");
}
function submit(){
    document.getElementById("bg").style.display = "block";
    var totalrest = window.localStorage.totalrest;
    var totalholdingtime = parseInt(totalrest);
    var datetime = new Date();
    var id = window.localStorage.id;
    var jobs = JSON.parse(window.localStorage.jobs);
    var costs = JSON.parse(window.localStorage.costs);
    var section = JSON.parse(window.localStorage.section);
    var isostarttime = window.localStorage.isostarttime;
    var starttime = window.localStorage.starttime;
    var today = window.localStorage.date;
    var isoendtime = datetime.toISOString();
    var endtime = datetime.toISOString();
    var Stringtime =window.localStorage.startStringtime ;

    
    
    start = new Date(Stringtime);
    var diffmins = datetime.getMinutes() - start.getMinutes()-totalholdingtime;
    var diffhours = datetime.getHours() - start.getHours();
    var totalmins = diffhours*60 + diffmins;
    var sspiltmins = diffmins/costs.length;
    if(sspiltmins<=15){
        spiltmins = 15;
    }else {
        var ss = sspiltmins%15;
        if(ss>10){
            spiltmins = parseInt(sspiltmins/15)*15+15;
        }else{
            spiltmins = parseInt(sspiltmins/15)*15;
        }
    }
    var confirmText = "Are you sure you want to Submit?";
    if(confirm(confirmText)) {
    for(i = 0; i < costs.length; i++){
        JobID= jobs[i];
        StaffID = parseInt(id);
        SectionID = section[i];
        CostcentreID= costs[i];
        var start_time = new Date(Stringtime);
        var end_time = new Date(Stringtime);
        var realstart_time = new Date(Stringtime);
        var realend_time = new Date(Stringtime);
        start_time.setMinutes( start.getMinutes() + spiltmins*i );
        end_time.setMinutes( start.getMinutes() + spiltmins*(i+1) );
        realstart_time.setMinutes( start.getMinutes() + sspiltmins*i );
        realend_time.setMinutes( start.getMinutes() + sspiltmins*(i+1) );
        var realfinalstart = realstart_time.toTimeString().slice(0, 5);
        var realfinalend = realend_time.toTimeString().slice(0, 5);
        var finalstart = start_time.toTimeString().slice(0, 5);
        var finalend = end_time.toTimeString().slice(0, 5);
        if(parseInt(start_time.toTimeString().slice(3, 5))<15){
            var min  = "00";
            
        }else if(parseInt(start_time.toTimeString().slice(3, 5))<25&&parseInt(start_time.toTimeString().slice(3, 5))>=15){
            var min  = 15;
        }else if(parseInt(start_time.toTimeString().slice(3, 5))<40&&parseInt(start_time.toTimeString().slice(3, 5))>=30){
            var min  = 30;
        }else {
            var min  = 45;
        }

        if(parseInt(end_time.toTimeString().slice(3, 5))<15){
            var emin  = "00";
        }else if(parseInt(end_time.toTimeString().slice(3, 5))<25&&parseInt(end_time.toTimeString().slice(3, 5))>=15){
            var emin  = 15;
        }else if(parseInt(end_time.toTimeString().slice(3, 5))<40&&parseInt(end_time.toTimeString().slice(3, 5))>=30){
            var emin  = 30;
        }else{
            var emin  = 45;
        }
        finalstart = start_time.toTimeString().slice(0, 3)+min;
        finalend = end_time.toTimeString().slice(0, 3)+emin;

            
        console.log(StaffID);

        $.ajax({
            url: "https://uat-daraswitchboards.simprosuite.com/api/v1.0/companies/0/jobs/"+JobID+"/sections/"+SectionID+"/costCenters/"+CostcentreID+"/schedules/",
            type: "POST",
            dataType: "JSON",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 36c519f7b6e3aa89722e954bb7057592992fc092"
            },
            data: JSON.stringify({
                "Notes": "The process start at: "+realfinalstart+"    The process end at:"+realfinalend+"  IT took total mins:  "+sspiltmins,
                "IsLocked": true,
                "Staff": StaffID,
                "Date": today,
                "Blocks": [
                  {
                    "StartTime": finalstart,
                    "EndTime": finalend,
                    "ScheduleRate": 7
                  }
                ]
            }),
            success: function (response) {
                
                console.log(response);


                $.ajax({
                    url: './api/deleteAll/'+id,
                    type: "get",
                    dataType: "json",
                    success: function (response1) {
                        

                        document.getElementById("bg").style.display = "none";
                        
                        localStorage.clear();
                        window.open("login",target="_self");
           
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert('Error '+xhr.status+' | '+thrownError);
                        document.getElementById("bg").style.display = "none";
                    },
                });



            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('A schedule for this job on this date already exists. '+xhr.status+' | '+thrownError);
                document.getElementById("bg").style.display = "none";
            },
        });
        

    }
}
}