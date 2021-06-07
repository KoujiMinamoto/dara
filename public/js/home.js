
function add_job() {
  
  var add_job= document.getElementById('Job');
  var nodeFather = add_job.parentNode;
      var node_clone = add_job.cloneNode();
      content = add_job.innerHTML;
     node_clone.removeAttribute('id');
     node_clone.innerHTML = content;
    nodeFather.appendChild(node_clone);
    console.log("Hello world!");
    // getjobs();
}

function getjobs(){
    // alert("CSS code: ");
    var job= document.getElementById('Job');
    $.ajax({
        url: './dashboard/getallJobs',
        type: "GET",
        dataType: "JSON",
        success: function (response) {
            var info = JSON.stringify(response);
            var data = eval('(' + info + ')');
            console.log(response.length);
            // $.each(data, function(index, item) {
            //     // console.log(item.index);
            //     $('#Job.form-control').append('<option value="' + item.index + '">' + item.key + '</option>');
            //     });
            for(i = 0; i < response.length; i++){
                $('#Job.form-control').append('<option value="' + response[i].JOBID+ '">' + response[i].JOBID + '</option>');
            }
           
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Error '+xhr.status+' | '+thrownError);
        },
    });
}

function getEmployeebySimpro(){
    // alert("CSS code: ");
    var job= document.getElementById('Job');
    for(i = 1; i < 4; i++){
        $.ajax({
            url: "https://daraswitchboards.simprosuite.com/api/v1.0/companies/0/employees/?columns=Name&pageSize=250",
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
                    $('#Name.form-control').append('<option value="' + response[i].Name+ '">' + response[i].Name + '</option>');
                }
            
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('Error '+xhr.status+' | '+thrownError);
            },
        });
    }
}
function getjobsbySimpro(){
    // alert("CSS code: ");
    var job= document.getElementById('Job');
    for(i = 1; i < 4; i++){
        $.ajax({
            url: "https://daraswitchboards.simprosuite.com/api/v1.0/companies/0/jobs/?columns=ID&pageSize=250&page="+i,
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
                    $('#Job.form_Job').append('<option value="' + response[i].ID+ '">' + response[i].ID + '</option>');
                }
            
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert('Error '+xhr.status+' | '+thrownError);
            },
        });
    }
}

function getcost(){
    // $(this).parentNode.costcentre.append('<option value="' + response[i].CostCenterID+ '">' + response[i].CostCenterID + '</option>');
    var options=$("#Job option:selected"); 
    var obj = Element;
    var abc = document.getElementById("Job");
    var index = abc.selectedIndex; // 选中索引

    // var text = abc.options[index].text; // 选中文本
    var job = options.val();
    // var value = abc.options[index].value; // 选中值
    // console.log(options.val());
    // $('#costcentre.form-control').append('<option value="' + 0 + '">' + "response[i].CostCenterID" + '</option>');
    $.ajax({
        url: './dashboard/getCostCentre/'+job,
        type: "GET",
        dataType: "JSON",
        success: function (response) {
            var info = JSON.stringify(response);
            var data = eval('(' + info + ')');
            for(i = 0; i < response.length; i++){
                $('#costcentre.form_Costcentre').append('<option value="' + response[i].CostCenterID+ '">' + response[i].CostCenterID + '</option>');
            }
           
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Error '+xhr.status+' | '+thrownError);
        },
    });
}

function getcostBySimpro(){
    // $(this).parentNode.costcentre.append('<option value="' + response[i].CostCenterID+ '">' + response[i].CostCenterID + '</option>');
    var options=$("#Job option:selected"); 
    var obj = Element;
    var abc = document.getElementById("Job");
    var index = abc.selectedIndex; // 选中索引

    // var text = abc.options[index].text; // 选中文本
    var job = options.val();
    // var value = abc.options[index].value; // 选中值
    // console.log(options.val());
    // $('#costcentre.form-control').append('<option value="' + 0 + '">' + "response[i].CostCenterID" + '</option>');
    $.ajax({
        url: "https://daraswitchboards.simprosuite.com/api/v1.0/companies/0/jobs/"+job+"/sections/?columns=ID",
        type: "GET",
        dataType: "JSON",
        headers: {
            "Authorization": "Bearer 36c519f7b6e3aa89722e954bb7057592992fc092"
        },
        success: function (response) {
            var info = JSON.stringify(response);
            var data = eval('(' + info + ')');
            for(i = 0; i < response.length; i++){
                $.ajax({
                    url: "https://daraswitchboards.simprosuite.com/api/v1.0/companies/0/jobs/"+job+"/sections/"+response[i].ID+"/costCenters/?columns=ID",
                    type: "GET",
                    dataType: "JSON",
                    headers: {
                        "Authorization": "Bearer 36c519f7b6e3aa89722e954bb7057592992fc092"
                    },
                    success: function (response1) {
                        var info = JSON.stringify(response1);
                        var data = eval('(' + info + ')');
                        for(i = 0; i < response1.length; i++){
                            $('#costcentre.form_Costcentre').append('<option value="' + response1[i].ID+ '">' + response1[i].ID + '</option>');
                        }
                       
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert('Error '+xhr.status+' | '+thrownError);
                    },
                });
                // $('#costcentre.form-control').append('<option value="' + response[i].CostCenterID+ '">' + response[i].CostCenterID + '</option>');
            }
           
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Error '+xhr.status+' | '+thrownError);
        },
    });
}

function makeFrom() {
    let jobs = document.getElementsByClassName('form_Job');
    let costs = document.getElementsByClassName('form_Costcentre');
    let Name = $("#Name option:selected").text()
    var jobslist = [];
    var costlist = [];
    for(i = 0; i < jobs.length; i++){
        jobslist.push(jobs[i].value);
        costlist.push(costs[i].value);

    }
    window.localStorage.jobs = JSON.stringify(jobslist);
    window.localStorage.costs = JSON.stringify(costlist);
    window.localStorage.name =  Name;
    console.log(Name);
    window.open("form",target="_self");
}

function initPage() {
    // getjobs();
}

window.onload=function(){
    //getjobs();
    getEmployeebySimpro();
    getjobsbySimpro();
    
}