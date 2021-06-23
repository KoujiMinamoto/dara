function submit(){
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

    
    TimeStart = starttime.slice(0, 5);
    start = new Date(Stringtime);
    var diffmins = datetime.getMinutes() - start.getMinutes();
    var diffhours = datetime.getHours() - start.getHours();
    var totalmins = diffhours*60 + diffmins;
    var sspiltmins = diffmins/costs.length;
    if(sspiltmins<=15){
        spiltmins = 15;
    }else {
        var ss = sspiltmins%15;
        if(ss>7){
            spiltmins = parseInt(sspiltmins/15)*15+15;
        }else{
            spiltmins = parseInt(sspiltmins/15)*15;
        }
    }
    
    
    for(i = 0; i < costs.length; i++){
        JobID= jobs[i];
        StaffID = parseInt(id);
        SectionID = section[i];
        CostcentreID= costs[i];
        var start_time = new Date(Stringtime);
        var end_time = new Date(Stringtime);
        start_time.setMinutes( start.getMinutes() + spiltmins*i );
        end_time.setMinutes( start.getMinutes() + spiltmins*(i+1) );
        var finalstart = start_time.toTimeString().slice(0, 5);
        var finalend = end_time.toTimeString().slice(0, 5);
        if(parseInt(start_time.toTimeString().slice(3, 5))<15){
            var min  = "00";
        }else if(parseInt(start_time.toTimeString().slice(3, 5))<30&&parseInt(start_time.toTimeString().slice(3, 5))>=15){
            var min  = 15;
        }else if(parseInt(start_time.toTimeString().slice(3, 5))<45&&parseInt(start_time.toTimeString().slice(3, 5))>=30){
            var min  = 30;
        }else{
            var min  = 45;
        }

        if(parseInt(end_time.toTimeString().slice(3, 5))<15){
            var emin  = "00";
        }else if(parseInt(end_time.toTimeString().slice(3, 5))<30&&parseInt(end_time.toTimeString().slice(3, 5))>=15){
            var emin  = 15;
        }else if(parseInt(end_time.toTimeString().slice(3, 5))<45&&parseInt(end_time.toTimeString().slice(3, 5))>=30){
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
                "Notes": "string",
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
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('A schedule for this job on this date already exists. '+xhr.status+' | '+thrownError);
            },
        });
        

    }
}