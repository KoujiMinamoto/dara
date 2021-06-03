<?php

namespace App\Http\Controllers;

use App\Models\User;
use Session;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;

class DatabaseController extends Controller
{
    public function getNumOfJobs(){
        return DB::table('COSTCENTRE')->count();
    }

    public function getAllJobs(){
        return DB::table('COSTCENTRE')->selectRaw('JOBID')->orderBy('JOBID', 'ASC')->get();
    }

    public function getCostCentre($job){
        return DB::table('COSTCENTRE')->selectRaw('CostCenterID')->where('JOBID', $job)->get();
    }
}
