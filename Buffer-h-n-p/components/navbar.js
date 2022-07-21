// let navbar=()=>{
//     return `<h1><a href="index.html">News App</a></h1>
//     <input type="text" id="search_input" >`
// }
// export default navbar

let navbar=()=>{
    return  `<div class="container">
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Buffer <img class="logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDgwMCI+DQo8cGF0aCBmaWxsPSIjM2E3NWM0IiBkPSJtMCwwaDEyMDB2ODAwaC0xMjAweiIvPg0KPHBhdGggZmlsbD0iI2Y5ZGQxNiIgZD0ibTAsNDAwaDEyMDB2NDAwaC0xMjAweiIvPg0KPC9zdmc+DQo=" alt=""></a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tools
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Publishing</a></li>
                <li><a class="dropdown-item" href="#">Analitics</a></li>
                <li><a class="dropdown-item" href="#">Engagment</a></li>

                
                <!-- <li><hr class="dropdown-divider"></li> -->
                <li><a class="dropdown-item" href="#">Start Page</a></li>
              </ul>
            </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Pricing</a>
          </li>
          <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Blog</a>
            </li>
        
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Customers</a>
            </li>
        </ul>
        <form class="d-flex" role="search">
          <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
        <a href="">Log In</a>
        <button type="button" class="btn btn-primary">Get Standered Now</button>
        </form>
      </div>
    </div>
  </nav>
  </div>
    `
}
export default navbar