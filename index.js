const homeScoreEl = document.getElementById('score--home')
const guestScoreEl = document.getElementById('score--guest')

const btnAddOne = document.getElementById('score-btn-1')
const btnAddTwo = document.getElementById('score-btn-2')
const btnAddThree = document.getElementById('score-btn-3')

const guestAddOne = document.getElementById('guest-btn-1')
const guestAddTwo = document.getElementById('guest-btn-2')
const guestAddThree = document.getElementById('guest-btn-3')


const newGameBtn = document.getElementById('new--game')
let homeScore = 0
let guestScore = 0


btnAddOne.addEventListener('click', function() {
    homeScore++
    homeScoreEl.textContent = homeScore
})

btnAddTwo.addEventListener('click', function() {
    homeScore += 2 
    homeScoreEl.textContent = homeScore
})

btnAddThree.addEventListener('click', function() {
    homeScore += 3 
    homeScoreEl.textContent = homeScore
})


guestAddOne.addEventListener('click', function() {
    guestScore++
    guestScoreEl.textContent = guestScore
})


guestAddTwo.addEventListener('click', function() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
})


guestAddThree.addEventListener('click', function() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
})

newGameBtn.addEventListener('click', function() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
})