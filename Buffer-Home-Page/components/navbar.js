  // let navbar=()=>{
  //     return `<h1><a href="index.html">News App</a></h1>
  //     <input type="text" id="search_input" >`
  // }
  // export default navbar

  let navbar=()=>{
      return  `<div class="container">
      <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> <i class="fa-solid fa-layer-group"></i>Buffer <img class="logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCI+DQo8cGF0aCBmaWxsPSIjM2E3NWM0IiBkPSJtMCwwaDEyMDB2ODAwaC0xMjAweiIvPg0KPHBhdGggZmlsbD0iI2Y5ZGQxNiIgZD0ibTAsNDAwaDEyMDB2NDAwaC0xMjAweiIvPg0KPC9zdmc+DQo=" alt=""></a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-a">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tools
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="../pricing/publish.html" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                </svg> <h6>Publishing</h6></a>
                <p class ="Publishing">Plan,collobrate,and publish </br>thumb-stopping contant </p></li>

                  <li><a class="dropdown-item" href="../Rishabh/analytics.html" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
                    <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/>
                  </svg> <h6>Analitics</h6></a>
                  <p class ="Publishing">Plan,collobrate,and publish </br>thumb-stopping contant </p></li>

                  <li><a class="dropdown-item" href="../Engage/indexnew.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square-text" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                  </svg> <h6>Engagment</h6> </a>
                  <p class ="Publishing">Plan,collobrate,and publish </br>thumb-stopping contant </p></li>
                 </li>                  
                  <!-- <li><hr class="dropdown-divider"></li> -->
                  <li><a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                </svg> <h6>Start Page </h6> </a>
                    <p class ="Publishing">Plan,collobrate,and publish </br>thumb-stopping contant </p></li>
                 </li>
                </ul>
              </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../pricing/pricing.html">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../blog-page/blog.html">Blog</a>
              </li>
          
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../About%20us/About%20Us-III/About.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="../Rishabh/customers.html">Customers</a>
              </li>
          </ul>
          <form class="d-flex" role="search">
            <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
          <a href="../Rishabh/login.html">Log In</a>
          <button type="button" class="btn btn-primary"><a class="signup" href="../Rishabh/signup.html">Get Started Now</a ></button>
          </form>
        </div>
      </div>
    </nav>
    </div>
      `
  }
  export default navbar