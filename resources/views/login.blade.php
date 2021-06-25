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
        <link rel="styleSheet" href="{{URL::asset('/css/login.css') }}" type="text/css">
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
        <script type="text/javascript" src="//w.24timezones.com/l.js" async></script>
        <script type="text/javascript"  src="{{URL::asset('/js/login.js') }}"></script>
    </head>

    <body>
        <div class="header" id="header_id">
            <div class="companyLogo" id="companyLogo_id">
                <img src="https://electricalswitchboards.com.au/wp-content/uploads/2019/02/dara-switchboards-logo-header.png"  height=50px style="margin-left:15px;margin-top: 15px;">
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
        <div class = "home" id="home">
            <div class="login">
            <div class="name">
                    <p class="az-dashboard-text left-text">Your Name</p>
                    <select class="ui search selection dropdown" id="Name">  
                    </select>                                  
            </div>
            <button onclick="Gonext()">Login</button>
            </div>
            
        </div>
    </body>
    

    
    
    
</html>