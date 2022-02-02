import './newUser.css'

const NewUser = () => {
  return (
          <div className='newUser'>
             <h1 className="newUserTitle">New User</h1>
             <form action="" className="newUserForm">
                 <div className="newUserItem">
                     <label>Username</label>
                     <input type="text" placeholder='Jhon' />
                 </div>
                 <div className="newUserItem">
                     <label>Full Name</label>
                     <input type="text" placeholder='Jhon Newman' />
                 </div>
                 <div className="newUserItem">
                     <label>Email</label>
                     <input type="email" placeholder='Jhon@gmail.com' />
                 </div>
                 <div className="newUserItem">
                     <label>Password</label>
                     <input type="Password" placeholder='Password' />
                 </div>
                 <div className="newUserItem">
                     <label>Phone</label>
                     <input type="tel" placeholder='+216 23060400' />
                 </div>
                 <div className="newUserItem">
                     <label>Address</label>
                     <input type="text" placeholder='New York | USA' />
                 </div>
                 <div className="newUserItem">
                     <label>Gender</label>
                     <div className="newUserGender">
                       <input type="radio" id='male' value='male' name='gender' />
                       <label for="male">Male</label>
                       <input type="radio" id='female' value='female' name='gender' />
                       <label for="female">Female</label>
                       <input type="radio" id='others' value='others' name='gender' />
                       <label for="others">Others</label>
                     </div>
                 </div>
                 <div className="newUserItem">
                   <label>Active</label>
                   <select name="active" id="active" className="newUserSelect">
                       <option value="yes">Yes</option>
                       <option value="no">No</option>
                   </select>
                 </div>
                 <button className="newUserButton">Create</button>
             </form>
          </div>
  );
};

export default NewUser;
