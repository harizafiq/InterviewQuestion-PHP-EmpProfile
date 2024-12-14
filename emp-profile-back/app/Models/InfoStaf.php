<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class InfoStaf extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "gender",
        "martial_status",
        "email",
        "phone_no",
        "email",
        "address",
        "date_birth",
        "nationality",
        "hire_date",
        "department"
    ];
}
