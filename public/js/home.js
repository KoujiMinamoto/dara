
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
            // console.log(response.length);
            // $.each(data, function(index, item) {
            //     // console.log(item.index);
            //     $('#Job.form-control').append('<option value="' + item.index + '">' + item.key + '</option>');
            //     });
            for(i = 0; i < response.length; i++){
                $('#costcentre.form-control').append('<option value="' + response[i].CostCenterID+ '">' + response[i].CostCenterID + '</option>');
            }
           
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert('Error '+xhr.status+' | '+thrownError);
        },
    });
}

function initPage() {
    // getjobs();
}

window.onload=function(){
    getjobs();
}