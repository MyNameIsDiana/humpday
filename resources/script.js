class PersonInfo {
    //need to assign an id number to each person for later use
    //starts with 0 so the first person added is 1
    constructor(personId = 0) {
        //array of person objects that starts empty
        this.people_list = [];
        this.personId = personId;
    }
    
    //create method; takes in info from form
    //might add other fields later
    addPerson(first_name, last_name, phone_number) {

        //increment personId so it's a new sequential number for each new person
        this.personId ++;

        //might add other fields later
        const person = {
            personId: this.personId, 
            //use getElementById to grab input from form fields
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            phone_number: document.getElementById('phone_number').value
        }
        //adds the new person object to the array
        this.people_list.push(person);
    }


//need function here to grab all the names/numbers -- loop through object and display them
    //maybe count them
    //should this save/show the last few memes sent? that way it doesn't send the same meme over and over. maybe don't display the history on main page, but instead display if you click on the name
    //display in HTML file
    //loop through array and display pics    
    //read method
    fetchAllThePeople() {
        this.item = document.getElementById('people_list');
        let peopleToLoop = '';
        if (this.people_list.length > 0) {
            ////asdf how do loop through array of objects and display each field in object
            people_list.forEach(people_list => {
                for (let person in people_list) {
                    peopleToLoop += `<tr> <td> ${person.first_name} ${person.last_name} ${person.phone_number} </td> <tr>`;
                }
            });  
        return peopleToLoop;      
    }
   

    
    //create
    //need function here to add new name to the collection
    //need to check if name or phone number is already included, and reject duplicates

    //edit
    //need a way to edit each person's display name and phone number

    //delete
    //need function here to remove name from the collection
   // deletePerson(personId)
    }
    
}

const newPerson = new PersonInfo();

document.getElementById("addPersonForm").addEventListener("submit", function(event) {
    console.log('Working!'); 
    event.preventDefault();
    newPerson.addPerson();
    console.log(newPerson.people_list);
});
//read
//need function here to grab all the camel memes -- loop through camel_memes array and display them
    //maybe count them
    //display in HTML file the images and the count
const camels = new function() {
    //in HTML show all the camel memes I've added
    //this.item = document.getElementById('display-all-the-camels');
    //the array of images -- need to start with a few already in here
    this.camel_memes = ["resources/images/camel_memes/camelmeme1.jpeg",
                        "resources/images/camel_memes/camelmeme2.jpeg",
                        "resources/images/camel_memes/camelmeme3.jpeg",
                        "resources/images/camel_memes/camelmeme4.jpeg",
                        "resources/images/camel_memes/camelmeme5.jpeg"];
    //loop through array and display pics                    
    if (this.camel_memes.length > 0) {
        //need variable here instead of document.body.appendchild so I can put this where I want
        let displayAllTheCamels = document.getElementById('display-all-the-camels')
        for (i = 0; i < this.camel_memes.length; i++) {
            //need to use Image() and appendChild to add to dom
            let currentCamelMeme = new Image();
            currentCamelMeme.src = this.camel_memes[i];
            displayAllTheCamels.appendChild(currentCamelMeme);
        }
    }
    //create
    //need function here to add new meme to the collection
    //is there a way to check if the one being added is already included? not sure

    //edit
    //don't think an edit option is needed

    //delete
    //need function here to remove meme from the collection
}

const mikes = new function(){
    //in HTML show all the Mike memes I've added
    //this.item = document.getElementById('display-all-the-mikes');
     //the array of images -- need to start with a few already in here
    this.mike_memes = ["resources/images/mike_memes/mikememe1.jpeg",
                       "resources/images/mike_memes/mikememe2.jpeg",
                       "resources/images/mike_memes/mikememe3.jpeg",
                       "resources/images/mike_memes/mikememe4.jpeg",
                       "resources/images/mike_memes/mikememe5.jpeg"];
    //loop through array and display pics                    
    if (this.mike_memes.length > 0) {
        //need variable here instead of document.body.appendchild so I can put this where I want
        let displayAllTheMikes = document.getElementById('display-all-the-mikes')
        for (i = 0; i < this.mike_memes.length; i++) {
            //need to use Image() and appendChild to add to dom
            let currentMikeMeme = new Image();
            currentMikeMeme.src = this.mike_memes[i];
            displayAllTheMikes.appendChild(currentMikeMeme);
        }
    }


//create
//need function here to add new meme to the collection
//is there a way to check if the one being added is already included? not sure

//edit
//don't think an edit option is needed

//delete
//need function here to remove meme from the collection
}






//need function to allow user to make random choice
//maybe also display grid of memes so user can choose specific one -- radio buttons?

//need way to send meme as text message


//how will this display all the people who need to receive texts? maybe list:
    // person name (no need to display phone number)
    // camel or mike? click image to choose which kind of meme to send
        //that click leads to display of all the memes in that category
        //can click radio button to make choice OR can click pick-one button for random choice

//is there a way for this app to remind me it's Wednesday? maybe it can text me on Wednesday morning.
