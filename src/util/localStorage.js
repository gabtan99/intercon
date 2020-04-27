export const isFirstVisit = () => {
  return Boolean(localStorage.isFirstVisit)
}

export const isSubscribed = () => {
  return localStorage.isSubscribed
}

export const setSubscribed = isSubscribed => {
  localStorage.isSubscribed = isSubscribed
}

export const setFirstVisit = () => {
  console.log(localStorage.isFirstVisit === undefined)
  if (localStorage.isFirstVisit === undefined) localStorage.isFirstVisit = true
  else if (Boolean(localStorage.isFirstVisit)) localStorage.isFirstVisit = false
}