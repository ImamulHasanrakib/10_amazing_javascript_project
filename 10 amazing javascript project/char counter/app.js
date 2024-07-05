function calculateStatistics() {
  // Get the text from the text area
  const text = document.getElementById('text-area').value

  // Calculate the statistics
  const totalCharacters = text.length
  const totalWords = text.trim().split(/\s+/).length
  const totalSpaces = text.split(' ').length - 1
  const totalParagraphs = text.split('\n').length
  const totalSentences = text.split(/[.!?]+/).length - 1

  // Update the table with the statistics
  document.getElementById('total-characters').innerText = totalCharacters
  document.getElementById('total-words').innerText = totalWords
  document.getElementById('total-spaces').innerText = totalSpaces
  document.getElementById('total-paragraphs').innerText = totalParagraphs
  document.getElementById('total-sentences').innerText = totalSentences
}
