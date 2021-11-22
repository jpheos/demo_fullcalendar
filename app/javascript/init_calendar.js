import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import listPlugin from '@fullcalendar/list';


const initCalendar = () => {
  console.log("je suis dans inicalendar")


  const calendarEl = document.querySelector('#calendar');
  const events = JSON.parse(calendarEl.dataset.events);

  const calendar = new Calendar(calendarEl, {
    plugins: [timeGridPlugin, interactionPlugin],

    initialView: 'timeGridWeek',
    selectable: true,
    events: events,
    select: (selectionInfo) => {
      console.log("JE SUIS LA2021-12-02", selectionInfo);
      console.log(selectionInfo.start);
      console.log(selectionInfo.end);

      const number = prompt("Nombre de participants")

      console.log("number:", number)

      calendar.addEvent({
        title: 'dynamic event',
        start: selectionInfo.start,
        end: selectionInfo.end
      })
    },
    eventClick: function (info) {
      alert('Event: ' + info.event.title);
      alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      alert('View: ' + info.view.type);

      // change the border color just for fun
      info.el.style.borderColor = 'red';
    }
  });
  calendar.render();


  console.log(calendar);

}

export default initCalendar


