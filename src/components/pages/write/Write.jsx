import "./write.css"

function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://images.unsplash.com/photo-1677145918704-fe31d5a2e8e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i class="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text"  placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story ..." className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

export default Write
