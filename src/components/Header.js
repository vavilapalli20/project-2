import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          navigate("/browse")
        } else {
            dispatch(removeUser());
            navigate("/")
        }
      });
},[]); 

  return (
    <div className='absolute z-10 flex justify-between w-full'>
      <div className=''>
        <img className='w-[200px]' src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940' alt='logo'></img>
      </div>
      {user && (
      <div>
        <ul className='flex' >
          <li><img className='w-8 h-8' src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940' alt='logo'></img></li>
          <li><button className='' onClick={handleSignOut}>Sign Out</button></li>
        </ul>
      </div>
      )}
    </div>
  )
}

export default Header