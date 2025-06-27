import logo from '../assets/images/avatar-jessica.jpeg'
import SocialLinks from './SocialLinks'
const Avatar = () => {
  return (
     <div className='avatar'>
      <img src={logo}></img>
      <p className='name'>Jessica Randall</p>
      <p className='location'>London, United Kingdom</p>
      <p className='Role'>"Front-end developer and avid-reader."</p>
      <SocialLinks />
     </div>
     
  )
}

export default Avatar
