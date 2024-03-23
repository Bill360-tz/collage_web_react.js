import React, { useState } from 'react'
import axios from 'axios'
import './RegisterForm.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Swal from "sweetalert2";
// import "bootstrap/dist/css/bootstrap.min.css";
AOS.init({
    duration: 2000
});

function RegisterForm() {
    const [inputs, setInputs] = useState([])
    const [payment, setPayment] = useState(false)
    const [payOnline, setPayOnline] = useState(false)
    const [activeDiv, setActiveDiv] = useState('');
    const [pendingMode, setPending] = useState(false);
    const [sent, setSent] = useState(false);
    function hundleChange(e) {

        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleClick = () => {
        setActiveClass('btn-pri-o');
    };


    function hundleSubmit(e) {
        e.preventDefault();

        if(pendingMode == false){
              // Validation
        console.log(inputs)
        if (inputs['phone'] == '' || inputs['fullName'] == '' || inputs['course'] == '') {
            alert('Please fill all the field')
        } else {
            setPending(true)
            postData()
        }
        }

      
    }

    const postData = async () => {


        await axios.post('https://o.raseemcollege.com/data-operations.php', inputs).then(function (response) {
            console.log(response.data)

            if (response.data == 'success') {
                setSent(true)
               setTimeout(() => {
                window.location.reload();
               }, 1500);
               
            } else {
                alert("Something went wrong... Please Contact us")
            }
        })
    }

    const data = [
        {
            id: 1,
            courseName: "English"
        },
        {
            id: 2,
            courseName: "Arabic"
        },
        {
            id: 3,
            courseName: "Spanish"
        },
        {
            id: 4,
            courseName: "Italian"
        },
        {
            id: 5,
            courseName: "French"
        },
        {
            id: 6,
            courseName: "Russia"
        },
        {
            id: 7,
            courseName: "German"
        },
        {
            id: 8,
            courseName: "Japanese"
        },
        {
            id: 9,
            courseName: "Chinese"
        },
        {
            id: 10,
            courseName: "Hotel Catering and management"
        },
        {
            id: 11,
            courseName: "Wildlife management and Tourism"
        },
        {
            id: 12,
            courseName: "Sales and Markerting"
        },
        {
            id: 13,
            courseName: "Computer Programs"
        },
        {
            id: 14,
            courseName: "Swahili and Culture"
        },
        {
            id: 15,
            courseName: "Tour Operator"
        },
        {
            id: 16,
            courseName: "Customer Care Services"
        },
        {
            id: 17,
            courseName: "Communication Skills, Business English"
        },

    ]


    return (
            <div className='registerform flex-c bg-w flex-centered '>
                <div div className="grid-2 fill pad-10  m-flex " >
                    {!payment &&
                        <div data-aos="fade-up" className="flex-c pad-20 flex-centered m-fill">
                            <div className="flex-c fill pad-5 flex-centered m-fill">
                                <h3 className="normal-text disText"> Fill the form Below</h3>

                                {sent &&
                                <h3 className="green flex"> <CheckCircleIcon/> Registration Request Sent</h3>
                                }
                            </div>
                            <form onSubmit={hundleSubmit} className="flex-c fill pad-5 m-fill">
                                <label htmlFor="fullName" className="normal-text">Your Full Name</label>
                                <input type="text"
                                    id='fullName'
                                    name='fullName'
                                    className="input-s pad-5"
                                    onChange={hundleChange}
                                />
                                <label htmlFor="phone" className="normal-text">Phone Number</label>
                                <input type="text"
                                    id='phone'
                                    name='phone'
                                    className="input-s pad-5"
                                    onChange={hundleChange}
                                />
                                <label htmlFor="course" className="normal-text">Select Course</label>
                                <select name="course"
                                    id="course" className="input-s pad-5"
                                    onChange={hundleChange}
                                >
                                    <option value=""> --Select-- </option>
                                    {
                                        data.map((course, key) => (
                                            <option key={course.id} value={course.courseName}>{course.courseName}</option>
                                        ))
                                    }
                                </select>
                                <div className="flex pad-20 flex-centered">
                                    <button type='submit' className="btn-pri-o pad-10 width-50" >{pendingMode?'Please wait...':'SUBMIT'}</button>
                                </div>
                            </form>
                        </div>
                    }

                    {payment &&
                        <div data-aos="fade-up" className="flex-c pad-10">
                            <div className="flex pad-5">
                                <h3 className="normal-text">Pay Registration Fees</h3>

                            </div>


                            <div className="flex-c fill">
                                <div className="grid-2 pad-10">
                                    <div className={`pad-5 mob flex input-s pointer ${activeDiv === 'airtel' ? 'btn-pri-o' : ''}`} onClick={() => setActiveDiv('airtel')}>
                                        <img src='/mob/airtel.png' alt="" className='rad-4' />
                                        <span>Airtel Money</span>
                                    </div>
                                    <div className={`pad-5 mob flex input-s pointer ${activeDiv === 'tigo' ? 'btn-pri-o' : ''}`} onClick={() => setActiveDiv('tigo')}>
                                        <img src={'/mob/tigo.png'} alt="" />
                                        <span>Tigo Pesa</span>
                                    </div>
                                    <div className={`pad-5 mob flex input-s pointer ${activeDiv === 'mpesa' ? 'btn-pri-o' : ''}`} onClick={() => setActiveDiv('mpesa')}>
                                        <img src={'/mob/voda.png'} alt="" className='rad-4' />
                                        <span>M-Pesa</span>
                                    </div>
                                    <div className={`pad-5 mob flex input-s pointer ${activeDiv === 'halo' ? 'btn-pri-o' : ''}`} onClick={() => setActiveDiv('halo')


                                    }>
                                        <img src={'/mob/halo.png'} alt="" />
                                        <span>Halo-Pesa</span>
                                    </div>
                                </div>


                                <div className="flex pad-10">
                                    <h3 className="w-500 normal-text">Select Payment Method</h3>
                                    <label htmlFor='online' onClick={() => {
                                        setPayOnline(false)
                                    }}
                                        className="input-s pad-5 pointer flex">
                                        Online
                                        <input type="radio" defaultChecked name="paymethod" id="online" />
                                    </label>
                                    <label onClick={() => {
                                        setPayOnline(true)
                                    }}
                                        className="input-s  pad-5 flex pointer">
                                        USSD
                                        <input type="radio" name="paymethod" id="ussd" />
                                    </label>
                                </div>
                                {!payOnline &&
                                    <div className="flex-c fill">
                                        {activeDiv == 'mpesa' &&
                                            <div className="flex-c fill pad-20 flex-centered">
                                                <p className="normal-text">Pay Atention to the screen of your phone and put your M-Pesa PIN Code</p>
                                                <div className="flex pad-5   flex-s-btn theme-border-b-2">
                                                    <input type="text" className='input-s pad-5' placeholder='Enter Vodacom Number' />
                                                    <span className="normal-text w-600 marg-r-20">
                                                        10,000/= Tsh.
                                                    </span>
                                                    <button className="btn-pri-o">
                                                        Confirm
                                                    </button>
                                                </div>
                                            </div>
                                        }

                                        {activeDiv == 'halo' &&
                                            <div className="flex-c fill pad-20 flex-centered">
                                                <p className="normal-text">Pay Atention to the screen of your phone and put your Halo-Pesa PIN Code</p>
                                                <div className="flex pad-5   flex-s-btn theme-border-b-2">
                                                    <input type="text" className='input-s pad-5' placeholder='Enter Halotel Number' />
                                                    <span className="normal-text w-600 marg-r-20">
                                                        10,000/= Tsh.
                                                    </span>
                                                    <button className="btn-pri-o">
                                                        Confirm
                                                    </button>
                                                </div>
                                            </div>
                                        }

                                        {activeDiv == 'tigo' &&
                                            <div className="flex-c fill pad-20 flex-centered">
                                                <p className="normal-text">Pay Atention to the screen of your phone and put your Tigo-Pesa PIN Code</p>
                                                <div className="flex pad-5   flex-s-btn theme-border-b-2">
                                                    <input type="text" className='input-s pad-5' placeholder='Enter Tigo Number' />
                                                    <span className="normal-text w-600 marg-r-20">
                                                        10,000/= Tsh.
                                                    </span>
                                                    <button className="btn-pri-o">
                                                        Confirm
                                                    </button>
                                                </div>
                                            </div>
                                        }

                                        {activeDiv == 'airtel' &&
                                            <div className="flex-c fill pad-20 flex-centered">
                                                <p className="normal-text">Pay Atention to the screen of your phone and put your Airtel-Money PIN Code</p>
                                                <div className="flex pad-5   flex-s-btn theme-border-b-2">
                                                    <input type="text" className='input-s pad-5' placeholder='Enter Airtel Number' />
                                                    <span className="normal-text w-600 marg-r-20">
                                                        10,000/= Tsh.
                                                    </span>
                                                    <button className="btn-pri-o">
                                                        Confirm
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                    </div>

                                }
                                {payOnline &&


                                    <div className="flex-c fill">
                                        {activeDiv == 'mpesa' &&
                                            <div className="grid-2 pad-20 fill pad-l-0" >
                                                <div className="flex-c">
                                                    <b className='normal-text'>Pay By M-pesa</b>
                                                    <span className='normal-text flex'><b>1</b> Dial *150*00#</span>
                                                    <span className='normal-text flex'><b>2</b> Select 4: Pay By M-pesa</span>
                                                    <span className='normal-text flex'><b>3</b> Select 4: Enter Business Number</span>
                                                    <span className='normal-text flex'><b>4</b> Enter Business no: 11111</span>


                                                </div>
                                                <div className="flex-c">
                                                    <span className='normal-text flex'><b>5</b> Enter Reference no: 11111</span>
                                                    <span className='normal-text flex'><b>6</b> Enter Reference no: 11111</span>
                                                    <span className='normal-text flex'><b>7</b> Enter Amount :10000</span>
                                                    <span className='normal-text flex'><b>8</b> Enter Enter Your M-Pesa PIN</span>
                                                    <span className='normal-text flex'><b>9</b> Enter 1 to submit</span>
                                                </div>
                                            </div>
                                        }
                                        {activeDiv == 'tigo' &&
                                            <div className="grid-2 pad-20 fill pad-l-0" >
                                                <div className="flex-c">
                                                    <b className='normal-text'>Pay By Tigo-pesa</b>
                                                    <span className='normal-text flex'><b>1</b> Dial *150*01#</span>
                                                    <span className='normal-text flex'><b>2</b> Select 4: Pay By Bills</span>
                                                    <span className='normal-text flex'><b>3</b> Select 3: Enter Business Number</span>
                                                    <span className='normal-text flex'><b>4</b> Enter Business no: 11111</span>


                                                </div>
                                                <div className="flex-c">
                                                    <span className='normal-text flex'><b>5</b> Enter Reference no: 11111</span>
                                                    <span className='normal-text flex'><b>6</b> Enter Reference no: 11111</span>
                                                    <span className='normal-text flex'><b>7</b> Enter Amount :10000</span>
                                                    <span className='normal-text flex'><b>8</b> Enter Enter Your Tigo Pesa PIN</span>
                                                    <span className='normal-text flex'><b>9</b> Enter 1 to submit</span>
                                                </div>
                                            </div>
                                        }
                                        {activeDiv == 'halo' &&
                                            <div className="grid-2 pad-20 fill pad-l-0" >
                                                <div className="flex-c">
                                                    <b className='normal-text'>Pay By Halo-Pesa</b>
                                                    <span className='normal-text flex'><b>1</b> Dial *150*01#</span>
                                                    <span className='normal-text flex'><b>2</b> Select 4: Pay By Bills</span>
                                                    <span className='normal-text flex'><b>3</b> Select 3: Enter Business Number</span>
                                                    <span className='normal-text flex'><b>4</b> Enter Business no: 11111</span>


                                                </div>
                                                <div className="flex-c">
                                                    <span className='normal-text flex'><b>5</b> Enter Reference no: 11111</span>
                                                    <span className='normal-text flex'><b>6</b> Enter Reference no: 11111</span>
                                                    <span className='normal-text flex'><b>7</b> Enter Amount :10000</span>
                                                    <span className='normal-text flex'><b>8</b> Enter Enter Your Tigo Pesa PIN</span>
                                                    <span className='normal-text flex'><b>9</b> Enter 1 to submit</span>
                                                </div>
                                            </div>
                                        }
                                        {activeDiv == 'airtel' &&
                                            <div className="grid-2 pad-20 fill pad-l-0" >
                                                <div className="flex-c">
                                                    <b className='normal-text'>Pay By Airtel-Money</b>
                                                    <span className='normal-text flex'><b>1</b> Dial *150*01#</span>
                                                    <span className='normal-text flex'><b>2</b> Select 4: Pay By Bills</span>
                                                    <span className='normal-text flex'><b>3</b> Select 3: Enter Business Number</span>
                                                    <span className='normal-text flex'><b>4</b> Enter Business no: 11111</span>


                                                </div>
                                                <div className="flex-c">
                                                    <span className='normal-text flex'><b>5</b> Enter Reference no: 11111</span>
                                                    <span className='normal-text flex'><b>6</b> Enter Reference no: 11111</span>
                                                    <span className='normal-text flex'><b>7</b> Enter Amount :10000</span>
                                                    <span className='normal-text flex'><b>8</b> Enter Enter Your Tigo Pesa PIN</span>
                                                    <span className='normal-text flex'><b>9</b> Enter 1 to submit</span>
                                                </div>
                                            </div>
                                        }
                                    </div>



                                }


                            </div>



                        </div>
                    }

                    <div className="flex-c flex-centered pad-10">

                        <p className="text-c poppins-medium">Most of Our courses span up two one year. However your extra dedication can speed up the time-frame </p>
                    </div>

                </div>

            </div>        
    )

}

export default RegisterForm