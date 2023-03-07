const eventsArray = [
    {
      id: "1",
      title: "Wedding",
      price: 1500.0,
    },
    {
      id: "2",
      title: "Graduation",
      price: 1500.0,
    },
    {
      id: "3",
      title: "Quince",
      price: 1500.0,
    },
  ];
  
  function getEventsData(id) {
    let eventData = eventsArray.find((event) => event.id === id);
  
    if (eventData === undefined) {
      console.log("Event data does not exist for ID: " + id);
      return undefined;
    }
    return eventData;
  }
  
  export { eventsArray, getEventsData };
  