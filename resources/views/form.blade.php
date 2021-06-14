<!DOCTYPE html>
<html>
    <head>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.css">
  
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.js"></script>
        <link rel="styleSheet" href="{{URL::asset('/css/home.css') }}" type="text/css">
    </head>

    <body>
        <div id="home">
            <div id="from">
            <p class="az-dashboard-text" id= "name">e</p>
            <table class="table" id="table_orders">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Jobs</th>
                    <th scope="col">CostCenter</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
               
            </table>
                
                
            </div>
            <button class="ui button" onclick="">submit</button>
        </div>
    </body>
    

    
    <script type="text/javascript">
    
    // function getcost(){
    //     var options=$("#Job option:selected"); 
        
    // }
    window.onload=function(){
        var storedName = window.localStorage.name;
        var jobs = JSON.parse(window.localStorage.jobs);
        var costs = JSON.parse(window.localStorage.costs);
        document.getElementById('name').innerHTML = storedName;
        
        var bodyString = '';
        $.each(jobs, function(index, ctry) {
            bodyString += ('<tr><td>'+(index+1)+'</td><td>'+ctry+'</td><td>'+costs[index]+'</td></tr>');
        });
        $('#table_orders tbody').html(bodyString);
        console.log(bodyString);
        

    
    }
        
    </script>
</html>