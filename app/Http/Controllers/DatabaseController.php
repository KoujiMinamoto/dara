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

    public function createNew(Request $request){
        $name=$request->input('name');
        $nameid=$request->input('nameid');
        $starttime=$request->input('starttime');
        $jobid=$request->input('jobid');
        $sectionid=$request->input('sectionid');
        $costcenterid=$request->input('costcenterid');
        $date=$request->input('date');
        // DB::insert('insert into record (name,nameid,starttime,jobid,sectionid,costcenterid,date) values (?, ? ,? , ?,  ?, ?, ?)', [$name,$nameid,$starttime,$jobid,$sectionid,$costcenterid,$date]);
        DB::table('RECORD')->insert([
            'name' => $name,
            'nameid' => $nameid,
            'starttime' => $starttime,
            'jobid' => $jobid,
            'sectionid' => $sectionid,
            'costcenterid' => $costcenterid,
            'date' => $date
         ]);
        return response()->json($request);
        
    }
}
