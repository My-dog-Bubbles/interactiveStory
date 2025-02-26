let y_n  
let code = 8074 
let storyLine = document.getElementById("currentStoryLine")  
let userInput = document.getElementById("yesORno")  
let submit = document.getElementById("inputButton")  
let next = document.getElementById("inputButton")  
let outCome = document.getElementById("outCome")  
let engineRoom = document.getElementById("Engine room")  
let controlRoom = document.getElementById("Control room")  
let storageRoom = document.getElementById("Storage room")  
let sleepingQuarters = document.getElementById("Sleeping quarters")  
let help = document.getElementById("helpButton")  
let imageI = document.getElementById("intro") 
let imgResult = document.getElementById("imgResult") 

// Hides the buttons until  
document.getElementById("Engine room").style.visibility = "hidden" 
document.getElementById("Control room").style.visibility = "hidden" 
document.getElementById("Storage room").style.visibility = "hidden" 
document.getElementById("Sleeping quarters").style.visibility = "hidden" 

// hide the img of what results and does not take up any space
imgResult.style.display = "none"

submit.addEventListener('click', function runningInput(e){  
    // Prevent the form from refreshing the page  
    e.preventDefault();  
 
    //assign y_n the value of whatever the user puts  
    y_n = userInput.value  

    // error handling of if the user puts in a input other than the specified values  
    if(y_n != "yes" && y_n != "no" && y_n != "Yes" && y_n != "No" && y_n != "y" && y_n != "n" && y_n != "Y" && y_n != "N" && y_n != "Stay" && y_n != "leave"){  
        //send out a alert to the user if the put a value that is not in the designated list  
        window.alert("Error: Your value must be typed as one of the following (Yes,yes,y,Y,No,no,n,N)")  
 
        // make the user value nothing so the code can continue  
        userInput.value = ""  
    }  
 
    ///This is the 1st main story variation///  
    //scene 1//  
    if(y_n == "yes" || y_n == "Yes" || y_n == "y" || y_n == "Y"){  

        // Hides the buttons until  
        imageI.style.display = "none" 

        //Hides the input felid so the user does not click 
        userInput.style.visibility = "hidden" 

        document.getElementById("scene").textContent = "Scene 2:" 
        document.getElementById("currentStoryLine").textContent = ''  
        document.getElementById("outCome").textContent = "You go outside with Regina and explore the new land. The new world is beautiful with many new tropical plant. the land was full of color and humid. The unsettling thing is that threw out your exploration you have not seen a single animal. ''There was nothing for y'all to worry about. Y'all are just a bunch of scardy cats'' Regina says pushing a sort of anthurium leaf variant out of her face.";  

        //clears the value of the user input  
        y_n = userInput.value = ""  


        // used to increment through the story line  
        next.addEventListener('click', function next(){  

            //unHides the input felid so the user does can click 
            userInput.style.visibility = "visible" 

            // fixing layout based on what point in the story line the user is in  
            document.getElementById("currentStoryLine").textContent = "As you keep walking you notice a rusleing in the tropical trees. You turn around see a large distorted figure. You run away Regina not far behind. As you are running Regina trips on one of the tree roots. Her foot seems stuck. She screams louder for you help as the monster comes near. Are you going to help her?"  
            document.getElementById("outCome").textContent = ''  
        });     

        //clears the value of the user input  
        y_n = userInput.value = ""  

        // remove the eventlistener so I can reuse it again  
        submit.removeEventListener('click', runningInput);  

        // create an event listener again on the same button  
        submit.addEventListener('click', function runningInput(e){  

            // prevents the cod from skipping the as you keep walking code if they type yes instead of ust continuing  
            next.removeEventListener('click', next);  

            // creates the next event listener again  
            next.addEventListener('click', function next(){  

                //assign y_n the value of whatever the user puts  
                y_n = userInput.value  

                // scene 2 (death of a savior ending) //  
                if(y_n == "yes" || y_n == "Yes" || y_n == "y" || y_n == "Y"){  
                    //Hides the input felid so the user does not click 
                    userInput.style.visibility = "hidden" 

                    document.getElementById("scene").textContent = "Scene 3:" 
                    document.getElementById("currentStoryLine").textContent = ''  
                    document.getElementById("outCome").textContent = "Go Save Regina but die with her in the process (Add on)";  
                };  

                // scene 2 //  
                if(y_n == "no" || y_n == "No" || y_n == "n" || y_n == "N"){  
                    document.getElementById("scene").textContent = "Scene 3:" 
                    document.getElementById("currentStoryLine").textContent = "You hide and watch her die. As you watch in terror you notice a opening for the cave in the corner of your eye. Do you get up and leave or stay and wait?"  

                    //clears the value of the user input  
                    y_n = userInput.value = ""  

                    // remove the eventlistener so I can reuse it again  
                    submit.removeEventListener('click', runningInput);  

                    // change the answer options to stay/leave 
                    document.getElementById("question").textContent = "stay/leave" 

                    // create an event listener again on the same button  
                    submit.addEventListener('click', function runningInput(e){  
                        // Prevent the form from refreshing the page  
                        e.preventDefault();  

                        //assign y_n the value of whatever the user puts  
                        y_n = userInput.value  

                        // scene 3 (scary cat ending) //  
                        if(y_n == "stay" || y_n == "Stay"){  
                            //Hides the input felid so the user does not click 
                            userInput.style.visibility = "hidden" 

                            document.getElementById("scene").textContent = "Scene 4:" 
                            document.getElementById("currentStoryLine").textContent = "You stay in place to scared to run from the monster. The cave is cold, and your heat can't stop beating. Minuets turn into hours as you wait for the creature to leave. You are finally able to breathe, hearing the monster leave. As you get ready to get your stomach lets out a thunderous growl. You close your eyes wait for your end.(time skip back of what happened in the ship (everyone died))"  
                        };  

                        // scene 3 (free but by your)  
                        if(y_n == "leave" || y_n == "Leave"){  
                            //Hides the input felid so the user does not click 
                            userInput.style.visibility = "hidden" 
                            document.getElementById("scene").textContent = "Scene 4:" 
                            document.getElementById("currentStoryLine").textContent = 'You exit the cave and make it to the ship and worn your crew make or the monster only find them all dead (Time skip back of what happened on the ship)'  
                        /// input for now but going to change this ??  

                        };  
                    });  
                };  
            });  
        });  
    };  

    ///This is the 2nd main story variation///  
    //scene 1//  
    if(y_n == "no" || y_n == "No" || y_n == "n" || y_n == "N"){  
        //Hides the input felid so I can add the room buttons 
        userInput.style.visibility = "hidden" 

        document.getElementById("scene").textContent = "Scene 2:" 
        document.getElementById("currentStoryLine").textContent = ''  
        document.getElementById("outCome").textContent = "You decide that it is smarter for everyone to stay and fix what damages the ship has so y'all can leave. After saying that Regina pushes past you and leaves. You start to go after her but, Janis holds you back. Karen and Gretchen refused to leave without Regina so y'all stay and wait for her to come back."  

        //clears the value of the user input  
        y_n = userInput.value = ""  

        // used to increment through the story line  
        next.addEventListener('click', function next(){  
            //UnHides the input felid so I can add the room buttons 
            userInput.style.visibility = "visible" 

            // fixing layout based on what point in the story line the user is in  
            document.getElementById("currentStoryLine").textContent = "You and the crew are playing card when When you hear a heavy knock. Gretchen says open the door because it is Regina but Damian says it is to early for her to be back and don't open the door because we don't know what it could be. They both look back at you to be their tie breaker again."  
            document.getElementById("outCome").textContent = ''  
        });     

        //clears the value of the user input  
        y_n = userInput.value = ""  

        // remove the eventlistener so I can reuse it again  
        submit.removeEventListener('click', runningInput);  

        // create an event listener again on the same button  
        submit.addEventListener('click', function runningInput(){

            // prevents the cod from skipping the as you keep walking code if they type yes instead of ust continuing  
            next.removeEventListener('click', next);  

            // creates the next event listener again  
            next.addEventListener('click', function next(){  
                //assign y_n the value of whatever the user puts  
                y_n = userInput.value  

                // scene 2 (death of a savior ending) //  
                if(y_n == "yes" || y_n == "Yes" || y_n == "y" || y_n == "Y"){  
                    //Hides the input felid so I can add the room buttons 
                    userInput.style.visibility = "hidden" 

                    document.getElementById("scene").textContent = "Scene 3:" 
                    document.getElementById("currentStoryLine").textContent = ''  
                    document.getElementById("outCome").textContent = "You open the door and Regina comes in she tells y'all it is safe outside and convinces everyone to come outside. (finish this)";  
                };  

                // scene 2 //  
                if(y_n == "no" || y_n == "No" || y_n == "n" || y_n == "N"){  
                    //clears the value of the user input  
                    y_n = userInput.value = ""  

                    // remove the eventlistener so I can reuse it again  
                    submit.removeEventListener('click', runningInput); 

                    //Hides the input felid so I can add the room buttons 
                    userInput.style.visibility = "hidden" 

                    document.getElementById("scene").textContent = "Scene 3:" 

                    //Hides the next button so I can add the room buttons 
                    document.getElementById("inputButton").style.visibility = "hidden" 

                    // Have to put the text content after or it will clear the current story line section 
                    document.getElementById("currentStoryLine").textContent = "You don't open the door but, Gretchen pushes you out of the way and opens the door. A gush of wind pushes her back as a monster comes in soon after. You grab Damian and run. you turn the corner run down the hall and go into what room?"  

                    // unhide all of my buttons that pertain to this part  
                    document.getElementById("Engine room").style.visibility = "visible" 
                    document.getElementById("Control room").style.visibility = "visible" 
                    document.getElementById("Storage room").style.visibility = "visible" 
                    document.getElementById("Sleeping quarters").style.visibility = "visible" 

                    // scene 3 (Poison gas) 
                    engineRoom.addEventListener("click", function engine(){ // adds an event listen for if the user clicks engine room 
                        document.getElementById("scene").textContent = "Scene 4:" 

                        // hide the buttons so the user cannot click on it 
                        document.getElementById("Engine room").style.visibility = "hidden" 
                        document.getElementById("Control room").style.visibility = "hidden" 
                        document.getElementById("Storage room").style.visibility = "hidden" 
                        document.getElementById("Sleeping quarters").style.visibility = "hidden" 

                        // adds storyline content 
                        document.getElementById("outcome").textContent = "You run into the engine room with the monster hot on your tail. You and Damian slip behind the engine as the monster claws at y'all. You think hard on how to get out of the situation and that's when smell Gas. They had hit one of the screws on the engine and now it is leaking. Panic rises as you realize you and Damian are stuck behind the engine. The rotten egg order of the hydrogen sulfide starts to fill your nose as you have a hard time breathing. Your mind starts to go black as you feel the monster's teeth finally tearing into you."  
                    }); 

                    controlRoom.addEventListener("click", function controls(){ 
                        document.getElementById("scene").textContent = "Scene 4:" 

                        // hide the buttons so the user cannot click on it 
                        document.getElementById("Engine room").style.visibility = "hidden" 
                        document.getElementById("Control room").style.visibility = "hidden" 
                        document.getElementById("Storage room").style.visibility = "hidden" 
                        document.getElementById("Sleeping quarters").style.visibility = "hidden" 

                        // adds story line content 
                        document.getElementById("currentStoryLine").textContent = ''  
                        document.getElementById("outCome").textContent = 'You run to the control room and hide under the panel. You hear screams from your other crewmate as you hold your breath. You run to press the frontal eject button, used to separate the control panel to the main room in case of emergencies but there is a code.'  

                        // unhide the input field
                        userInput.style.visibility = "visible" 

                        //  unhide the input button
                        document.getElementById("inputButton").style.visibility = "visible"
                        next.removeEventListener('click', next);  

                        submit.addEventListener('click', function runningInput(){
                            
                            for(let i=3;i == 0 && y_n!=code;){ 
                                if(y_n==code){ 
                                    document.getElementById("outCome").textContent = "The code was correct! The control room breakes off from the rest of the ship and you are finaly free. You and Damian let out a sigh of releaf as yall are finally safe. You head back to earth leaving most of the supplies but your safety is all the matters right now." 
                                    i--
                                } else if(y_n.includes(" ")){
                                    window.prompt("you input can't have any spaces in the input")
                                } else if(y_n.length<code.length || y_n.length>code.length){
                                    window.prompt("The code is only 4 numbers long")
                                } else{ 
                                    window.prompt(`You have ${i--} tries left` )
                                } 
                        } 
                        });
                    }); 

                    storageRoom.addEventListener("click", function Storage(){ 
                        document.getElementById("scene").textContent = "Scene 4:" 

                        // hide the buttons so the user cannot click on it 
                        document.getElementById("Engine room").style.visibility = "hidden" 
                        document.getElementById("Control room").style.visibility = "hidden" 
                        document.getElementById("Storage room").style.visibility = "hidden" 
                        document.getElementById("Sleeping quarters").style.visibility = "hidden" 

                        /// have to add a button click counter so they spam the push the container off ///  
                        document.getElementById("currentStoryLine").textContent = ''  
                        document.getElementById("outCome").textContent = 'Run from monster. Storage room is like a maze. The monster shushes a shelf onto of you. You try to push it off. Press up arrow to free you self'  
                        
                        document.addEventListener('keydown',function shelf(e){
                            if(e.key == ' '){
                                //add code//
                            };
                        }); 
                    }); 

                    sleepingQuarters.addEventListener("click", function Bedroom(){ 
                        document.getElementById("scene").textContent = "Scene 4:" 

                        // hide the buttons so the user cannot click on it 
                        document.getElementById("Engine room").style.visibility = "hidden" 
                        document.getElementById("Control room").style.visibility = "hidden" 
                        document.getElementById("Storage room").style.visibility = "hidden" 
                        document.getElementById("Sleeping quarters").style.visibility = "hidden" 
                        document.getElementById("currentStoryLine").textContent = ''  
                        document.getElementById("outCome").textContent = 'You enter the room Damian following close behind you. In the room you see Janis who is hiding behind a dresser with a shotgun in hand. Damian rushes under his bed to grab a hidden gun. You look at Damian confused on why he has a gun under his bed. Janis gets up from her hiding spot sighs. “Our plan was to kill Regina, Karen and Gretchen once they “crash landed” but we did not account for there to be any living things on this planet.” Damian says. Janis hands Damian an escape route. “We have to leave now before more of those creatures come”, Janis whispers, looking out of the room. You follow Janis and damian out of the rocket ship.' 
                    }); 
                };  
            });  
        });  
    };  
});  


help.addEventListener("click", function helpMe(){ 
    document.getElementById("help").textContent = "Your value must be typed as one of the following (Yes,yes,y,Y,no,No,n,N,stay,leave)" 
}) 
