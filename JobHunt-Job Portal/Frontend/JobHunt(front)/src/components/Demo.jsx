function Demo(){
    return(
        <div>
        <h1>Welcome LOGAN!!!!</h1>
        <form class="row gy-2 gx-3 align-items-center">
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Username</label>
    <input type="text" class="form-control" id="autoSizingInput" placeholder="Jane Doe" />
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Password</label>
    <input type="password" class="form-control" id="autoSizingInput" placeholder="Jane Doe" />
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInput">Email Id</label>
    <input type="email" class="form-control" id="autoSizingInput" placeholder="Jane Doe" />
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingSelect">Role:</label>
    <select class="form-select" id="autoSizingSelect">
      <option selected>Choose...</option>
      <option value="1">Employer</option>
      <option value="2">Job Seeker</option>
    </select>
  </div>
  
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
        </div>
    );
}

export default Demo;