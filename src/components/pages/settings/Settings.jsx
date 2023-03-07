import "./settings.css"
import Sidebar from "../../sidebar/Sidebar"


function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
        </div>
        <form action="" className="settingsForm">
            <label htmlFor="">Profile Picture</label>
            <div className="settingsPP">
                <img src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle"></i>   
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Ashu"/>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="ashupratap2094@gamil.com"/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Ashu"/>
                <button className="SettingsSubmit">Update</button>
            
        </form>
      </div>
            <Sidebar/>
      
    </div> 
  )
}

export default Settings
