import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName, setfirstName] = useState('');
  // const [lastName, setlastName] = useState('');

  // console.log(firstName);
  // console.log(lastName);
  // const changeFirstHandler = (event) => {
  //   console.log("First changed to");
  //   setfirstName(event.target.value)
  // }
  // const changeSecondHandler = (event) => {
  //   console.log("Second changed to");
  //   setlastName(event.target.value)
  // }

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: "" });

  console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value   1 way

        [name]: type === "checkbox" ? checked : value
      }
    });
  }
    function submitHandler(event){
      event.preventDefault();
      //print
      console.log("Finally printing the entireform ka data.....");
      console.log(formData);
    }

  return (
    <div className="App">
    
      <form onSubmit={submitHandler}>
      <br />
      
      <label htmlFor="firstname">First Name </label>
        <input type='text'
          placeholder='First Name'
          onChange={changeHandler}
          name='firstName'
          id='firstname'
          value={formData.firstName}
        />

        <br /> <br />
        <label htmlFor="lastname">Last Name </label>
        <input type="text"
          placeholder='Last Name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
          id='lastname'
        />
        <br /> <br />
        <label htmlFor="email"> Enter Email </label>
        <input type="email"
          placeholder='Enter your Email here'
          onChange={changeHandler}
          name='email'
          value={formData.email} 
          id='email'
          />
        <br /><br />

        <label htmlFor="comments">Any Comments </label>
        <textarea
          placeholder='Enter your Comments here'
          onChange={changeHandler}
          name='comments'
          value={formData.comments} 
            id='comments'
          />
        <br /><br />

        <input type="checkbox"
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible} />
        <label htmlFor='isVisible'>Am I visible ?</label>
        <br /><br />

        <fieldset>
          <legend>Mode:</legend>
          <input type="radio"
            onChange={changeHandler}
            name="mode"
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"} />
          <label htmlFor="Online-Mode">Online-Mode</label>

          <input type="radio"
            onChange={changeHandler}
            name="mode"
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline-Mode</label>
        </fieldset>

        <label htmlFor="favCar">Tell me Your Favourite Car </label>
        <select
          name='favCar'
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}>

          <option value="volvo">Volvo</option>
          <option value="mercedes">Mercedes</option>
          <option value="tesla">Tesla</option>
          <option value="audi">Audi</option>
          <option value="fortuner">Fortuner</option>

        </select>
<br /><br />

        {/* <input type="submit" value='submit' /> */}

        <button>Submit</button>





      </form>
    </div>
  );
}

export default App;
