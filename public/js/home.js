
function add_job() {
  
  var add_job= document.getElementById('Job_1');
  var nodeFather = add_job.parentNode;
      var node_clone = add_job.cloneNode();
      content = add_job.innerHTML;
     node_clone.removeAttribute('id');
     node_clone.innerHTML = content;
    nodeFather.appendChild(node_clone);
    console.log("Hello world!");
    // getjobs();
}
function add_job_new() {
    var num =  JSON.parse(window.localStorage.NumberOfJobs)+1;
    // var num = window.localStorage.NumberOfJobs + 1;
    if(num<6){
    var job = "Job_"+ num;
    document.getElementById(job).style.display = "block";
    console.log(job);
    window.localStorage.NumberOfJobs = JSON.stringify(num);
    }else{
        alert("You can just add 5 Jobs");
    }

      // getjobs();
}
function delete_job() {
    var num =  JSON.parse(window.localStorage.NumberOfJobs);
    // var num = window.localStorage.NumberOfJobs + 1;
    if(num>1){
    var job = "Job_"+ num;
    document.getElementById(job).style.display = "none";
    console.log(job);
    window.localStorage.NumberOfJobs = JSON.stringify(num-1);
    }else{
        alert("At least you need input 1 job");
    }

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
            url: "https://daraswitchboards.simprosuite.com/api/v1.0/companies/0/employees/?columns=ID,Name&pageSize=250",
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
                    $('#Joblist_1').append('<option value="' + response[i].ID+ '">' + response[i].ID + '</option>');
                    $('#Joblist_2').append('<option value="' + response[i].ID+ '">' + response[i].ID + '</option>');
                    $('#Joblist_3').append('<option value="' + response[i].ID+ '">' + response[i].ID + '</option>');
                    $('#Joblist_4').append('<option value="' + response[i].ID+ '">' + response[i].ID + '</option>');
                    $('#Joblist_5').append('<option value="' + response[i].ID+ '">' + response[i].ID + '</option>');
                    $('#Job').append('<option value="' + response[i].ID+ '">' + response[i].ID + '</option>');
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
    $('#costlist_2').empty();// clear  all

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
                            $('#costlist_2').append('<div class="ui child checkbox"><input type="checkbox" name="' + response1[i].ID+ '"><label>' + response1[i].ID + '</label></div></div>');
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
function getcostBySimproNew(number){
    // $(this).parentNode.costcentre.append('<option value="' + response[i].CostCenterID+ '">' + response[i].CostCenterID + '</option>');
    var options=$("#Joblist_"+number+" option:selected"); 
    $('#costlist_'+number).empty();// clear  all
    

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
                            $('#costlist_'+number).append('<div class="ui child checkbox"><input type="checkbox" name="' + response1[i].ID+ '"><label>' + response1[i].ID + '</label></div></div>');
                            
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
    var num =  JSON.parse(window.localStorage.NumberOfJobs);
    var datetime = new Date();
    var today = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
    var isostarttime  = datetime.toISOString();
    var starttime = datetime.toTimeString();
    var jobslist = [];
    var costlist = [];
    try{
        for(i=1;i<=num;i++){
            let job = document.getElementById('Joblist_'+i);
            let checkboxes = document.getElementById('costlist_'+i);
            var myElement = document.getElementById("costlist_1");
            var checkboxs = checkboxes.getElementsByClassName("ui child checkbox checked");
            var check = checkboxs[0].getElementsByTagName("label");       
            for (var a=0, n=checkboxs.length;a<n;a++) 
            {           
                    jobslist.push(job.value);
                    var check = checkboxs[a].getElementsByTagName("label");
                    costlist.push(check[0].innerText);
        
            }        
        }

        let Name = $("#Name option:selected").text();
        let NameID= document.getElementById('Name');
        var ID = NameID.value;

        window.localStorage.jobs = JSON.stringify(jobslist);
        window.localStorage.costs = JSON.stringify(costlist);
        window.localStorage.name =  Name;
        window.localStorage.id =  ID;
        window.localStorage.isostarttime =  isostarttime;
        window.localStorage.starttime =  starttime;
        window.localStorage.date =  today;
        console.log(ID);
        window.open("form",target="_self");
    }catch(err) {
        alert("Costcenter can not be empty");
    }


    
}

function initPage() {
    // getjobs();
}
function checkbox(){
    $('.list .master.checkbox')
    .checkbox({
        // check all children
        onChecked: function() {
        var
            $childCheckbox  = $(this).closest('.checkbox').siblings('.list').find('.checkbox')
        ;
        $childCheckbox.checkbox('check');
        },
        // uncheck all children
        onUnchecked: function() {
        var
            $childCheckbox  = $(this).closest('.checkbox').siblings('.list').find('.checkbox')
        ;
        $childCheckbox.checkbox('uncheck');
        }
    })
    ;

    $('.list .child.checkbox')
    .checkbox({
        // Fire on load to set parent value
        fireOnInit : true,
        // Change parent state on each child checkbox change
        onChange   : function() {
        var
            $listGroup      = $(this).closest('.list'),
            $parentCheckbox = $listGroup.closest('.item').children('.checkbox'),
            $checkbox       = $listGroup.find('.checkbox'),
            allChecked      = true,
            allUnchecked    = true
        ;
        // check to see if all other siblings are checked or unchecked
        $checkbox.each(function() {
            if( $(this).checkbox('is checked') ) {
            allUnchecked = false;
            }
            else {
            allChecked = false;
            }
        });
        // set parent checkbox state, but dont trigger its onChange callback
        if(allChecked) {
            $parentCheckbox.checkbox('set checked');
        }
        else if(allUnchecked) {
            $parentCheckbox.checkbox('set unchecked');
        }
        else {
            $parentCheckbox.checkbox('set indeterminate');
        }
        }
    })
    ;


}

window.onload=function(){
    //getjobs();
    
    window.localStorage.NumberOfJobs = JSON.stringify(1);;
    checkbox();
    getEmployeebySimpro();
    getjobsbySimpro();
    $('#search-select')
    .dropdown()
    ;
    $('#Name')
    .dropdown()
    ;
    $('#Job')
    .dropdown()
    ;
    $('#Joblist_1')
    .dropdown()
    ;
    $('#Joblist_2')
    .dropdown()
    ;
    $('#Joblist_3')
    .dropdown()
    ;
    $('#Joblist_4')
    .dropdown()
    ;
    $('#Joblist_5')
    .dropdown()
    ;
    
}