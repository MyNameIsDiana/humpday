# humpday

In 2015 one of my kids started a family tradition when on a random Wednesday she texted me three camel emojis. 

I of course responded, "MikeMikeMikeMikeMike."

(Remember that old GEICO commercial with the camel walking through an office? He asked the people, "Guess what day it is?" He approached one guy with, "Mike, Mike, Mike, Mike, Mike!")

Since that day, my kids and I all do this every Wednesday. Whoever thinks of it first will text some camel emojis, or a camel photo, or a camel meme. The recipient responds with MikeMikeMikeMikeMike, or a photo of someone named Mike, or a meme of someone named Mike.

This is an app that displays a list of all the people I need to text on Wednesdays, a grid display of camels, and a grid display of Mikes.
I want to be able to click on a name and choose which image to send -- a camel or a Mike -- and have it send the image as a text message.

It would be nice to save a history of which images I've sent each person. That way I won't end up sending the same ones two weeks in a row.

Yes, this is a silly app.

---

ISSUES:

How do I add names/phone numbers to this without putting them on GitHub? I don't want those cell numbers published. Local storage on user's machine? YES

How do I persist the data I add? LOCAL STORAGE

x How do I add photos to an array? DONE

What about gifs -- things with movement?

x Can I add a link to the video? It's on YouTube. DONE

+++

People
---
Need a way to see the list of people.
-- Where does this go? On screen or behind a link?
Need to be able to edit names and phone numbers.
Need to be able to delete a person altogether.

It makes sense to be able to add people to a visible list.
It also makes sense to see people's names with checkboxes on the chosen meme. THat way, in the moment, I can find the meme I want to send and simply check the names of the person/people to send it to.

So the list of people will be shown in two places.

+++

Camels and Mikes
---
Need to display the pics/memes in a grid or carousel.
-- What size should they be?
-- They are different orientations and ratios. How do I make it look decent with mix of horizontals and verticals, some more exaggerated than others?

When user clicks on an image, it should display checkboxes with names. The user should be able to choose different images for different people. 
-- Should it be a separate "submit" for each image? Or does the user make all their choices -- choosing five images, one for each person on a list of five -- and then hit a single "submit" for the group?
-- If a separate "submit," when the display of images refreshes the person who just received a text should not appear in the checkboxes.

When user submits the choice, I should somehow note on the person that they got their text for the week. Add a time/date stamp? A toggle that gets reset every week? Something else?

Need to allow the user to add camels and Mikes to the display.


