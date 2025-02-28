// create all of the variables I need a threw the code  

let y_n    

let code = 8   

let lives = 1  

let storyLine = document.getElementById("currentStoryLine")    

let userInput = document.getElementById("yesORno")    

let submit = document.getElementById("inputButton")    

let next = document.getElementById("inputButton")    

let controlButton = document.getElementById("controlButton")  

let outCome = document.getElementById("outCome")    

let engineRoom = document.getElementById("Engine room")    

let controlRoom = document.getElementById("Control room")    

let storageRoom = document.getElementById("Storage room")    

let sleepingQuarters = document.getElementById("Sleeping quarters")    

let help = document.getElementById("helpButton")    

let imageI = document.getElementById("intro")   

let imageL = document.getElementById("leftImage")  

let imageR = document.getElementById("rightImage")  

let imgResult = document.getElementById("imgResult")   

let inputTxt = document.getElementById("question")   

const audio = new Audio("goatScream.mp3") 

 

// Hides the buttons until needed  

document.getElementById("Engine room").style.visibility = "hidden"   

document.getElementById("Control room").style.visibility = "hidden"   

document.getElementById("Storage room").style.visibility = "hidden"   

document.getElementById("Sleeping quarters").style.visibility = "hidden"  

document.getElementById("controlButton").style.visibility = "hidden"   

 

// hide the img at the beginning and makes it not take up any space  

imgResult.style.display = "none"  

 

// The beginning of the game and the initial submit button  

submit.addEventListener('click', function runningInput(){     

   

    //assign y_n the value of whatever the user puts    

    y_n = userInput.value    

 

    // error handling of if the user puts in a input other than the specified values (at the start only)  

    if(y_n != "yes" && y_n != "no" && y_n != "Yes" && y_n != "No" && y_n != "y" && y_n != "n" && y_n != "Y" && y_n != "N" && y_n != "Stay" && y_n != "leave"){    

 

        //send out a alert to the user if the input a value that is not in the designated list    

        window.alert("Error: Your value must be typed as one of the following (Yes,yes,y,Y,No,no,n,N)")    

 

        // make the user value nothing so the code can continue   

        userInput.value = ""    

 

    }    

 

    ///This is the 1st main story variation///    

 

    //scene 1//    

 

    // if the user types one of the variations of yes them the code will run as followed  

    if(y_n == "yes" || y_n == "Yes" || y_n == "y" || y_n == "Y"){    

 

        // Hides intro button and makes it not take up any space  

        imageI.style.display = "none"   

 

        //Hides the input felid so the user does not click   

        userInput.style.visibility = "hidden"   

 

 

        //Hides the text that says input on the html to make sure the user does not get confused on when to enter something  

        inputTxt.style.visibility = "hidden"  

  

        // hides the option images until I need it 

        imageL.style.display = "none"  

        imageR.style.display = "none"   

 

        // make the scene section on the text output the current scene  

        document.getElementById("scene").textContent = "Scene 2:"   

 

        // assign the result picture to a new picture and displays is/ unhide it 

        imgResult.src = "plant outside.jpg" 

        imgResult.style.display = "block"  

 

        // make the current story line empty so the user could se the result of what they pressed  

        document.getElementById("currentStoryLine").textContent = ''    

        document.getElementById("outCome").textContent = "You and Karen headed outside to  explore the new land. The new world is beautiful with many new tropical plant. The land was full of color and humidity. What is unsettling is that throughout your voyage, you have not seen a single animal. 'There is nothing for ya'll to worry about. Y'all are just a bunch of scary cats'. Regina says as she navigates through the forest.";    

 

        //clears the value of the user input    

        y_n = userInput.value = ""    

 

        // used to increment through the story line    

        next.addEventListener('click', function next(){   

 

            // hide the result picture 

            imgResult.style.display = "none"  

         

            //unHides the input felid so the user does can click   

            userInput.style.visibility = "visible"  

 

            //Hides the text that says input on the html to make sure the user does not get confused on when to enter something   

            inputTxt.style.visibility = "visible"  

 

            // changes option image src 

            imageL.src = "help.jpg"; 

            imageR.src = "leave.jpg"; 

 

            // unhide the option images until I need it 

            imageL.style.display = "block"  

            imageR.style.display = "block" 

 

            // fixing layout based on what point in the story line the user is in    

            document.getElementById("currentStoryLine").textContent = "As you keep walking you notice a noise in the tropical trees. You turn around to see a large distorted figure. You began to run away and Regina not far behind. As you are running, Karen trips on one of the tree roots. Her foot seems stuck. She screams louder for you help as the monster comes near. Are you going to help her?"    

            document.getElementById("outCome").textContent = ''    

        });       

 

        //clears the value of the user input    

        y_n = userInput.value = ""    

 

        // remove the eventlistener so I can reuse it again    

        submit.removeEventListener('click', runningInput);    

 

        // create an event listener again on the same button    

        submit.addEventListener('click', function runningInput(){    

 

            // prevents the cod from skipping the as you keep walking code if they type yes instead of just continuing    

            next.removeEventListener('click', next);    

 

            // creates the next event listener again    

            next.addEventListener('click', function next(){    

 

                //assign y_n the value of whatever the user puts    

                y_n = userInput.value    

 

                // scene 2 (death of a savior ending) //    

                // Code results if the user inputs yes  

                if(y_n == "yes" || y_n == "Yes" || y_n == "y" || y_n == "Y"){ 

                    audio.play();   

 

                    //Hides the input felid so the user does not click   

                    userInput.style.visibility = "hidden"  

 

                    // assigns the result picture to a new value 

                    imgResult.src = "hero.jpg" 

                    imgResult.style.display = "block"  

 

                    //Hides the text that says input on the html to make sure the user does not get confused on when to enter something  

                    inputTxt.style.visibility = "hidden"  

 

                    // hides the option images until I need it 

                    imageL.style.display = "none"  

                    imageR.style.display = "none" 

 

                    // update the current scene  

                    document.getElementById("scene").textContent = "Scene 3:"   

  

                    // for mates based on what point of plot the user is in  

                    document.getElementById("currentStoryLine").textContent = 'The End'    

                    document.getElementById("outCome").textContent = "You bend down trying to free Karen. As the monster comes closer, you decide to leave her but, Karen heavy grip causes you to fall. Karen grabs onto your right leg, begging you to save her. You try to kick her off but, it is too late. The monster rips you and Karen limb from limb.";    

 

                    // Changes the title to Death of a Savior  

                    document.getElementById("name").textContent="Death of a Savior"  

                };    

 

                // scene 2 //    

 

                // code result if the user input no  

                if(y_n == "no" || y_n == "No" || y_n == "n" || y_n == "N"){    

 

                    // unhide the option images until I need it 

                    imageL.style.display = "block"  

                    imageR.style.display = "block" 

 

                    // changes image src 

                    imageL.src = "hide.jpg"; 

                    imageR.src = "leave_cave.jpg"; 

 

                    // updates the scene to the current point of the stroy line  

                    document.getElementById("scene").textContent = "Scene 3:"   

 

                    // updates story text to current point in plot  

                    document.getElementById("currentStoryLine").textContent = "You look at Karen and say sorry as you try to gain distance between you and the monster. As you are running you see a cave in the distance. You hide behind some rock in a cave and watch her die. You watch in terror you notices an opening for an exit in the corner of your eye. Do you get up and leave or stay and wait?"    

 

                    //clears the value of the user input    

                    y_n = userInput.value = ""    

 

                    // remove the eventlistener so I can reuse it again    

                    submit.removeEventListener('click', runningInput);    

 

                    // change the answer options to stay/leave   

                    document.getElementById("question").textContent = "Stay/Leave"   

 

                    // create an event listener again on the same button    

                    submit.addEventListener('click', function runningInput(){    

 

                        // hides the option images until I need it 

                        imageL.style.display = "none"  

                        imageR.style.display = "none" 

 

                        //assign y_n the value of whatever the user puts    

                        y_n = userInput.value    

 

                        // scene 3 (scary cat ending) //    

 

                        // code result if the user enters stay  

 

                        if(y_n == "stay" || y_n == "Stay"){    

                            audio.play(); 

 

                            //Hides the input felid so the user does not click   

                            userInput.style.visibility = "hidden"   

 

                            // assign the result picture to a new picture and displays it 

                            imgResult.src = "cold.jpg" 

                            imgResult.style.display = "block"  

 

                            //Hides the text that says input on the html to make sure the user does not get confused on when to enter something          

                            inputTxt.style.visibility = "hidden"  

 

                            // update scene to current point  

                            document.getElementById("scene").textContent = "Scene 4:"  

 

                            // update story to current point in plot  

                            document.getElementById("currentStoryLine").textContent = "You stay in place to scared to run from the monster. The cave is cold, and your heat can’t stop beating. Minuets turn into hours as you wait for the creature to leave. You are finally able to breathe, hearing the monster leave. As you get ready to get your stomach lets out a thunderous growl. You close your eyes wait for your end. Back on the ship Janis and Damian fought off the monster hard but, died in the end. This mission was seen as the mystery in history.  People are still looking for your crews remains till this day."    

 

                            // make title you have died so the user know the game has ended  

                            document.getElementById("name").textContent="You Have Died"  

                        };    

 

                        // scene 3 (free but by your)   

 

                        // code result if the user input leave  

                        if(y_n == "leave" || y_n == "Leave"){    

                             

                            // assign the result button to a new picture and displays it 

                            imgResult.src = "timeSkip.jpg" 

                            imgResult.style.display = "block"  

  

                            //Hides the input felid so the user does not click   

                            userInput.style.visibility = "hidden"   

 

                            //Hides the text that says input on the html to make sure the user does not get confused on when to enter something          

                            inputTxt.style.visibility = "hidden"  

 

                            // hides the option images until I need it 

                            imageL.style.display = "none"  

                            imageR.style.display = "none" 

 

                            // updates scene to the current point  

                            document.getElementById("scene").textContent = "Scene 4:"   

 

                            // update the story to the current point in plot  

                            document.getElementById("currentStoryLine").textContent = 'You exit the cave and make it to the ship to warn your crew mates of the monster,  only to find them all dead. You live the rest of you life on this planet alone and stranded.'    

 

                            // changes the title to let the user know that the game has ended  

                            document.getElementById("name").textContent="You are Alive but Alone"  

                        };    

                    });    

                };    

            });    

        });    

    };    

 

 

    ///This is the 2nd main story variation///    

 

    //scene 1//    

 

    // code output if the user inputs no  

    if(y_n == "no" || y_n == "No" || y_n == "n" || y_n == "N"){    

 

        //Hides the input felid so I can add the room buttons   

        userInput.style.visibility = "hidden"  

 

        //Hides the text that says input on the html to make sure the user does not get confused on when to enter something  

        inputTxt.style.visibility = "hidden"  

 

        // hides the option images until I need it 

        imageL.style.display = "none"  

        imageR.style.display = "none" 

 

        // Hides the buttons until    

        imageI.style.display = "none"  

         

        // assigns the result picture to a new picture and displays it 

        imgResult.src = "cards.jpg" 

        imgResult.style.display = "block"  

 

        // update the scene to the current point  

        document.getElementById("scene").textContent = "Scene 2:"   

 

        // updates based on the point in story line  

        document.getElementById("currentStoryLine").textContent = ''    

        document.getElementById("outCome").textContent = "You decide that it is smarter for everyone to stay and fix what damages the ship has so y'all can leave. After saying that Regina pushes past you and leaves. You start to go after her but, Janis holds you back. Karen and Gretchen refused to leave without Regina so y'all stay and wait for her to come back."    

 

        //clears the value of the user input    

        y_n = userInput.value = ""    

 

        // remove the next event listener so i could use it again  

 

        next.removeEventListener('click', next);    

 

        // used to increment through the story line    

        next.addEventListener('click', function next(){ 

             

            // had the result picture 

            imgResult.style.display = "none"  

 

            //UnHides the input felid so I can add the room buttons   

            userInput.style.visibility = "visible"   

 

            //Hides the text that says input on the html to make sure the user does not get confused on when to enter something  

            inputTxt.style.visibility = "visible"  

 

            // changes image src to the option pictures 

            imageL.src = "open.jpg"; 

            imageR.src = "lock.jpg"; 

             

            // unhide the option images until I need it 

            imageL.style.display = "block"  

            imageR.style.display = "block" 

 

            // fixing layout based on what point in the story line the user is in    

            document.getElementById("currentStoryLine").textContent = "You and the crew are playing cards when you hear a heavy knock. Gretchen says open the door because it is Regina; however, Damian suggested that it is too early for Regina to have returned and Damian refused to open the door because we are unsure what is out there. They both look back at you to be their tie breaker again. (Yes/No)"    

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

 

                // code output if the user inputs yes  

 

                if(y_n == "yes" || y_n == "Yes" || y_n == "y" || y_n == "Y"){  

                    audio.play(); 

 

                    //Hides the input felid so I can add the room buttons   

                    userInput.style.visibility = "hidden"   

 

                    // assign the result picture to a new image and displays it 

                    imgResult.src = "acid.jpg" 

                    imgResult.style.display = "block"  

 

                    //Hides the text that says input on the html to make sure the user does not get confused on when to enter something  

                    inputTxt.style.visibility = "hidden"  

 

                    // hides the option images until I need it 

                    imageL.style.display = "none"  

                    imageR.style.display = "none" 

 

                    // updates the scene base on the current point  

                    document.getElementById("scene").textContent = "Scene 3:"   

                    document.getElementById("currentStoryLine").textContent = ''    

                    document.getElementById("outCome").textContent = "You opened the door and Regina comes in to announce that outside is safe. Karen comes stumbling outside to greet Regina. As Karen is hugging Regina, her body starts to melt to Regina's touch. You want to run but, your body is frozen in shock. You breathe out as your body starts to melt into Regina's touch too.";    

                    document.getElementById("name").textContent = "You Have Died" 

                };    

 

                // scene 2 //  

 

                // code if the user inputs no  

                if(y_n == "no" || y_n == "No" || y_n == "n" || y_n == "N"){   

 

                    // assign the result picture to a new image and displays it 

                    imgResult.src = "rooms.jpg" 

                    imgResult.style.display = "block"  

 

                    //Hides the input felid so I can add the room buttons   

                    userInput.style.visibility = "hidden"   

 

                    //Hides the text that says input on the html to make sure the user does not get confused on when to enter something  

                    inputTxt.style.visibility = "hidden"  

                     

                    // hides the option images until I need it 

                    imageL.style.display = "none"  

                    imageR.style.display = "none" 

 

                    // updates the code based on the current point  

                    document.getElementById("scene").textContent = "Scene 3:"   

 

                    //Hides the next button so I can add the room buttons   

                    document.getElementById("inputButton").style.visibility = "hidden"   

 

                    // Have to put the text content after or it will clear the current story line section   

                    document.getElementById("currentStoryLine").textContent = "You don’t open the door but, Gretchen pushes you out of the way and opens the door. A gush of wind pushes her back as a monster comes in soon after. You grabbed Damian and run. You turn the corner run down the hall and go into what room?"    

 

                    // unhide all of my buttons that pertain to this part – start here   

                    document.getElementById("Engine room").style.visibility = "visible"   

                    document.getElementById("Control room").style.visibility = "visible"   

                    document.getElementById("Storage room").style.visibility = "visible"   

                    document.getElementById("Sleeping quarters").style.visibility = "visible"   

 

                    // clears user input 

                    y_n = userInput.value = ""    

 

                    // scene 3 (Poison gas)   

 

                    // creates the code for the engine room button 

                    engineRoom.addEventListener("click", function engine(){ // adds an event listen for if the user clicks engine room   

                        audio.play(); 

 

                        // updates the scene section to the current scene 

                        document.getElementById("scene").textContent = "Scene 4:"   

 

                        // hides the result picture 

                        imgResult.style.display = "none"  

 

                        // hide the buttons so the user cannot click on it   

                        document.getElementById("Engine room").style.visibility = "hidden"   

                        document.getElementById("Control room").style.visibility = "hidden"   

                        document.getElementById("Storage room").style.visibility = "hidden"   

                        document.getElementById("Sleeping quarters").style.visibility = "hidden"  

                        document.getElementById("name").textContent="You have Died"   

 

                        // adds storyline content   

                        document.getElementById("outcome").textContent = "You run into the engine room with the monster hot on your tail. You and Damian slip behind the engine as the monster claws at y’all. You think hard on how to get out of the situation and that’s when you smell Gas. The monster hit one of the screws on the engine and now it is leaking. Panic rises as you realize you and Damian are stuck behind the engine. The rotten egg odor of the hydrogen sulfide starts to fill your nose as you have a hard time breathing. Your mind starts to go black as you feel the monster's teeth finally tearing into you."    

                    });   

 

                    // creates the control room button bc the other buttons would not work 

                    controlRoom.addEventListener("click", function controls(){   

 

                        // assigns the result picture to a new image 

                        imgResult.src = "code.jpg" 

                                 

                        // updates scene to the current scene  

                        document.getElementById("scene").textContent = "Scene 4:"   

 

                        // hide the buttons so the user cannot click on it   

                        document.getElementById("Engine room").style.visibility = "hidden"   

                        document.getElementById("Control room").style.visibility = "hidden"   

                        document.getElementById("Storage room").style.visibility = "hidden"   

                        document.getElementById("Sleeping quarters").style.visibility = "hidden"   

 

                        //Takes out the continue button because it was causing me problem  

                        document.getElementById("inputButton").style.display = "none"  

 

                        // adds story line content   

                        document.getElementById("currentStoryLine").textContent = ''    

                        document.getElementById("outCome").textContent = "You run to the control room and hide under the panel. You hear screams from your other crew mates as you hold your breath. You attempted to press the frontal eject button.  This button is used to separate the control panel from the main room in case of emergencies, unfortunately there is a code and you don't know it. All that you remember is that the code is a single digit number between one and ten.(1-10)" 

 

                        // unhide the input field  

                        userInput.style.visibility = "visible"   

                        inputTxt.style.visibility = "visible"  

 

                        // changes image src 

                        imageL.src = "help.jpg"; 

                        imageR.src = "leave.jpg"; 

 

                        //  unhide the input button  

                        document.getElementById("controlButton").style.visibility = "visible"  

 

                            // re assign the control room button 

                            controlButton.addEventListener('click', function iteration(){  

 

                                // assign y_n to the value of user input 

                                y_n = userInput.value  

 

                                // makes the user input a number 

                                y_n = Number(y_n)  

 

                                // creates a string so i can create the room code 

                                let codestr = []  

 

                                // if the user input is blank then this code will run 

                                if(y_n==""){               

                                     

                                    window.alert("You did not put an input") 

                                    y_n = userInput.value = " " // clear the user value so the player can input again 

                                } else if(isNaN(y_n)){ // if the user input is not a number than this code will run 

                                     

                                    window.alert("This is not a number")  

                                    y_n = userInput.value = " " // clear the user value so the player can input again 

                                } else{ // will run if the code is a number                             

 

                                    // if they get the code correct then it creates the code from that one number into a list 

                                    if(y_n===code){   

                                        for(let i=0; i<5;i++){  

                                             codestr[i]=y_n  

                                        }  

 

                                        // joins the list crated by the user input 

                                        code = codestr.join("")  

                                      

                                        // updates story line 

                                        document.getElementById("outCome").textContent = " "  

                                        document.getElementById("currentStoryLine").textContent = `The code ${code} was correct! The control room brakes off from the rest of the ship, and you are finally free. You and Damian let out a sigh of relief as ya'll are finally safe. You head back to earth leaving most of the supplies but, your safety is all that matters right now.`   

 

                                    } else if (y_n !== code){  // if they get the code wrong then this code will run 

                                        audio.play(); 

 

                                        // updates the story line 

                                        document.getElementById("currentStoryLine").textContent =`That was not the right code. The ship goes into self distrust mode. The door shut close and red light flicker. The countdown hit out and you take your last breath`                                          

                                        document.getElementById("outCome").textContent = " "  

 

                                        // clear the user input 

                                        y_n = userInput.value = " "  

 

                                        // hides the control room button 

                                        document.getElementById("controlButton").style.display = "none"  

 

                                        // hides user input field 

                                        userInput.style.display = "none"  

 

                                        // update the title so the user knows it is the end 

                                        document.getElementById("name").textContent="You have died"  

                                    };  

                                };  

                            }); 

                    });  

                };      

            });  

 

            // code for the storage button 

            storageRoom.addEventListener("click", function Storage(){ 

                audio.play();  

                 

                // change the result picture to a new picture 

                imgResult.src = "pushShelf.jpg"  

 

                // change the name and scene to the current points 

                document.getElementById("name").textContent="You have died"  

                document.getElementById("scene").textContent = "Scene 4:"   

 

                    // hide the buttons so the user cannot click on it   

                    document.getElementById("Engine room").style.visibility = "hidden"   

                    document.getElementById("Control room").style.visibility = "hidden"   

                    document.getElementById("Storage room").style.visibility = "hidden"   

                    document.getElementById("Sleeping quarters").style.visibility = "hidden"   

 

                    /// have to add a button click counter so they spam the push the container off ///    

                    document.getElementById("currentStoryLine").textContent = ''    

                    document.getElementById("outCome").textContent = 'Run from monster. Storage room is like a maze. The monster shushes a shelf onto of you. You try to push it off but, your stuck. The pressure of the monster on top of cause you to black out forever.'     

            });   

 

            // code for the storage button 

            sleepingQuarters.addEventListener("click", function Bedroom(){  

         

                // change the result picture to a new picture 

                imgResult.style.display = "explore.jpg"   

 

                // change the name and scene to the current points 

                document.getElementById("name").textContent="Safe Ending"  

                document.getElementById("scene").textContent = "Scene 4:"   

 

                // hide the buttons so the user cannot click on it   

                document.getElementById("Engine room").style.visibility = "hidden"   

                document.getElementById("Control room").style.visibility = "hidden"   

                document.getElementById("Storage room").style.visibility = "hidden"   

                document.getElementById("Sleeping quarters").style.visibility = "hidden"                       

                document.getElementById("currentStoryLine").textContent = ''                            

                document.getElementById("outCome").textContent = 'You enter the room with Damian following close behind you. In the room, you see Janis who is hiding behind a dresser with a shotgun in her hand. Damian rushes under his bed to grab a hidden gun. You look at Damian confused on why he has a gun under his bed. Janis gets up from her hiding spot and sighs. “Our plan was to kill Regina, Karen and Gretchen once we “crash landed”, but we did not account for any living things to exist on this planet”, Damian says. Janis hands Damian an escape route, “We have to leave now before more of those creatures come”, Janis whispers, looking out of the room. You follow Janis and Damian out of the rocket ship.The ship had exploded but Janis, Damian, and you survive the explosion.  As you are stranded on the planet, you eat the meat of the monster and the exotic plants of the planet to survive. You don’t know when or if y’all will ever be able to leave but things are going well so far.'   

            });   

        });   

    };    

});    

 

 

 

// if the user is struggling then then this will tell you what to input 

help.addEventListener("click", function helpMe(){  

    audio.play();  

    document.getElementById("help").textContent = "Your value must be typed as one of the following (Yes,yes,y,Y,no,No,n,N,stay,leave)"   

});  

 

 

 