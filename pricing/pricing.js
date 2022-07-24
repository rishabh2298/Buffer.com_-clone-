import navbar from "../Buffer-Home-Page/components/navbar.js"
document.getElementById('navbar').innerHTML = navbar()

import footer from "../Buffer-Home-Page/components/footer.js"
document.getElementById('footer').innerHTML = footer()



let container = document.getElementById('p1')
let text = document.getElementById('t1')
let container1 = document.getElementById('p2')
let text1 = document.getElementById('t2')
let container2 = document.getElementById('p3')
let text2 = document.getElementById('t2')



let monthly=()=>{

container.innerHTML=null
container.innerText=6
container1.innerHTML=null
container1.innerText=12
container2.innerHTML=null
container2.innerText=120

text.innerHTML=null
text.innerText='Add additional channels for $6/month Billed monthly'
text1.innerHTML=null
text1.innerText='Add additional channels for $12/month Billed monthly'
text2.innerHTML=null
text2.innerText='Add additional channels for $12 $6/month Billed monthly'



}

let yearly=()=>{

    container.innerHTML=null
    container.innerText=5
    container1.innerHTML=null
    container1.innerText=10
    container2.innerHTML=null
    container2.innerText=100
    
    
text.innerHTML=null
text.innerText='Add additional channels for $5/month Billed at $72 $60/year'
text1.innerHTML=null
text1.innerText='Add additional channels for $10/month Billed at $144 $120/year'
text2.innerHTML=null
text2.innerText='Add additional channels for $10 $5/month Billed at $1440 $1200/year'

    
}
    
    

document.getElementById('monthly').addEventListener('click',monthly)
document.getElementById('yearly').addEventListener('click',yearly)