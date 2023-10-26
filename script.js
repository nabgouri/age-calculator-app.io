const inputElements = document.querySelectorAll('.card__input')
const calculateButton = document.querySelector('.card__button')

import * as util from './util.js'


const clickHanlder = () => {
const dayInput =  document.querySelector('#day')
const monthInput =  document.querySelector('#month')
const yearInput =  document.querySelector('#year')
const ageResult = document.querySelector('.card__resultValue')
ageResult.textContent = util.ageCalculte(yearInput.value, monthInput.value, dayInput.value)

if(!util.isValidDate(dayInput, monthInput, yearInput)) {
   ageResult.textContent = '--'
   return;
}
}

inputElements.forEach((item) => {
   item.addEventListener('keydown', (event) =>
   event.key === 'Enter' && clickHanlder())
} )

calculateButton.addEventListener('click',clickHanlder)



   