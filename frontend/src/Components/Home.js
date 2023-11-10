import React,{useState} from 'react'
import '../Styles.css'
import {Carousel} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const successful = () => {
    if (email && password) {
      let path = '/courses';
      navigate(path);
    }
  };
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsButtonDisabled(!inputEmail || !password);
  };
  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    setIsButtonDisabled(!email || !inputPassword);
  };
  return (
    <div className=''>
      <div className='backsty vh '>
        <br></br>
        <div className='d-flex justify-content-center '>
          <Carousel className='caros'>
            <Carousel.Item className='car1 text-center'>
              <h3>"Book Haven has set my career!"</h3>
              <p>--Raiken--</p>
              <br></br><br></br>
            </Carousel.Item>
            <Carousel.Item className='car2 text-center'>
              <h3>"Thank you!!!"</h3>
              <p>--Yamini--</p>
              <br></br><br></br>
            </Carousel.Item>
            <Carousel.Item className='car3 text-center'>
              <h3>"Learning to be better!"</h3>
              <p>--Rajat--</p>
              <br></br><br></br>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='row container-fluid'>
          <div className='container-fluid col-lg-6'>
            <div className='justify-content-center px-5 pb-5'>
              <form className='justify-content-center form' required>
                <h2 className='maintext'>Login Page</h2><br></br>
                <div>
                  <label htmlFor='email' className='labels'><h5>Email:</h5></label>
                  <input type='email' placeholder='Enter Email Address' value={email} onChange={handleEmailChange} className='form-control inputmade' name='Email' autoFocus='True' required />
                </div><br></br>
                <div>
                  <label htmlFor='password' className='labels'><h5>Password:</h5></label>
                  <input type='password' placeholder='Enter Password' value={password} onChange={handlePasswordChange} className='form-control inputmade' name='Password' required></input>
                </div><br></br>
                <div>
                  <label htmlFor='checkbox' className='labels'> Remember Me:&ensp;</label>
                  <input type='checkbox' className='custom-control custom-checkbox'></input>
                </div><br></br>
                <div className='d-grid px-3'>
                  <button className='btn btn-success' type='submit' onClick={successful} disabled={isButtonDisabled}>Go to Courses</button>
                </div>
              </form><br></br>
            </div>
          </div>
          <div className='container-fluid col-lg-6 px-5 pr-5 pt-5'>
            <h2 className='intro1'>Welcome to,Book Haven!</h2><br></br>
            <h3 className='intro2'>Reach higher levels with Your Education Universe!</h3><br></br>
            <div className='row'>
              <div className='col-4 rank'>
                Global Rank
              </div>
              <div className='col-4 rank'>
                Country Rank
              </div>
              <div className='col-4 rank'>
                Category Rank
              </div>
            </div><br></br>
            <div className='row'>
              <div className='col-4'>
                <h1 className='ranks'>#129</h1>
              </div>
              <div className='col-4'>
                <h1 className='ranks'>#102</h1>
              </div>
              <div className='col-4'>
                <h1 className='ranks'>#37</h1>
              </div>
            </div><br></br>
            <div className='row'>
              <div className='col-4'>
                <h4 className='meterred'>↓ 43</h4>
              </div>
              <div className='col-4'>
                <h4 className='meter'>↑ 52</h4>
              </div>
              <div className='col-4'>
                <h4 className='meter'>↑ 27</h4>
              </div>
            </div><br></br>
          </div>
        </div>
        <footer>
        <h3 className='text-center text-secondary bg-dark foot'>Developed by Book Haven Group of Industries PVT. LTD.</h3>
        </footer>
      </div>
    </div>
  );
  
}

export default Home