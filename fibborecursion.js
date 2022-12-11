let a = 1; b = 1; c = a + b
count = 1
let bool = false
let index = 18
let y = 1; x = 1
function fibbonacci(z){
    if(index == 1 || index == 2){
        return 1
    }
    if(bool == true){
        y += x
        x = y - x
        bool = false
    }
    if(count == index){
        return z
    }
    if(count != index){
        bool = true
        count++
        return fibbonacci(2 * y + x)
    }
}
console.log(fibbonacci(1))