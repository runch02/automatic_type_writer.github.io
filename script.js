// class AutomaticTypeWriter {
//     constructor(userInput) {
//         // this programme is completely dipendant upon the setInterval api to run the main componet of the programme, it should not run automatically when screen gets loaded, it should run when user wants it to run
//         this.flag = false
//         // the programme will start executing the task by the 0th position of the user input, and later this number will increase to keep track of the user input position
//         this.initialUserInputPosition = 0 - 1
//         // user input is required to start the task
//         this.userInput = userInput

//         // console.log(this)
//     }

//     makeFlagTrue() {
//         if (this.userInput.value === " ") {
//             return;
//         } else {
//             this.flag = true
//             return this.flag
//         }
//     }

//     runTypeWriter() {
//         if (this.flag === true) {
//             if (this.initialUserInputPosition >= this.userInput.length - 1) {
//                 document.querySelector("#typing-container").innerHTML = " "
//                 this.initialUserInputPosition = 0 - 1
//             }

//             document.querySelector("#typing-container").innerHTML += this.userInput[this.initialUserInputPosition += 1]
//         }
//     }

// }

// let automaticTypeWriterFirstInstance;

// document.querySelector("form").addEventListener("submit", prevention => {
//     prevention.preventDefault()
//     automaticTypeWriterFirstInstance = new AutomaticTypeWriter(document.querySelector("#user-input"))
//     automaticTypeWriterFirstInstance.makeFlagTrue()
// })

// let interval = setInterval(() => {
//     automaticTypeWriterFirstInstance.runTypeWriter()
// }, 400)










let input = "This Is RUNCH"
let flag = true
let initialUserInputPosition = 0 - 1

let automaticTypeWriter = () => {
    if (flag === true) {
        if (initialUserInputPosition >= input.length - 1) {
            document.querySelector("#typing-container").innerHTML = " "
            initialUserInputPosition = 0 - 1
        }

        document.querySelector("#typing-container").innerHTML += input[initialUserInputPosition += 1]
    }
}

let makeFlagTrue = (keyElement) => {
    if (keyElement.key === "Enter") {
        flag = true
        return flag
    }
}

addEventListener("keydown", keyElement => makeFlagTrue(keyElement))

let interval = setInterval(() => automaticTypeWriter(), 600)

