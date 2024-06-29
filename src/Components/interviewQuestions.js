import React, { useEffect, useState, useMemo } from 'react';

const InterviewQuestions = () => {
    const [age, setAge] = useState("");
    const [number, setNumber] = useState(0);
    const [number1, setNumber1] = useState(0);

    const handleAgeChange = (event) => {
        const num = event.target.value
        setAge(num);
    };

    const handleClick = () => {
        const num = parseInt(age, 10);
        if (num < 18) {
            //console.log(num)
            alert("AGE CAN NOT BE LESS THAN 18");
            //console.log('age is set to', num, typeof (num))
        } else {
            alert("AGE ACCEPTED");
            //console.log('age is set to', num)
        }
    };

    const A2handelClick = () => {
        setTimeout(() => { setNumber(number + 1) }, 800)
    }

    const A22handelClick = () => {
        return new Promise((resolve) => {

            (resolve(setNumber1(number1 + 1)))
        })
    }

    const Parent = () => {
        const [text, setText] = useState("Enter Something")
        const A3handelchange = (e) => {
            const text = e.target.value;
            setText(text);
        }
        return (<>
            <h5>{text}</h5>
            <Child A3handelchange={A3handelchange} />
        </>)
    }

    const Child = ({ A3handelchange }) => {
        return (<input onChange={A3handelchange} />)
    }
    const [array, setArray] = useState([])
    const [html, sethtml] = useState(null)
    const [value, setValue] = useState("")
    const [boomerang, setBoomerang] = useState(0)
    const htmlboomerang = `The total number of Boomerangs are ${boomerang}`
    const A4handelChange = (e) => {
        const qq = e.target.value
        setValue(qq);
        if (qq !== "") {
            setArray([...array, qq])
        }
        //console.log(array)        
        setTimeout(() => setValue(""), 800);
    }

    useEffect(() => {
        sethtml(array.map((e) => { return (<div className='mx-2' key={Math.random()}>{e}</div>) }))
    }, [array]);

    useMemo(() => {
        let count = 0;
        if (array.length > 2) {
            for (let index = 0; index < array.length; index++) {
                if (array[index] === array[index + 2]) {
                    count += 1
                }
                setBoomerang(count);

            } //console.log("number of boomrangs =", boomerang)           

        }
    }, [array]);

    const A4resetArray = () => {
        //console.log("array reset");
        setArray([])
    }
    const [A5userName, setA5UserName] = useState("");
    const [A5userPassword, setA5Password] = useState("");
    const [submitButton, setSubmitButton] = useState(false);
    const [showPassword, setShowPassword] =useState("&#9994;")
    const [passwordStatus, setpasswordStatus] =useState("password")
    const correctPassword = "password";
    const A5handelUserName = (e) => {
        const num = e.target.value;
        setA5UserName(num)
    }
    const A5handelpassword = (e) => {
        const num = e.target.value;
        setA5Password(num)
    }

    useEffect(() => {
        if (A5userName.length > 3 && A5userPassword.length > 6) { setSubmitButton(false); }
        else { setSubmitButton(true); }
    }, [A5userName, A5userPassword])

    const A5handelSubmit = () => {
        setSubmitButton(true)
        setShowPassword("&#9994;")
        setTimeout(() => {
            setpasswordStatus("password");
            if (A5userPassword !== correctPassword) {
                alert("WRONG PASSWORD");
                setSubmitButton(false);
            }
            else if (A5userPassword === correctPassword) {
                alert("CORRECT PASSWORD");
                setA5Password("");
                setA5UserName("");
                
                console.log(passwordStatus)
            }
        }, 1000)
    }



    const FUN_DANGEREOUS = useMemo(()=>() => {
        const A5ChangeIcon = () => {
            console.log("clicked")
            if (showPassword==="&#9994;"){
                setShowPassword("&#9995;")
                setpasswordStatus("text")
            }
            else{setShowPassword("&#9994;")
                    setpasswordStatus("password")}
        }
        return (<button dangerouslySetInnerHTML={{__html:showPassword}} onClick={A5ChangeIcon} style={{backgroundColor:'black'}}/>)
    },[showPassword])


    return (
        <div className="App" style={{ paddingTop: '60px' }}>
            <>
                <h1 style={{ color: 'blue' }}>INTERVIEW QUESTION AND ANSWER</h1>
                <h3 style={{ color: 'red' }}>Q1 Write a code with age input element which throws an alert whenever the age is less than 18</h3>
                <div>
                    <h5>Enter the age.</h5>
                    <input type='number' placeholder='enter age here' onChange={handleAgeChange} value={age}></input>
                    <button onClick={handleClick}>Submit</button>
                </div>
                <hr />
                <h3 style={{ color: 'red' }} className='my-4'>Q2 Write a callback function</h3>
                <div className='Container' style={{ display: 'flex', justifyContent: 'left', color: 'green', fontWeight: 'bold', marginLeft: '10px' }}>Answer.2 option 1 with setTimeout</div>
                <div>
                    <button className='mx-4' onClick={A2handelClick}>Click with delay</button>
                    This number will change after 1 second {number}
                </div>
                <div className='Container' style={{ display: 'flex', justifyContent: 'left', color: 'green', fontWeight: 'bold', marginLeft: '10px' }}>Answer.2 option 2 with promise</div>
                <div>
                    <button className='mx-4' onClick={A22handelClick}>Click without delay</button>
                    This number will change immediately {number1}
                </div>
                <hr />
                <h3 style={{ color: 'red' }} className='my-4'>Q3 Passing a value from child to parent component</h3>
                <div className='Container' style={{ display: 'flex', justifyContent: 'left', color: 'green', fontWeight: 'bold', marginLeft: '10px' }}>Answer.3</div>
                <div>
                    <Parent />
                </div>
                <hr />
                <h3 style={{ color: 'red' }} className='my-4'>Q4 Count the boomerangs in the array</h3>
                <div className='Container' style={{ display: 'flex', justifyContent: 'left', color: 'green', fontWeight: 'bold', marginLeft: '10px' }}>Answer.4</div>
                <div>
                    <input onChange={A4handelChange} value={value} />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>- {html} -</div>
                    <button onClick={A4resetArray}>Clear Array</button>
                    <h5>{htmlboomerang}</h5>
                </div>
                <hr />
            </>
            <h3 style={{ color: 'red' }} className='my-4'>Q5 Make a login component wherein the following conditions are met.</h3>
            <ol>
                <li> &#9989; The login button should be diables if the password is under 6 charecters or username is empty </li>
                <li>&#9989; Show error message if the login fails</li>
                <li>&#9989; Reset the fields only if log in successfull and send an alert</li>
                <li>&#9989; If login fails send an alert and do not rest the fields</li>
                <li>&#9989; put an option for show password</li>
                <li>&#9989; disable the login button when the login action is being performed</li>
            </ol>
            <div className='Container' style={{ display: 'flex', justifyContent: 'left', color: 'green', fontWeight: 'bold', marginLeft: '10px' }}>Answer.5</div>
            <div className='Container' style={{ display: 'flex', justifyContent: 'center', 'paddingBottom': '100px' }}>
                <div style={{ backgroundColor: 'black', width: '400px', height: '150px' }}>
                    <div className='mx-3 my-3' style={{ display: 'flex', textAlign: 'center', color: 'yellowgreen' }}>UserName <input style={{ marginLeft: '20px' }} type='mail' onChange={A5handelUserName} value={A5userName}/></div>
                    <div className='mx-3 my-3' style={{ display: 'flex', textAlign: 'center', color: 'yellowgreen' }}>Password <input style={{ marginLeft: '27px' }} type={passwordStatus} onChange={A5handelpassword} value={A5userPassword}></input><FUN_DANGEREOUS string={showPassword}  style={{ cursor: 'pointer' }}/></div>
                    <div className='my-3' style={{ display: 'flex', justifyContent: 'center' }}>
                        <button disabled={submitButton} onClick={A5handelSubmit}>Submit</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default InterviewQuestions;
