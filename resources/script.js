class PersonInfo {
    //need to assign an id number to each person for later use
    //starts with 0 so the first person added is 1
    constructor(personId = 0) {
        this.personId = personId;
    }
    //create
    //take in info from form
    //might add other fields later
    //need to check if name or phone number is already included, and reject duplicates -- add this later
    addPerson(first_name, last_name, phone_number) {
        //increment personId so it's a new sequential number for each new person
        this.personId ++;
        //array of person objects that starts empty UNLESS there is already info in localstorage
        let people_list = JSON.parse(localStorage.getItem("people_list"));
        if (people_list === null) {
            people_list = [];
        }
        
        //might add other fields later
        const person = {
            personId: this.personId, 
            //use getElementById to grab input from form fields
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            phone_number: document.getElementById('phone_number').value
        }
        
        //saves to local storage
        //adds the new person object to the array
        people_list.push(person);
        localStorage.setItem("people_list", JSON.stringify(people_list));
        //clear the form so the words just typed don't hang around there
        document.getElementById("addPersonForm").reset();
        newPerson.fetchAllThePeople();

    }

    //read
    //grab all the names/numbers -- loop through object and display them
    fetchAllThePeople() {
        this.item = document.getElementById('people-list');
        let peopleToLoop = '';
        let people_list = JSON.parse(localStorage.getItem("people_list"));
        console.log('the length: ' + people_list.length);

        if (people_list) {
            //change button text, modal headline once there is at least one person in list
            document.getElementById("started-or-contact").innerHTML = "My contacts list";
            document.getElementById("contact-list-label").innerHTML = "My contacts list";
            
            //loop through array of people objects and display properties
            //come back to this to format nicely; don't display the ID

            people_list.forEach(singlePerson => {
                //peopleToLoop += '<tr> <td> ';
                //Don't show ID; just first and last name. So singlePerson.first_name and singlePerson.last_name.
    
                peopleToLoop += `  <div class="row">
                    <div class="col" style="font-weight:bold"> ${singlePerson.first_name} ${singlePerson.last_name}</div>
                    <div class="col" style="text-align:right"> ${singlePerson.phone_number} </div>
                    </div> ` ;
                //peopleToLoop += '</tr> </td> <br>';
            });  
            //for testing
            //this.item.innerHTML = peopleToLoop;
            //console.log(this.item.innerHTML)
        return this.item.innerHTML = peopleToLoop;      
    }
    newPerson.fetchAllThePeople();

    //edit
    //need a way to edit each person's display name and phone number

    //delete
    //need function here to remove name from the collection
    //deletePerson(personId)
    }
    
}

//calls the constructor
const newPerson = new PersonInfo();
//change button text, modal headline once there is at least one person in list
let people_list = JSON.parse(localStorage.getItem("people_list"));
if (people_list) {
    //change button text, modal headline once there is at least one person in list
    document.getElementById("started-or-contact").innerHTML = "My contacts list";
    document.getElementById("contact-list-label").innerHTML = "My contacts list";
    newPerson.fetchAllThePeople();
}

document.getElementById("addPersonForm").addEventListener("submit", function(event) {
    //for testing
    //console.log('Working!'); 
    event.preventDefault();
    newPerson.addPerson();
    //for testing
    //console.log('here is the list:' + newPerson.fetchAllThePeople());
});

//read
//need function here to grab all the camel memes -- loop through camel_memes array and display them
    //maybe count them
    //display in HTML file the images and the count
 //the array of images -- need to start with a few already in here
let camel_memes = ["resources/images/camel_memes/camelmeme1.jpeg",
    "resources/images/camel_memes/camelmeme2.jpeg",
    "resources/images/camel_memes/camelmeme3.jpeg",
    "resources/images/camel_memes/camelmeme4.jpeg",
    "resources/images/camel_memes/camelmeme5.jpeg"];

//in HTML show all the Mike memes I've added
//the array of images -- need to start with a few already in here
let mike_memes = ["resources/images/mike_memes/mikememe1.jpeg",
    "resources/images/mike_memes/mikememe2.jpeg",
    "resources/images/mike_memes/mikememe3.jpeg",
    "resources/images/mike_memes/mikememe4.jpeg",
    "resources/images/mike_memes/mikememe5.jpeg"];

function carousel(memeArray, displayID) {
    //loop through array and display pics    
    renderMemes = [];
                
    if (memeArray.length > 0) {
        for (i = 0; i < memeArray.length; i++) {
            if (i === 0) {
                renderMemes += '<div class="carousel-item active">'
            } else {
                renderMemes += '<div class="carousel-item">'
            }
        renderMemes += '<img class="d-block w-100" src="' + memeArray[i] + '" alt="Slide">';
        renderMemes += '</div>';


    }
        renderMemes += '<p>Click on an image</>';

        document.getElementById(displayID).innerHTML = renderMemes;

    }
    //create
    //need function here to add new meme to the collection
    //is there a way to check if the one being added is already included? not sure

    //edit
    //don't think an edit option is needed

    //delete
    //need function here to remove meme from the collection
}




document.getElementById('launchCamelCarousel').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('hide-them-both').style.display = "none";
    //call the carousel function; pass in name of array, location for display
    carousel(camel_memes, "display-all-the-camels");
})  

document.getElementById('launchMikeCarousel').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('hide-them-both').style.display = "none";
    //call the carousel function; pass in name of array, location for display
    carousel(mike_memes, "display-all-the-mikes");
})
    
    //used this just to get images on the page so I could see something
    //loop through array and display pics  
    /*                  
    if (this.mike_memes.length > 0) {
        //need variable here instead of document.body.appendchild so I can put this where I want
        let displayAllTheMikes = document.getElementById('display-all-the-mikes')
        for (i = 0; i < this.mike_memes.length; i++) {
            //need to use Image() and appendChild to add to dom
            let currentMikeMeme = new Image();
            currentMikeMeme.src = this.mike_memes[i];
            displayAllTheMikes.appendChild(currentMikeMeme);
        }
*/

//create
//need function here to add new meme to the collection
//is there a way to check if the one being added is already included? not sure

//edit
//don't think an edit option is needed

//delete
//need function here to remove meme from the collection







//need function to allow user to make random choice
//maybe also display grid of memes so user can choose specific one -- radio buttons?

//need way to send meme as text message


//how will this display all the people who need to receive texts? maybe list:
    // person name (no need to display phone number)
    // camel or mike? click image to choose which kind of meme to send
        //that click leads to display of all the memes in that category
        //can click radio button to make choice OR can click pick-one button for random choice

//is there a way for this app to remind me it's Wednesday? maybe it can text me on Wednesday morning.
