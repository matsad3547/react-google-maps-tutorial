// this allows the api key to be contained in an environment variable that is outside version control so that an api key does not end up on github
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

//this function could be called with string parameters that are libraries that could then be appended to the string, for instance
export const getGoogleUrl = () => `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`

// The following script is based on this gist: https://gist.github.com/auser/1d55aa3897f15d17caf21dc39b85b663

export const addScriptTag = url => new Promise( (resolve, reject) => {
  let tag = document.createElement('script'),
      body = document.getElementsByTagName('body')[0]

  tag.type = 'text/javascript'
  tag.async = false
  tag.defer = false

  tag.onload = resolve
  tag.onerror = reject

  tag.src = url

  // CYA for Internet explorer
  tag.onreadystatechange = () => {
    if (this.readystatechange === 'complete') {
      resolve()
    }
    else {
      reject()
    }
  }

  body.appendChild(tag)
  return tag
})
