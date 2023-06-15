export function transformYouTubeLink(currentLink) {

  const videoID = extractVideoID(currentLink)
  const embedURL = `https://www.youtube.com/embed/${videoID}`
  return embedURL
}

function extractVideoID(link) {
  let videoID = ''

  // Regular expression pattern to match the video ID
  const pattern = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|[^#]*[?&]v=|youtu\.be\/|[^#]*[?&]vi=))([^?&"'>]+)/

  // Extract the video ID using the regular expression
  const match = link.match(pattern);
  if (match && match[1]) {
    videoID = match[1]
  } else {
    // Check if the link is in the youtu.be pattern
    const youtuPattern = /^https?:\/\/youtu.be\/([\w-]{11})/;
    const youtuMatch = link.match(youtuPattern);
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
  return (match && match[7].length == 11) ? match[7] : false
}