import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './user.css';
const User = () => {
  return (
  
       <div className='user'>
          <div className="userTitleContainer">
              <h1 className="userTitle">Edit User</h1>
              <Link to="/newUser">
               <button className="userAddButton">Create</button>
              </Link>
          </div>
          <div className="userContainer">
              <div className="userShow">
                  <div className="userShowTop">
                       <img src="https://images.pexels.com/photos/8041320/pexels-photo-8041320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                         alt=""
                         className='userShowImg' />
                       <div className="userShowTopTitle">
                         <span className="userShowUsername">Selena Gomez</span>
                         <span className="userShowJobTitle">Software Engineer</span>
                       </div>
                  </div>
                  <div className="userShowBottom">
                      <span className="userShowBottomTitle">Account Details</span>
                      <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">SelenaGomez99</span>
                      </div>
                      <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">10.12.1997</span>
                      </div>
                      <span className="userShowBottomTitle">Contact Details</span>
                      <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+216 23060400</span>
                      </div>
                      <div className="userShowInfo">
                        <MailOutline className='userShowIcon'/>
                        <span className="userShowInfoTitle">SelenaGomez99@hotmail.com</span>
                      </div>
                      <div className="userShowInfo">
                        <LocationSearching className='userShowIcon'/>
                        <span className="userShowInfoTitle">New York USA</span>
                      </div>
                  </div>
              </div>
              <div className="userUpdate">
                  <span className="userUpdateTitle">Edit</span>
                  <form action="" className="userUpdateForm">
                      <div className="userUpdateLeft">
                          <div className="userUpdateItem">
                              <label htmlFor="">Username</label>
                              <input type="text"
                                     placeholder='SelenaGomez99'
                                     className="userUpdateInput" 
                              />
                          </div>
                          <div className="userUpdateItem">
                              <label htmlFor="">FullName</label>
                              <input type="text"
                                     placeholder='Selena Gomez'
                                     className="userUpdateInput" 
                              />
                          </div>
                          <div className="userUpdateItem">
                              <label htmlFor="">Email</label>
                              <input type="email"
                                     placeholder='SelenaGomez@hotmail.com'
                                     className="userUpdateInput" 
                              />
                          </div>
                          <div className="userUpdateItem">
                              <label htmlFor="">Phone</label>
                              <input type="tel"
                                     placeholder='+21623060400'
                                     className="userUpdateInput" 
                              />
                          </div>
                          <div className="userUpdateItem">
                              <label htmlFor="">Address</label>
                              <input type="text"
                                     placeholder='New York | USA'
                                     className="userUpdateInput" 
                              />
                          </div>
                      </div>
                      <div className="userUpdateRight">
                          <div className="userUpdateUpload">
                              <img className='userUpdateImg'
                               src="https://images.pexels.com/photos/8041320/pexels-photo-8041320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt=""
                                 />
                                 <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                                 <input type="file" id="file" style= {{display:"none"}} />
                          </div>
                          <button className="userUpdateButton">Update</button>
                      </div>
                  </form>
              </div>
          </div>
       </div>

  );
};

export default User;
