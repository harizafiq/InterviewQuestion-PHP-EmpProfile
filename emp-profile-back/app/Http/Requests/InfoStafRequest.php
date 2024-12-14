<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Enums;
use Illuminate\Validation\Rule;

class InfoStafRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|max:255|uppercase',
            'gender' => [Rule::enum(Enums\GenderEnum::class), 'required'],
            'martial_status' => [Rule::enum(Enums\MarriedStatusEnum::class), 'required'],
            'phone_no' => 'required|max:20|regex:/^\+?[0-9]{1,4}([-]?[0-9]{1,4}){2,}$/',
            'email' => 'required|unique:info_stafs|max:50',
            'address' => 'required|max:255|uppercase',
            'date_birth' => 'required|date_format:Y-m-d',
            'nationality' => 'required|max:20|uppercase',
            'hire_date' => 'required|date_format:Y-m-d',
            'department' => 'required|max:50|uppercase',
        ];
    }
}
