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
    var Stringtime =window.localStorage.startStringtime  ;
    
    TimeStart = starttime.slice(0, 5);
    start = new Date(Stringtime);
    var diffmins = datetime.getMinutes() - start.getMinutes();
    var diffhours = datetime.getHours() - start.getHours();
    var totalmins = diffhours*60 + diffmins;
    var spiltmins = diffmins/costs.length;
    
    
    for(i = 0; i < costs.length; i++){
        JobID= jobs[i];
        StaffID = id[i];
        SectionID = section[i];
        CostcentreID= costs[i];
        var start_time = new Date(Stringtime);
        var end_time = new Date(Stringtime);
        start_time.setMinutes( start.getMinutes() + spiltmins*i );
        end_time.setMinutes( start.getMinutes() + spiltmins*(i+1) );
        var finalstart = start_time.toTimeString().slice(0, 5);
        var finalend = end_time.toTimeString().slice(0, 5);
        console.log(finalstart);

        $.ajax({
            url: "https://uat-daraswitchboards.simprosuite.com/api/v1.0/companies/0/jobs/"+JobID+"/sections/"+SectionID+"/costCenters/"+CostcentreID+"/schedules/",
            type: "POST",
            dataType: "JSON",
            headers: {
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
                alert('Error '+xhr.status+' | '+thrownError);
            },
        });
        

    }
}