import { today, subtractMonths, addMonths, generateMonthCalendarDays, isTheSameDay } from './date.js'
import { getUrlDate } from './url.js'

const calendarDayListItemTemplateElement = document.querySelector('data-template=mini-calendar-day-list-item')

const dataFormatter = new Intl.DateTimeFormat("en-GB", {
  month: 'long',
  year: 'numeric'
})

export function initMiniCalendars() {
  const calendarElements = document.querySelectorAll(['[data-mini-calendar]'])

  for (const calendarElement of calendarElements) {
    initMiniCalendar(calendarElement)
  }
}

function initMiniCalendar(calendarElement) {
  const calendarPreviousButtonElement = calendarElement.querySelector('[data-mini-calendar-previous-button]')
  const calendarNextButtonElement = calendarElement.querySelector('[data-mini-calendar-next-button]')

  let selectedDate = getUrlDate()
  let miniCalendarDate = getUrlDate()

  function refreshMiniCalendar() {
    refreshDateElement(calendarElement, miniCalendarDate)
    refreshDayListElement(
      calendarElement,
      miniCalendarDate,
      selectedDate
    )
  }

  calendarPreviousButtonElement.addEventListener('click', () => {
    miniCalendarDate = subtractMonths(miniCalendarDate, 1)
    refreshMiniCalendar()
  })

  calendarNextButtonElement.addEventListener('click', () => {
    miniCalendarDate = addMonths(miniCalendarDate, 1)
    refreshMiniCalendar()
  })
}


function refreshDateElement(parent, data) {}
function refreshDayListElement(parent, miniCalendarDate, selectDate) {}