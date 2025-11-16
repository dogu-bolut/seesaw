# Thought Process and Design Decisions

**Upon reviewing Samet Sevindi’s completed project, I dedicated time to comprehending its underlying logic. After exploring various use cases, I identified key points that informed the creation of my own seesaw. These points were:**

- I needed to generate separate weight objects and calculate the total weight on each side to ensure this information is accurately displayed to the user, especially when multiple weight objects are created. 

- The midpoint of the plank was the key reference for separating weight objects, so I applied the same logic to the torque calculation. Since torque on a seesaw depends on the distance from the center, I used that principle—something I remembered from childhood: when I was heavier than my brother, I had to sit closer to the center to balance the seesaw. Based on this, I divided the torque into left and right components, just like the weights. 

- I began with the most important step of the task: adding an event listener to the clickable area to create weight objects. When the user clicks, I capture the mouse position, generate a random color and weight, and store the new object in an array for tracking and calculations. Since the weight objects needed to be visible, I decided the best place to render them was directly under the plank element. I created a new -div-, assigned it a class name for styling, and set its unique color, size, and weight attributes in the script. The CSS handled layout, typography, and text centering. 

- Once I fully understood the logic, updating the seesaw position using torque values came naturally. I separated both weight and torque calculations into left and right sides and defined four variables to determine the final tilt angle. I then looped through all objects on the plank with forEach. 

- For each object, I measured its distance from the plank’s midpoint. This not only allowed me to identify whether the object was on the left or right side but also provided the distance factor for torque. Since torque equals weight × distance, an object at the edge produced the maximum torque (distance = 200 in this case), while objects closer to the center produced less. After summing the torque values for both sides, I computed the difference and applied it to update the plank’s tilt angle. 

- After computing the torque and weight values, I refreshed the display components accordingly. Because the angle, left-side weight, and right-side weight were already calculated for the logic, rendering them to the UI required minimal effort.

**After completing the core logic and verifying it through testing and debugging, I moved on to planning Phase II of the case study. The steps for Phase II are as follows:**
  
- I aimed to make the case project visually appealing, so I began focusing more on styling. After adding the reset button, I separated the display elements to improve the user experience. I created a dedicated container for these items and updated their visual presentation accordingly. 

- Over multiple test runs, the weight objects appeared visually identical, despite having different numbers and colors. The default sizing method wasn’t sufficient. Instead of relying on a preset value for the transform, I used the actual weight to compute each object’s size. The smallest weight retained the base size, and I applied a “weight × 2” factor to scale the object according to its weight. 

- I added the reset button functionality to the script, allowing the plank position, all created objects, and the objects array to be cleared and restored to their initial state. 

**In Phase III, I reviewed the case study thoroughly, identified several missing elements, and implemented them while refining parts of the UI. The key points of Phase III are:**

- Although I first attempted to replicate the example, the case requirements specified that only the plank should be clickable, so I updated the implementation to reflect that. 

- I noticed the pivot point had not been implemented, so I positioned it precisely at the midpoint of the plank and aligned its styling with the surrounding UI elements. 

- I also realized I was missing local storage, so I decided to store the weight objects themselves. Since the plank’s behavior is entirely determined by these objects, saving them would allow the UI to be restored exactly as before without losing any data. After loading the objects from storage, I refreshed the display elements accordingly.

# Trade-offs & Limitations

- Initially, I reviewed the example provided in the case PDF to establish the core logic. I wanted the entire background to be clickable—similar to the example—so users could add weight objects anywhere. However, clicking on existing objects caused a new object to spawn at the left edge of the seesaw (the default spawn point). After about an hour of debugging, I resolved the issue. Once I revisited the case PDF more carefully, I realized that only the plank was intended to be clickable, so I adjusted the clickable area accordingly. 

- I intended to store all files within a folder under my name. However, there was a complication. GitHub Pages only permits the inclusion of index.html in the root folder or under /docs for proper rendering. After placing the index file in the root folder, I encountered another error: the folder name must be in lowercase. I modified it to a more appropriate name and successfully resolved the issue. (P.S. The original folder name was Dogu-Bolut.)

# AI

- I utilized AI for debugging purposes, as mentioned in the Trade-offs & Limitations section. 
- I received assistance from AI when attempting to set a random color for weight objects. 
- Used for improving grammar and maintaining a professional tone throughout the README.
