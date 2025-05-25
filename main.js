let button_result = document.querySelector('.button-result')

button_result.addEventListener('click' , ()=>{
  let resultinput = document.querySelector('.result-input').innerHTML 

let resultoperation = document.querySelector('.result-operation')

resultoperation.innerHTML = eval(resultinput)

})


let valueinput = document.querySelectorAll('.value-input')

valueinput.forEach((inputElement)=>{
  inputElement.addEventListener('click' , ()=>{
    let resultinput = document.querySelector('.result-input')
    resultinput.innerHTML += inputElement.value
  })
})


let notvalue = document.querySelector('.not-value')

notvalue.addEventListener('click' , ()=>{
  let resultinput = document.querySelector('.result-input')
  resultinput.innerHTML = ''
  let resultoperation = document.querySelector('.result-operation')
  resultoperation.innerHTML = ''
})


