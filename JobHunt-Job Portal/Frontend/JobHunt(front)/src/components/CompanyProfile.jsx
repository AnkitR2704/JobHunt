

function CompanyProfile(){
    return(
        <div>
            <dl class="row">
  <dt class="col-sm-3">Company Name</dt>
  <dd class="col-sm-9">VCUBE pvt limited</dd>

  <dt class="col-sm-3">Description</dt>
  <dd class="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
  </dd>

  <dt class="col-sm-3">Location</dt>
  <dd class="col-sm-9">Hyderabad, Banglore, Chennai, Mumbai</dd>

  <dt class="col-sm-3 text-truncate">Website</dt>
  <dd class="col-sm-9"><a href="http://www.vcubesoftsolutions.com">www.vcubesoftsolutions.com</a></dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
    </dl>
  </dd>
</dl>
        </div>
    );
}

export default CompanyProfile;