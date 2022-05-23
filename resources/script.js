class PersonInfo {
    //eventually this will house name, phone number, list of memes already sent
    constructor() {
        //array of objects that starts empty
        this.people_list = [];
    }
    
    //create
    addPerson(first_name, last_name, phone_number) {

        const person = {
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number
        }
        //add the new person with details
        this.people_list.push(person);
    }

    //read 
    //need function here to grab all the names/numbers -- loop through object and display them
    //maybe count them
    //should this save/show the last few memes sent? that way it doesn't send the same meme over and over. maybe don't display the history on main page, but instead display if you click on the name
    //display in HTML file
    //loop through array and display pics    
    fetchAllThePeople() {
        if (this.people_list.length > 0) {

    }
    //in HTML show list of people -- names and phone numbers -- who should receive texts
    
    //this.item = document.getElementById('people');
    //populating object for testing only
    
    }
   

    
    //create
    //need function here to add new name to the collection
    //need to check if name or phone number is already included, and reject duplicates

    //edit
    //need a way to edit each person's display name and phone number

    //delete
    //need function here to remove name from the collection
}
 
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
