/*
Linting is a process by which text is evaluated and improved by an application.

In this project, I create a miniature version of a linter using array methods.

This is the same type of work that word processing software does.
*/

const story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.'

const overusedWords = ['really', 'very', 'basically']

const unnecessaryWords = ['extremely', 'literally', 'actually']

// Split the string into individual words
const storyWords = story.split(' ')

// Uncomment code below to check string split
// console.log(storyWords);

// Filter out unnecessary words
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word))

// Check if method in betterWords works
// console.log(betterWords);

// Calculate the number of times each overused word appears
let reallyCount = 0
let veryCount = 0
let basicallyCount = 0

for (let i = 0; i < storyWords.length; i++) {
  const word = storyWords[i]
  if (word === 'really') {
    reallyCount++
  } else if (word === 'very') {
    veryCount++
  } else if (word === 'basically') {
    basicallyCount++
  }
}

// Calculate how many sentences are in the paragraph
let sentences = 0

storyWords.forEach(word => {
  if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
    sentences += 1
  }
})

// Uncomment code below to log items to console
// console.log('Word count: ' + storyWords.length);

// console.log('Sentence count: ' + sentences);

// console.log('Number of times each overused word appears: really = ' + reallyCount + ', very = ' + veryCount + ', and basically = ' + basicallyCount);

// Log the betterWords array to the console as a single string
console.log(betterWords.join(' '))
