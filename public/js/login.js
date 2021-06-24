
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