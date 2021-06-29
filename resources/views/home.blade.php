<!DOCTYPE html>
<html>
    <head>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script type="text/javascript"  src="{{URL::asset('/js/home.js') }}"></script>
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">
        <link rel="styleSheet" href="{{URL::asset('/css/home.css') }}" type="text/css">
        <!-- <script src="https://code.jquery.com/jquery-3.2.1.min.js"> -->
    </head>

    <body>
        <div class="header" id="header_id">
            <div class="companyLogo" id="companyLogo_id">
                <img src="https://electricalswitchboards.com.au/wp-content/uploads/2019/02/dara-switchboards-logo-header.png"  height=50px style="margin-left:25px;margin-top: 10px;">
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
            <div id="from">
                <div class="name">
                    <p class="az-dashboard-text left-text">Welcome Back</p>
                    <a class="left-text" id="Username"></a>
                    <!-- <select class="ui search selection dropdown" id="Name" style="display:none">  
                    </select> -->
                    
                        <a class="btn plus" onclick="add_job_new()" >+</a>
                        <a class="btn minus" onclick="delete_job()">-</a>
                                   
                </div>
                <div class="Job" id="Job_1">
                    <p class="az-dashboard-text">Job Id</p>
                    <select class="ui search selection dropdown" id="Joblist_1" onChange="getcostBySimproNew(1)">
                        <option value="please">Please select a job</option>  
                    </select>
                    <p class="az-dashboard-text">Costcentre</p>
                    <div class="ui celled relaxed list">
                        <div class="item">
                            <div class="ui master checkbox">
                                <input type="checkbox" name="fruits">
                                <label>Select All</label>
                            </div>
                            <div class="list" id="costlist_1">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Job" id="Job_2" style="display:none">
                    <p class="az-dashboard-text">Job Id</p>
                    <select class="ui search selection dropdown" id="Joblist_2" onChange="getcostBySimproNew(2)">  
                        <option value="please">Please select a job</option>    
                    </select>
                    <p class="az-dashboard-text">Costcentre</p>
                    <div class="ui celled relaxed list">
                        <div class="item">
                            <div class="ui master checkbox">
                                <input type="checkbox" name="fruits">
                                <label>Select All</label>
                            </div>
                            <div class="list" id="costlist_2">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Job" id="Job_3" style="display:none">
                    <p class="az-dashboard-text">Job Id</p>
                    <select class="ui search selection dropdown" id="Joblist_3" onChange="getcostBySimproNew(3)"> 
                         <option value="please">Please select a job</option> 
                    </select>
                    <p class="az-dashboard-text">Costcentre</p>
                    <div class="ui celled relaxed list">
                        <div class="item">
                            <div class="ui master checkbox">
                                <input type="checkbox" name="fruits">
                                <label>Select All</label>
                            </div>
                            <div class="list" id="costlist_3">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Job" id="Job_4" style="display:none">
                    <p class="az-dashboard-text">Job Id</p>
                    <select class="ui search selection dropdown" id="Joblist_4" onChange="getcostBySimproNew(4)">
                        <option value="please">Please select a job</option>  
                    </select>
                    <p class="az-dashboard-text">Costcentre</p>
                    <div class="ui celled relaxed list">
                        <div class="item">
                            <div class="ui master checkbox">
                                <input type="checkbox" name="fruits">
                                <label>Select All</label>
                            </div>
                            <div class="list" id="costlist_4">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Job" id="Job_5" style="display:none">
                    <p class="az-dashboard-text">Job Id</p>
                    <select class="ui search selection dropdown" id="Joblist_5" onChange="getcostBySimproNew(5)">
                        <option value="please">Please select a job</option>  
                    </select>
                    <p class="az-dashboard-text">Costcentre</p>
                    <div class="ui celled relaxed list">
                        <div class="item">
                            <div class="ui master checkbox">
                                <input type="checkbox" name="fruits">
                                <label>Select All</label>
                            </div>
                            <div class="list" id="costlist_5">
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div class="submit">
                <button class="btn submitbtn" onclick="makeFrom()">submit</button>
            </div>
        </div>
    </body>
    

    
    <script type="text/javascript">
    
    // function getcost(){
    //     var options=$("#Job option:selected"); 
        
    // }
        
    </script>
</html>