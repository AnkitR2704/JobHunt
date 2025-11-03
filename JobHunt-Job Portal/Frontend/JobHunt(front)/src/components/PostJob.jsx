
function PostJob(){
    return(
        <div className='viewed'>
          <label htmlFor="">Company Name :</label>
          <input type="text" placeholder='Enter Company Name '/><br /><br />
          <label htmlFor="">Job Role :</label>
          <input type="text" placeholder='Enter Job Role'/><br /><br />
          <label htmlFor="">Qualifications :</label>
          <input type="text" placeholder='Enter Qualifications'/><br /><br />
          <label htmlFor="">Experience :</label>
          <select name="Experience" id="dropdown">
            <option value="">---Select Experience---</option>
            <option value="">Freshers</option>
            <option value="1-2 years">1-2 years</option>
            <option value="2-3 years">2-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="2-3 years">5-8 years</option>
            <option value="3-5 years">8-10+ years</option>
          </select><br /><br />
          <label htmlFor="">Location :</label>
          <input type="text" placeholder='Enter Location'/><br /><br />
          <label htmlFor="">Job Type :</label>
          <input type="radio"  />Full Time 
          <input type="radio"  />Part Time <br /><br />
          <label htmlFor="">Shifts :</label>
          <input type="radio"  />Day Shift
          <input type="radio"  />Rotational Shift <br /><br />
          <label htmlFor="">Skills :</label>
          <textarea name="" id="textarea" ></textarea><br />
          <button>Submit</button>
        </div>
    );
}
export default PostJob;