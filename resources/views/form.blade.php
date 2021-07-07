<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.css">
  
        <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.js"></script>
        <link rel="styleSheet" href="{{URL::asset('/css/home.css') }}" type="text/css">
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
        <script type="text/javascript" src="//w.24timezones.com/l.js" async></script>
        <script type="text/javascript"  src="{{URL::asset('/js/form.js') }}"></script>
    </head>

    <body>
        <div class="header" id="header_id">
            <div class="companyLogo" id="companyLogo_id">
                <img src="https://electricalswitchboards.com.au/wp-content/uploads/2019/02/dara-switchboards-logo-header.png"  height=50px style="margin-left:15px;margin-top: 15px;">
            </div>
            <div > <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=small&timezone=Australia%2FMelbourne" width="175" height="90" frameborder="0" style="left:43vw;position: absolute;"seamless></iframe> </div>
            <button class="btn submitbtn left-btn" onclick="logout()" style="margin-top: 25px;right:2vw;">Log out</button>
        </div>
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Review Table</h2>
                <table class="table" id="table_review">
                    <thead>
                        <tr>
                        
                        <th scope="col">Jobs</th>
                        <th scope="col">CostCenter</th>
                        <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
               
                </table>
                <div>
                <button class="btn submitbtn right-btn" id = "cancelbtn"onclick="">Back</button>
                <button class="btn submitbtn left-btn" onclick="submit()">Submit</button>
                </div>
            </div>

        </div>
        <div class="shadow" id="bg">
            <!-- about -->
            <div class="about">
            
            </div>
            <!-- end about -->
            
            <div class="content">
            <div class="loading">
            <p>loading</p>
                <span></span>
            </div>
            </div>
        </div>
        <div class="shadow" id="hd">
            <!-- about -->
            <div class="about">
            
            </div>
            <!-- end about -->
            <button class="btn submitbtn bd-btn" style="    left: 0;margin: 0 auto;"onclick="stop()">Stop Holding</button>

            <div class="content">
            
            <div style="color:wheat;font-size: 27px;">
            <p>You have rested</p>  <p  id= "Resttime"></p>
                <span></span>
            </div>
            </div>
        </div>
        <div class = "home" id="home">
            
            <div class = "from" id="from">
            <div class="split" >
            <p class="az-dashboard-text" id= "name"></p>
            <p class="az-dashboard-text" id= "Starttime"></p></div><div class="split" style="top: 20px;"> <p class="az-dashboard-text" id= "Taketime" style="font-size:19px"></p></div>
            </div>
            <div class = "from" id="from">
            <p class="az-dashboard-text" id= "Starttime"></p> <p class="az-dashboard-text" id= "totalrest">You have rest 0 mins </p>
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
            <div class="submit">
            <button id ="submitreview"class="btn submitbtn1 left-btn green" onclick="">Review&Submit</button>
            <button class="btn submitbtn1 right-btn red" onclick="cancel()">Cancel</button>
            <button class="btn submitbtn1 left-btn brown" onclick="hold()">Hold</button>
            
            </div>
        </div>
    </body>
    

    
    <script type="text/javascript">
    
    // function getcost(){
    //     var options=$("#Job option:selected"); 
        
    // }
        function timer(){
            
            var starttime = window.localStorage.startStringtime;
            var start = Date.parse(starttime);
            var now = new  Date();
            var diffMs = (now - start);
            var diffDays = Math.floor(diffMs / 86400000); // days
            var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
            var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
            var diffs = Math.round((((diffMs % 86400000) % 3600000) %60000)/1000); 
            document.getElementById('Taketime').innerHTML="Batch Running Time "+diffHrs+' hrs '+diffMins+" mins "+diffs+" s";
        }
    
        function startTimer()//开始
        {
            clock=setInterval(timer,1000);
        }
    window.onload=function(){
        getHoldingTime();
        var storedName = window.localStorage.name;
        var starttime = window.localStorage.startStringtime;
        var jobs = JSON.parse(window.localStorage.jobs);
        var costs = JSON.parse(window.localStorage.costs);
        document.getElementById('name').innerHTML = storedName;
        document.getElementById('Starttime').innerHTML = "Job Start Time - "+starttime.slice(16, 24);
        
        var bodyString = '';
        $.each(jobs, function(index, ctry) {
            bodyString += ('<tr><td>'+(index+1)+'</td><td>'+ctry+'</td><td>'+costs[index]+'</td></tr>');
        });
        $('#table_orders tbody').html(bodyString);
        console.log(bodyString);
        startTimer();
        // var holdingtime = window.localStorage.holdingtime;
        // console.log("holding time is"+holdingtime);
        // document.getElementById('totalrest').innerHTML="You have rest "+holdingtime+" mins ";
        // Get the button that opens the modal
        var btn = document.getElementById("submitreview");
        var cancelbtn = document.getElementById("cancelbtn");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        var modal = document.getElementById("myModal");

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
            confirmText1();
        modal.style.display = "block";
        }
        cancelbtn.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        }
        holdingstatus();
        

    
    }
        
    </script>
</html>