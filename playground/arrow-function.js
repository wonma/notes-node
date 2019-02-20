// statement syntax

const square = (x) => {
    const result = x * x
    return result
}


// expression syntax
const square2 = x => x * x

// filter나 forEach 쓸 때, 단순히 바로 리턴을 해야한다면 이게 유용함.
// argumenet가 1개라면 괄호도 필요없음. 

console.log(square(9))

const user = {
    name: 'wonmi',
    sayHi () {
        console.log(arguments) // == {'0': 'a', '1': 'b'...} 그때 그때 집어넣은 아규먼트로 조작하자는거임
        console.log(`Hi, ${this.name}`)
        console.log(arguments[0]) // == 'ba'
        console.log(arguments[1]) // == 'bo'
        console.log(arguments[2]) // == 'ya'
    }
}

user.sayHi('ba', 'bo', 'ya')
