import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '@/includes/firebase'

export function transformYouTubeLink(currentLink) {
  const videoID = extractVideoID(currentLink)
  const embedURL = `https://www.youtube.com/embed/${videoID}?rel=0`
  return embedURL
}

export function extractVideoID(link) {
  let videoID = ''

  // Regular expression pattern to match the video ID
  const pattern =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|[^#]*[?&]v=|youtu\.be\/|[^#]*[?&]vi=))([^?&"'>]+)/

  // Extract the video ID using the regular expression
  const match = link.match(pattern)
  if (match && match[1]) {
    videoID = match[1]
  } else {
    // Check if the link is in the youtu.be pattern
    const youtuPattern = /^https?:\/\/youtu.be\/([\w-]{11})/
    const youtuMatch = link.match(youtuPattern)
    if (youtuMatch && youtuMatch[1]) {
      videoID = youtuMatch[1]
    }
  }

  return videoID
}

export function getThumbnail(url) {
  return `http://img.youtube.com/vi/${getVideoID(url)}/0.jpg`
}
function getVideoID(url) {
  let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  let match = url.match(regExp)
  return match && match[7].length == 11 ? match[7] : false
}

export async function downloadFile(fileName) {
  const fileRef = ref(storage, `texts/${fileName}.md`)

  try {
    const url = await getDownloadURL(fileRef)

    // Fetch the Markdown content from the URL
    const response = await fetch(url)
    const markdownText = await response.text()

    // Perform further actions with the Markdown text
    return markdownText
  } catch (error) {
    // Handle error
    console.log('Error retrieving Markdown file:', error)
    return ''
  }
}

export async function getJSONData(fileName) {
  const fileRef = ref(storage, fileName)

  try {
    const url = await getDownloadURL(fileRef)

    const response = await fetch(url)
    const jsonText = await response.text()

    // Perform further actions with the Markdown text
    return JSON.parse(jsonText)
  } catch (error) {
    // Handle error
    console.error('Error retrieving Markdown file:', error)
    return ''
  }
}

// export async function getYoutubeCaption(currentVideo) {
//   const apiKey = import.meta.env.VITE_API_KEY_YOUTUBE
//   const videoId = extractVideoID(currentVideo)

//   const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`

//   await fetch(apiUrl)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok')
//       }
//       return response.json()
//     })
//     .then((data) => {
//       const video = data.items[0]
//       const description = video.snippet.description
//       // Process the description as needed
//       return description
//     })
//     .catch((error) => {
//       console.error('Error fetching video description:', error)
//     })
// }

export async function getYoutubeCaption(currentVideo) {
  try {
    const apiKey = import.meta.env.VITE_API_KEY_YOUTUBE
    const videoId = extractVideoID(currentVideo)

    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`

    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    const video = data.items[0]
    const description = video.snippet.description

    return description
  } catch (error) {
    console.error('Error fetching video description:', error)
    throw error // Rethrow the error for handling at a higher level
  }
}
