let signup_part = () => {
    return `<div id="logo1">
    <img
      src="https://static.buffer.com/login/public/img/buffer-logo.svg"
      alt="logo1"
    />
  </div>
  <h1>Let's get your account set up</h1>
  <form>
    <label>Email</label><br />
    <input id="email" type="email" /><br />
    <label>Create a Password</label><br />
    <input id="password" type="password" />
    <div id="captcha1">
      <div>
        <input type="checkbox" required />
        <label>I'm not a robot</label>
      </div>
      <div>
        <img
          src="https://cms-assets.tutsplus.com/uploads/users/413/posts/33752/preview_image/recaptcha_image.jpg"
          alt="captcha"
        />
        <p>reCAPTCHA</p>
        <p>Privacy-Terms</p>
      </div>
    </div>
    <input id="submit" type="submit" vlaue="Sign Up" />
    <div id="terms">
      <p>I agree to <span>Buffer's Terms of Service</span></p>
      <p>Already have an account?</p>
    </div>
  </form>`
}

let signup_code = (email,pass) => {
    let data = JSON.parse(localStorage.getItem("userData")) || []

    class sign_up{
        constructor(email,password){
            this.email = email
            this.password = password
        }
        check_id(){
            for(let x of data){
                if(x.email==this.email){
                    return false;
                }
            }
            return true;
        }
        add_data(){
            if(this.check_id()){
                data.push(this);
                localStorage.setItem("userData",JSON.stringify(data));
                alert("Sign-Up has done successfully ! ! !")
                window.location.href="login.html"
                return;
            }
            else{
                alert("\n"+"This Id is already Exist !!!"+"\n"+" Please Log-In")
            }
        }
    }
    let user = new sign_up(email,pass)
    user.add_data()
}


// Log-In Section 

let login_part = () => {
  return `        <div id="logo">
  <img
    src="https://static.buffer.com/login/public/img/buffer-logo.svg"
    alt="logo"
  />
</div>
<h1>Log in</h1>
<form>
    <label>Email Address</label><br>
    <input id="email" type="email" required><br>
    <label>Password</label><br>
    <input id="password" type="password" required><br>
    <input id="submit" type="submit" value="Log In">
    <div>
        <p>Create an account</p>
        <p>Forgot your password?</p>
    </div>
</form>
<p>We no longer support social sign on. Please click here to set
     your password and access your account.
</p>
<p>Terms of Service <span>.</span> Privacy Policy <span>.</span> Security</p>`
}


let login_code = (email,pass) => {
    let data = JSON.parse(localStorage.getItem("userData"));

    class log_in{
      constructor(email,password){
        this.email = email;
        this.password = password;
      }
      check_id(){
        for(let x of data){
          if(x.email===this.email && x.password===this.password){
            return true;
          }
        }
        return false;
      }
      get_entry(){
        if(this.check_id()){
          alert("Logged in Successfully ! ! !")
          localStorage.setItem("userID",JSON.stringify(this))
          window.location.href = "../Buffer-Home-Page/index.html"
          return;
        }
        else{
          alert("Wrong credentials"+"\n"+"        or"+"\n"+"Do Sign-Up First")
          return;
        }
      }
    }
    let user = new log_in(email,pass)
    user.get_entry();
}


export { signup_part,signup_code,login_part,login_code }