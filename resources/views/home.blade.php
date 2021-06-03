<!DOCTYPE html>
<html>
    <head>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script type="text/javascript"  src="{{URL::asset('/js/home.js') }}"></script>
        <!-- <script src="https://code.jquery.com/jquery-3.2.1.min.js"> -->
    </head>

    <body>
        <div id="home">
            <div id="from">
                <p class="az-dashboard-text">Your Name</p>
                <select class="form-control" id="Name">  
                </select>
                <button onclick="add_job()"></button>
                <div class="Job" id="Job">
                    <p class="az-dashboard-text">Job Id</p>
                    <select class="form-control" id="Job" onChange="getcost()">  
                    </select>
                    <p class="az-dashboard-text">Costcentre</p>
                    <select class="form-control" id="costcentre">  
                    </select>
                </div>
                
                
            </div>
            <button onclick="">submit</button>
        </div>
    </body>
    

    
    <script type="text/javascript">
    
    // function getcost(){
    //     var options=$("#Job option:selected"); 
        
    // }
        
    </script>
</html>