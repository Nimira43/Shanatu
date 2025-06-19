import { today } from './date'

export function getUrlDate() {
  const urlParams = new URLSearchParams(window.location.search)
  const date = urlParams.get('date')

  return date ? new Date(date) : today()
}

