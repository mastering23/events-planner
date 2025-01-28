const state = () =>{
  eventsList: []
};



const getEvents = async () => {
  try {
                                        // base url                                                 end point
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events`);
    const repoEventObjs = await response.json();
    // console.log(repoEventObjs); 
    const getEventsRepo = repoEventObjs.data;
    console.log(getEventsRepo);
    state.eventsList = getEventsRepo;
    renderEvents();
  } catch (err) {
    console.log(err);
  }
};
const renderEvents = () => {
  const ol = document.querySelector('ol'); 
  ol.innerHTML = ''; 

  state.eventsList.forEach(itemEvent => {
    const li = document.createElement('li');  

    // Extract the date parts and rearrange them into MM-DD-YYYY
    const year = itemEvent.date.substring(0, 4); 
    // console.log(itemEvent.date.substring(0, 10))testing 
    const month = itemEvent.date.substring(5, 7); 
    const day = itemEvent.date.substring(8, 10); 
    const eventDate = `${month}-${day}-${year}`; 

 
    li.innerHTML = `Event ID: ${itemEvent.id} | Name: ${itemEvent.name} | Description: ${itemEvent.description} | Date: ${eventDate} | Location: ${itemEvent.location}`; 
    ol.appendChild(li); 
    
  });
};

getEvents();
