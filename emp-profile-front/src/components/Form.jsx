import {useState} from 'react';
import FormInput from './FormInput';
import ErrorForm from './Error';

function Form() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [martialStatus, setMartialStatus] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [nationality, setNationality] = useState('');
    const [hireDate, setHireDate] = useState('');
    const [department, setDepartment] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isStatus, setIsStatus] = useState('');
    const [errorsValidation, setErrorsValidation] = useState([]);

    const inputs = [
        {
            label: "Name",
            name: "name",
            type: "text",
            setValue: setName,
            value: name,
            
        }
    ]

    function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const staf = { 
            name,
            gender,
            martial_status: martialStatus,
            phone_no: phoneNo,
            email,
            address,
            date_birth: dateBirth,
            nationality,
            hire_date: hireDate,
            department
        };
        console.log(JSON.stringify(staf));
        
        await fetch('http://localhost:8000/api/infoStaf/', {
          method: 'POST',
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(staf)
        })
        .then(response => {
            // 
            // console.log(response);
            if (response.ok) {
                setIsStatus("201");
                scrollToTop();
            } else {
                setIsStatus('');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.exception) {
                throw Error(data.exception);
            }
            if (data.errors) {
                console.log(data.errors);
                setIsStatus('422')
                setErrorsValidation(data.errors);
                scrollToTop();
            }
            console.log(data);
        })
        .catch(err => {
            console.log(err.message);
            setIsStatus("500");
            scrollToTop();
        })
        .finally(() => {
            setIsLoading(false);
        });
    }
    return (
        <div style={{
            background: "#bcd4e6",
            padding: "35px"
        }}>
            {isStatus && isStatus === "201" ?
                <article style={{
                    backgroundColor: "#8db600",
                    color: "white"
                    }}>Staf successfully added
                </article> : 
                <article style={{
                    backgroundColor: "#e52b50",
                    color: "white"
                    }}>{isStatus === '500' ? 'Problem connecting with the server. Please try again in a minute' : 'Please check input'}
                </article>
                }
            <h5>Add Staf</h5>
            <form onSubmit={handleSubmit}>
                {/* { inputs.map((input, index) =>{
                    return <FormInput key={index} label={input.label} name={input.name} id={input.name} value={input.value} setValue={input.setName}/>
                }) } */}
                {isLoading && <progress />}
                <div>
                    <label id="name">Name : 
                        <input 
                            id="name" 
                            type="text" 
                            onChange={(e) => setName(e.target.value.toUpperCase())} 
                            value={name}
                            required
                            placeholder='Insert your name here'
                            maxLength={255}
                            aria-invalid={isStatus ? (errorsValidation['name'] ? "true" : "false") : ""}
                            aria-describedby="name-helper"
                            disabled={isLoading && "disabled"}
                        />
                        {errorsValidation['name'] && <ErrorForm id="name-helper" errors={errorsValidation['name']} />}
                    </label>
                </div>
                <div>
                    <fieldset>
                    <legend>Gender:</legend>
                        <input 
                                name="gender"
                                id="male" 
                                type="radio" 
                                onChange={(e) => setGender(e.target.value)} 
                                value="1"
                                required
                                disabled={isLoading && "disabled"}
                            />
                        <label htmlFor="male">Male</label>
                        <input 
                                name="gender"
                                id="female" 
                                type="radio" 
                                onChange={(e) => setGender(e.target.value)} 
                                value="0"
                                required
                                disabled={isLoading && "disabled"}
                            />
                        <label htmlFor="female">Female</label>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                    <legend>Martial Status:</legend>
                        <input 
                                name="martialStatus"
                                id="single" 
                                type="radio" 
                                onChange={(e) => setMartialStatus(e.target.value)} 
                                value="0"
                                required
                                disabled={isLoading && "disabled"}
                            />
                        <label htmlFor="single">Single</label>
                        <input 
                                name="martialStatus"
                                id="married" 
                                type="radio" 
                                onChange={(e) => setMartialStatus(e.target.value)} 
                                value="1"
                                required
                                disabled={isLoading && "disabled"}
                            />
                        <label htmlFor="married">Married</label>
                    </fieldset>
                </div>
                <div>
                    <label id="email">Email : 
                        <input 
                            id="email" 
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email}
                            required
                            placeholder='Insert your email here'
                            aria-invalid={isStatus ? (errorsValidation['email'] && isStatus !== "201" ? "true" : "false") : ""}
                            aria-describedby="email-helper"
                            disabled={isLoading && "disabled"}
                        />
                        {errorsValidation['email'] && <ErrorForm id="email-helper" errors={errorsValidation['email']} />}
                    </label>
                </div>
                <div>
                    <label id="phoneNo">Phone No : 
                        <input 
                            id="phoneNo" 
                            type="tel" 
                            onChange={(e) => setPhoneNo(e.target.value)} 
                            value={phoneNo}
                            required
                            placeholder='Insert your phone number here'
                            pattern="^\+?[0-9]{1,4}([-]?[0-9]{1,4}){2,}$"
                            maxLength={20}
                            aria-invalid={isStatus ? (errorsValidation['phone_no'] ? "true" : "false") : ""}
                            aria-describedby="phoneNo-helper"
                            disabled={isLoading && "disabled"}
                        />
                        {errorsValidation['phone_no'] && <ErrorForm id="phoneNo-helper" errorsValidation={errorsValidation['phone_no']} />}
                    </label>
                </div>
                <div>
                    <label id="address">Address : 
                        <input 
                            id="address" 
                            type="text" 
                            onChange={(e) => setAddress(e.target.value.toUpperCase())} 
                            value={address}
                            required
                            placeholder='Insert your address here'
                            maxLength={255}
                            aria-invalid={isStatus ? (errorsValidation['address'] ? "true" : "false") : ""}
                            aria-describedby="address-helper"
                            disabled={isLoading && "disabled"}
                        />
                        {errorsValidation['address'] && <ErrorForm id="address-helper" errorsValidation={errorsValidation['address']} />}
                    </label>
                </div>
                <div>
                    <label id="dateBirth">Date of Birth : 
                        <input 
                            id="dateBirth" 
                            type="date" 
                            onChange={(e) => setDateBirth(e.target.value)} 
                            value={dateBirth}
                            required
                            aria-invalid={isStatus ? (errorsValidation['dateBirth'] ? "true" : "false") : ""}
                            aria-describedby="dateBirth-helper"
                            disabled={isLoading && "disabled"}
                        />
                        {errorsValidation['dateBirth'] && <ErrorForm id="dateBirth-helper" errorsValidation={errorsValidation['dateBirth']} />}
                    </label>
                </div>
                <div>
                    <label id="nationality">Nationality : 
                        <input 
                            id="nationality" 
                            type="text" 
                            onChange={(e) => setNationality(e.target.value.toUpperCase())} 
                            value={nationality}
                            required
                            placeholder='Insert your nationality here'
                            maxLength={20}
                            aria-invalid={isStatus ? (errorsValidation['nationality'] ? "true" : "false") : ""}
                            aria-describedby="nationality-helper"
                            disabled={isLoading && "disabled"}
                        />
                        {errorsValidation['nationality'] && <ErrorForm id="nationality-helper" errorsValidation={errorsValidation['nationality']} />}
                    </label>
                </div>
                <div>
                    <label id="hireDate">Hire Date : 
                        <input 
                            id="hireDate" 
                            type="date" 
                            onChange={(e) => setHireDate(e.target.value)} 
                            value={hireDate}
                            required
                            aria-invalid={isStatus ? (errorsValidation['hireDate'] ? "true" : "false") : ""}
                            aria-describedby="hireDate-helper"
                            disabled={isLoading && "disabled"}
                        />
                        {errorsValidation['hireDate'] && <ErrorForm id="hireDate-helper" errorsValidation={errorsValidation['hireDate']} />}
                    </label>
                </div>
                <div>
                    <label id="department">Department : 
                        <input 
                            id="department" 
                            type="text" 
                            onChange={(e) => setDepartment(e.target.value.toUpperCase())} 
                            value={department}
                            required
                            placeholder='Insert your department here'
                            maxLength={50}
                            aria-invalid={isStatus ? (errorsValidation['department'] ? "true" : "false") : ""}
                            aria-describedby="department-helper"
                            disabled={isLoading && "disabled"}
                        />
                        {errorsValidation['department'] && <ErrorForm id="department-helper" errorsValidation={errorsValidation['department']} />}
                    </label>
                </div>
                { isLoading ? <input type="submit" value="Adding Staf..." disabled /> : <input type="submit" value="Add Staf" />}
            </form>
        </div>
    )
}
export default Form;