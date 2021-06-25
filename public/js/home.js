
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

// function getEmployeebySimpro(){
//     // alert("CSS code: ");
//     var job= document.getElementById('Job');
//     for(i = 1; i < 4; i++){
//         $.ajax({
//             url: "https://uat-daraswitchboards.simprosuite.com/api/v1.0/companies/0/employees/?columns=ID,Name&pageSize=250",
//             type: "GET",
//             dataType: "JSON",
//             headers: {
//                 "Authorization": "Bearer 36c519f7b6e3aa89722e954bb7057592992fc092"
//             },
//             success: function (response) {
//                 var info = JSON.stringify(response);
//                 var data = eval('(' + info + ')');
//                 console.log(response.length);
//                 // $.each(data, function(index, item) {
//                 //     // console.log(item.index);
//                 //     $('#Job.form-control').append('<option value="' + item.index + '">' + item.key + '</option>');
//                 //     });
//                 for(i = 0; i < response.length; i++){
//                     $('#Name').append('<option value="' + response[i].ID+ '">' + response[i].Name + '</option>');
//                 }
            
//             },
//             error: function (xhr, ajaxOptions, thrownError) {
//                 alert('Error '+xhr.status+' | '+thrownError);
//             },
//         });
//     }
// }
function getjobsbySimpro(){
    // alert("CSS code: ");
    var job= document.getElementById('Job');
    for(i = 1; i < 4; i++){
        $.ajax({
            url: "https://uat-daraswitchboards.simprosuite.com/api/v1.0/companies/0/jobs/?columns=ID&pageSize=250&page="+i,
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



function getcostBySimpro(){
    // $(this).parentNode.costcentre.append('<option value="' + response[i].CostCenterID+ '">' + response[i].CostCenterID + '</option>');
    var options=$("#Job option:selected"); 
    var abc = document.getElementById("Job");
    var index = abc.selectedIndex; // 选中索引
    $('#costlist_2').empty();// clear  all

    // var text = abc.options[index].text; // 选中文本
    var job = options.val();
    // var value = abc.options[index].value; // 选中值
    // console.log(options.val());
    // $('#costcentre.form-control').append('<option value="' + 0 + '">' + "response[i].CostCenterID" + '</option>');
    $.ajax({
        url: "https://uat-daraswitchboards.simprosuite.com/api/v1.0/companies/0/jobs/"+job+"/sections/?columns=ID",
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
                    url: "https://uat-daraswitchboards.simprosuite.com/api/v1.0/companies/0/jobs/"+job+"/sections/"+response[i].ID+"/costCenters/?columns=ID",
                    type: "GET",
                    dataType: "JSON",
                    headers: {
                        "Authorization": "Bearer 36c519f7b6e3aa89722e954bb7057592992fc092"
                    },
                    success: function (response1) {
                        var info = JSON.stringify(response1);
                        var data = eval('(' + info + ')');
                        for(i = 0; i < response1.length; i++){
                            $('#costcentre.form_Costcentre').append('<option value="' + response[i].ID+ '">' + response1[i].ID + '</option>');
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
    
    document.getElementById("bg").style.display = "block";
    // var text = abc.options[index].text; // 选中文本
    var job = options.val();

    
    // var value = abc.options[index].value; // 选中值
    // console.log(options.val());
    // $('#costcentre.form-control').append('<option value="' + 0 + '">' + "response[i].CostCenterID" + '</option>');
    $.ajax({
        url: "https://uat-daraswitchboards.simprosuite.com/api/v1.0/companies/0/jobs/"+job+"/sections/?columns=ID",
        type: "GET",
        dataType: "JSON",
        headers: {
            "Authorization": "Bearer 36c519f7b6e3aa89722e954bb7057592992fc092"
        },
        success: function (response) {
            var info = JSON.stringify(response);
            var data = eval('(' + info + ')');
            for(i = 0; i < response.length; i++){
                var sec =  response[i].ID;
                $.ajax({
                    url: "https://uat-daraswitchboards.simprosuite.com/api/v1.0/companies/0/jobs/"+job+"/sections/"+response[i].ID+"/costCenters/?columns=ID",
                    type: "GET",
                    dataType: "JSON",
                    headers: {
                        "Authorization": "Bearer 36c519f7b6e3aa89722e954bb7057592992fc092"
                    },
                    beforeSend : function(){
                        //  设置 进度条到20%慢慢变到50%
                        document.getElementById("bg").style.display = "block";
                     },
                     complete: function(){
                        //  设置 进度条到80%
                     },
                    success: function (response1) {
                        
                        var info = JSON.stringify(response1);
                        var data = eval('(' + info + ')');
                        for(a = 0; a < response1.length; a++){
                            $('#costlist_'+number).append('<div class="ui child checkbox left-text"><input type="checkbox" name="' + sec+ '"><label>' + response1[a].ID + '</label></div></div>');
                            
                        }
                        clickfresh(number);
                        document.getElementById("bg").style.display = "none";
                       
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        document.getElementById("bg").style.display = "none";
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
function isRepeat(arr) {
    var set= {};
    for (var i in arr) {
        if (set[arr[i]]){
            return true; 
        }
        set[arr[i]] = true;
    }
    return false;
}

function clickfresh(number){
    var btnn = document.getElementById("Job_"+number);
    var btnnn  = btnn.getElementsByClassName("ui master checkbox");
    btnnn[0].click();
    



}
function makeFrom() {
    var num =  JSON.parse(window.localStorage.NumberOfJobs);
    var bol =[];
    for(i=1;i<=num;i++){
    bol.push(document.getElementById('Joblist_'+i).value);
    }
    var flagArray = new Array();
    var sourceArray = bol;
    var bolean =true;
    for(i = 0;i<sourceArray.length;i++){
        if(flagArray[sourceArray[i]]){
            bolean= false;
        }
        flagArray[sourceArray[i]] = true;
    }
    

    if (bolean==true){
    
        var datetime = new Date();
        var today = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
        var isostarttime  = datetime.toISOString();
        var Stringtime  = datetime.toString();
        var starttime = datetime.toTimeString();
        var jobslist = [];
        var costlist = [];
        var section = [];
        let Name =window.localStorage.name;
        var ID = window.localStorage.id;
        try{
            for(i=1;i<=num;i++){
                let job = document.getElementById('Joblist_'+i);
                let checkboxes = document.getElementById('costlist_'+i);
                var myElement = document.getElementById("costlist_1");
                var checkboxs = checkboxes.getElementsByClassName("ui child checkbox left-text checked");
                var check = checkboxs[0].getElementsByTagName("label");
                console.log(checkboxs);
                //version 2
                for (var a=0, n=checkboxs.length;a<n;a++) 
                {           
                        jobslist.push(job.value);
                        var check = checkboxs[a].getElementsByTagName("label");
                        var seccheck  =  checkboxs[a].getElementsByTagName("input");  
                        costlist.push(check[0].innerText);
                        section.push(seccheck[0].name);
                        //version 2
                        let request = {
                            "name":Name,
                            "nameid":ID,
                            "starttime":Stringtime,
                            "jobid":job.value,
                            "sectionid":seccheck[0].name,
                            "costcenterid":check[0].innerText,
                            'date':today,
                        };
                        $.ajax({
                            url: 'createNew',
                            type: "POST",
                            dataType: "json",
                            data: request,
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                              },
                            success: function (response) {
                                
                               console.log(response);
                            },
                            error: function (xhr, ajaxOptions, thrownError) {
                                alert('Error '+xhr.status+' | '+thrownError);
                            },
                        });
                        
            
                }        
            }

            

            window.localStorage.jobs = JSON.stringify(jobslist);
            window.localStorage.costs = JSON.stringify(costlist);
            window.localStorage.section = JSON.stringify(section);
            window.localStorage.name =  Name;
            window.localStorage.id =  ID;
            window.localStorage.isostarttime =  isostarttime;
            window.localStorage.starttime =  starttime;
            window.localStorage.startStringtime =  Stringtime;
            window.localStorage.date =  today;
            console.log(section);
            window.open("form",target="_self");
        }catch(err) {
            alert(err);
        }
    }
    else{
        alert("Job can not be Same");
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
    var Name = window.localStorage.name;
    document.getElementById("Username").innerHTML=Name;
    window.localStorage.NumberOfJobs = JSON.stringify(1);;
    checkbox();
    // getEmployeebySimpro();
    getjobsbySimpro();
    $('#search-select')
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