Step to run backend

1. cd .\emp-profile-back\ (get inside folder)
2. composer install (install laravel and others dependencies)
3. run database server, create database "emp_profile" (preparing for create database)
4. php artisan migrate (will create database)
    Optional (will insert data dummy)
    1. php artisan tinker
    2. use App\Models;
    3. Models\InfoStaf::factory()->create();
5. php artisan serve (run the app)
6. use Postman/Insomnia to test the API

API LIST
Get all staf
http://localhost:8000/api/infoStaf/

Create Staf
http://localhost:8000/api/infoStaf/
dummy data
{
	"name":"PROF. JEROME LEGROS SR.",
	"gender":"1",
	"martial_status":"1",
	"email":"bruen.raul@hotmail.com",
	"phone_no":"1-858-659-7564",
	"address":"4008 WIZA AVENUE APT. 460 GORCZANYFURT, CA 76231",
	"date_birth":"2011-08-04",
	"nationality":"GEORGIA",
	"hire_date":"2024-12-18",
	"department":"VELIT"
}