<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\InfoStaf;
use Illuminate\Http\Request;
use App\Models;
use App\Http\Requests;

class InfoStafController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Models\InfoStaf::get();
        return response()->json($items);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Requests\InfoStafRequest $request)
    {
        $item = Models\InfoStaf::create($request->validated());
        return response()->json($item, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(InfoStaf $infoStaf)
    {
        $item = Models\InfoStaf::find($infoStaf->id);
        return response()->json($item);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, InfoStaf $infoStaf)
    {
        $item = Models\InfoStaf::find($infoStaf);
        $item->update($request->all());
        return response()->json($item, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(InfoStaf $infoStaf)
    {
        Models\InfoStaf::destroy($infoStaf);
        return response()->json(null, 204);
    }
}
