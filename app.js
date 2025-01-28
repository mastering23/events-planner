const state = () =>{

};

const getEvents = async () => {
  try {
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2109-CPU-RM-WEB-PT/events`);
    const repoEventObjs = await response.json();    
    console.log(repoEventObjs); 
    const getEventsRepo = repoEventObjs.result; 
    console.log(getEventsRepo); 
  } catch (err) {
    console.log(err);
  }
};

getEvents();
