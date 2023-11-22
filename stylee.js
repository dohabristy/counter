let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)

arr.map((item)=>{
    console.log(item.dataset.count);
    let count = 0 
    function counterup(){
        count++
        item.innerHTML = count
        if (item.dataset.count == count){
            clearInterval(stop)
        }
    }
    let stop = setInterval(
        function(){
            counterup()
        },1000/item.dataset.speed
    )
})