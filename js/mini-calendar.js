import { today, subtractMonths, addMonths, generateMonthCalendarDays, isTheSameDay } from './date.js'
import { getUrlDate } from './url.js'

const calendarDayListItemTemplateElement = document.querySelector('data-template=mini-calendar-day-list-item')

const dataFormatter = new Intl.DateTimeFormat("en-GB", {
  month: 'long',
  year: 'numeric'
})

export function initMiniCalendars() {
  const calendataElements = document.querySelectorAll(['[data-mini-calendar]'])

  for (const calendarElement of calendarElements) {
    initMiniCalendar(calendarElement)
  }
}

function initMiniCalendar(calendarElement) {}
function refreshDateElement(parent, data) {}
function refreshDayListElement(parent, miniCalendarDate, selectDate) {}