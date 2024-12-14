function FormInput({name, id, value, setValue, label}) {
    return (
        <div>
            <label>
                {label}
                <input name={name} value={value} id={id} onChange={setValue}/>
            </label>
        </div>
    )
}
export default FormInput;