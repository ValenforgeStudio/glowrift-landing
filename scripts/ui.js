function openCalendarModal() {
  document.getElementById('calendar-modal-wrapper').classList.remove('hidden');
}

function closeCalendarModal() {
  document.getElementById('calendar-modal-wrapper').classList.add('hidden');
}

function selectMonth(month) {
  alert(`Month selected: ${month}`);
}
