import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {faUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    confirmedPassword:''
  })

const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
}
const onSubmit = (e) => {
  e.preventDefault()
}

  const {name, email, password, confirmedPassword} = formData;

  return (
    <>
    <section className='heading'>
      <h1>
        <faUser /> Register
      </h1>
      <p>Please create an account.</p>
    </section>

    <section className='form'>
    <form onSubmit={onSubmit}>
      <div className="form-group">
      <input 
      type="text" 
      className="form-control" 
      id='name' 
      name='name' 
      value={name} 
      placeholder="Enter name" 
      onChange={onChange} 
      />
      </div>
      <div className="form-group">
      <input 
      type="email" 
      className="form-control" 
      id='email' 
      name='email' 
      value={email} 
      placeholder="Enter email" 
      onChange={onChange} 
      />
      </div>
      <div className="form-group">
      <input 
      type="password" 
      className="form-control" 
      id='password' 
      name='password' 
      value={password} 
      placeholder="Enter password" 
      onChange={onChange} 
      />
      </div>
      <div className="form-group">
      <input 
      type="confirmedPassword" 
      className="form-control" 
      id='confirmedPassword' 
      name='confirmedPassword' 
      value={confirmedPassword} 
      placeholder="Confirm password" 
      onChange={onChange} 
      />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-block"></button>
      </div>
    </form>
    </section>
    </>
  )
}

export default Register