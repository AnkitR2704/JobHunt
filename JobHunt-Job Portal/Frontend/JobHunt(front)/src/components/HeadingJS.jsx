

function HeadingJS(){
    return(
        <div className="head">
         <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h3><i>JobHunt</i></h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link"  href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Search Job</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Applied Job</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Profile</a>    
        </li>
      
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

export default HeadingJS;