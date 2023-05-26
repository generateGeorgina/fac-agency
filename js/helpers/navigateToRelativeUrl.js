export const navigateToRelativeUrl = (url) => {
  let baseUrl = ''

  if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ) {
    // Local environment
    baseUrl = ''
    window.location.href = url
  } else {
    // GitHub Pages environment
    baseUrl = 'https://generategeorgina.github.io/fac-agency'
    window.location.href = baseUrl + url
  }
}
