const baseUrl = 'https://63a0c7d224d74f9fe8416459.mockapi.io/api/v1/events';

export const fetchEventsList = () =>
  fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return res;
  });

export const createEvent = (eventData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });

export const deleteEvent = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      alert("Internal Server Error. Can't delete event");
    }
  });
