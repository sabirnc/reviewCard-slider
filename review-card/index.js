const review = [
    {
        id:1,
        img:"https://images.unsplash.com/photo-1559718062-361155fad299?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4Njc3OTU5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        author:"Mohammed Salah",
        job:"Web Devoloper",
        review:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam
        consequuntur excepturi corrupti, quibusdam iure voluptatibus suscipit.
        Fugit ex deleniti quae ad nihil maiores? Nesciunt autem totam accusamus dolorum fugit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero magnam dolorum, dolor perspiciatis commodi quibusdam quos sed, odio est, voluptatem dolorem. `

    },
    {
        id:2,
        img:"https://images.unsplash.com/photo-1496811425508-6d7ebb7ff32c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w4Njc3OTU5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        author:"Jennifer",
        job:"Chef",
        review:
        `im a delicoius chef living in norway and iam very blessed to become a chef . i love cooking lLorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam
        consequuntur excepturi corrupti, `

    },
    {
        id:3,
        img:"https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw4Njc3OTU5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        author:"Thiago Silva",
        job:"CEO",
        review:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam
        consequuntur excepturi corrupti, quibusdam iure voluptatibus suscipit.
        Fugit ex deleniti quae ad nihil maiores? Nesciunt autem totam accusamus dolorum fugit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero magnam dolorum, dolor perspiciatis commodi quibusdam quos sed, odio est, voluptatem dolorem. `

    },
    {
        id:4,
        img:"https://images.unsplash.com/photo-1538978939284-4ecb3fc4ad5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw4Njc3OTU5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        author:"Shamil Mohid",
        job:"Buisness Analyst",
        review:
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam
        consequuntur excepturi corrupti, quibusdam iure voluptatibus suscipit.
        Fugit ex deleniti quae ad nihil maiores? Nesciunt autem totam accusamus dolorum fugit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vero magnam dolorum, dolor perspiciatis commodi quibusdam quos sed, odio est, voluptatem dolorem. `

    }
]

const prevBtn = document.getElementById("next-btn")
const nextBtn = document.getElementById("prev-btn")
const img = document.getElementById("person-img")
const author = document.getElementById("name")
const job = document.getElementById("work")
const comments = document.getElementById("reviews")

let current = 0
document.addEventListener("DOMContentLoaded" , function(){
    const person = review[current]
   
})


function showPerson(){
    img.src = review[current].img
    author.textContent = review[current].author
    job.textContent = review[current].job
    comments.textContent = review[current].review

}
nextBtn.addEventListener("click" , function(){
    current+= 1
    if(current > 3){
        current = 0
    }
    showPerson()
})
prevBtn.addEventListener("click" , function(){
  current-=1
  if(current < 0 ){
    current = 3
  }
  showPerson()
})