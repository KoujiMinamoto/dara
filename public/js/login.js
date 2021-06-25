
function getEmployeebySimpro(){
    // alert("CSS code: ");
    for(i = 1; i < 4; i++){
        $.ajax({
            url: "https://uat-daraswitchboards.simprosuite.com/api/v1.0/companies/0/employees/?columns=ID,Name&pageSize=250",
            type: "GET",
            dataType: "JSON",
            headers: {
                "Authorization": "Bearer 36c519f7b6e3aa89722e954bb7057592992fc092"
            },
            success: function (response) {
                var info = JSON.stringify(response);
                var data = eval('(' + info + ')');
                console.log(response.length);
                // $.each(data, function(index, item) {
                //     // console.log(item.index);
                //     $('#Job.form-control').append('<option value="' + item.index + '">' + item.key + '</option>');
                //     });
                for(i = 0; i < response.length; i++){
                    $('#Name').append('<option value="' + response[i].ID+ '">' + response[i].Name + '</option>');
                }
            
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('Error '+xhr.status+' | '+thrownError);
            },
        });
    }
}

function Gonext(){
    document.getElementById("bg").style.display = "block";
    let NameID= document.getElementById('Name');
    var ID = NameID.value;
    let Name = $("#Name option:selected").text();
    window.localStorage.name =  Name;
    window.localStorage.id =  ID;
    $.ajax({
        url: './api/checkif/'+ID,
        type: "get",
        dataType: "json",
        success: function (response) {
            var info = JSON.stringify(response);
            if(info.length>3){
                //set the user
                $.ajax({
                    url: './api/getAll/'+ID,
                    type: "get",
                    dataType: "json",
                    success: function (response1) {
                        var jobslist = [];
                        var costlist = [];
                        var section = [];
                        
                        console.log(response1.length);
                        for(i=0;i<response1.length;i++){
                            jobslist.push(response1[i].jobid);
                            costlist.push(response1[i].costcenterid);
                            section.push(response1[i].sectionid);

                        }







                        //store the data
                        window.localStorage.startStringtime =  response1[0].starttime;
                        window.localStorage.date = response1[0].date;
                        window.localStorage.jobs = JSON.stringify(jobslist);
                        window.localStorage.costs = JSON.stringify(costlist);
                        window.localStorage.section = JSON.stringify(section);
                        










                        document.getElementById("bg").style.display = "none";
                        window.open("form",target="_self");
           
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert('Error '+xhr.status+' | '+thrownError);
                        document.getElementById("bg").style.display = "none";
                    },
                });





            }
            else{
                console.log(info);
                window.open("home",target="_self");
                document.getElementById("bg").style.display = "none";
           
            }
            
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Error '+xhr.status+' | '+thrownError);
            document.getElementById("bg").style.display = "none";
        },
    });
}

window.onload=function(){
    //getjobs();
    
    window.localStorage.NumberOfJobs = JSON.stringify(1);;

    getEmployeebySimpro();
    $('#search-select')
    .dropdown()
    ;
    $('#Name')
    .dropdown()
    ;


    
}