LIST Me = (unobserved), described
LIST Palazzo = (unobserved), identified_entrances
LIST Gondola = (unoberved), secret_compartment
LIST Compartment = known, locked, unlockable, unlocked
LIST SearchableObjects = rope, pick
LIST Windows = xleft, left, middle, (right), xright
VAR Inventory = ()
VAR RopeAttached = false

Venice, June 19th 1841, a little after midnight. # actionscalie

-> Exterior

=== Exterior
Taking advantage of the darkness of the new moon, <:me>you</><>
{Me has Me.described :, in your black silk <:combinaison>bodysuit</>,}<>
{\ guide your| have parked your} <>
<:gondola>gondola</> <>
{Compartment has Compartment.known: with its <:compartment>secret compartment</> }<>
against the <:wall>wall</> of the <:palazzo>Palazzo Moltieri</><>
{Palazzo has Palazzo.identified_entrances :, a few feet from a <:door>door</> and three meters below the <:window>{not actions_window.looked : windows| { name_window()} window}</>}
<>.{RopeAttached and Windows has left: A <:rope>grappling hook</> hangs from the open window just above you.}{RopeAttached and Windows hasnt left: A grappling hook hangs from an open window, a few feet away from you.}

{came_from(->select_gondola): <-actions_gondola(-> Exterior)}
{came_from(->select_palazzo): <-actions_palazzo(-> Exterior)}
{came_from(->select_wall): <-actions_wall(-> Exterior)}
{came_from(->select_compartment): <-actions_compartment(-> Exterior)}
{came_from(->select_window): <-actions_window(-> Exterior)}
{came_from(->select_door): <-actions_door(-> Exterior)}
{came_from(->select_combinaison): <-actions_combinaison(-> Exterior)}
{came_from(->select_rope): <-actions_rope(-> Exterior)}
{came_from(->select_door) and actions_door.examined: <-actions_ledge(-> Exterior)}
<- env_me(-> Exterior)
+ (select_gondola)[envchoice: gondola]
    -> Exterior
+ (select_wall)[envchoice: wall]
    -> Exterior
+ (select_palazzo)[envchoice: palazzo]
    -> Exterior
+ (select_compartment)[envchoice: compartment]
    -> Exterior
+ (select_window)[envchoice: window]
    -> Exterior
+ (select_door)[envchoice: door]
    -> Exterior
+ (select_combinaison)[envchoice: combinaison]
    -> Exterior
+ (select_rope)[envchoice: rope]
    -> Exterior

-
-> DONE

=== Water
You are in the water. Above you is your <:gondola>gondola</>, parked against the <:palazzo>Palazzo Moltieri</>

{came_from(->select_palazzo): <-actions_palazzo(-> Water)}
{came_from(->select_gondola): <-actions_gondola_from_water(-> Water)}

+ (select_palazzo)[envchoice: palazzo]
    -> Water
+ (select_gondola)[envchoice: gondola]
    -> Water
-
-> DONE

=== env_me(-> then)
* [envchoice: me]
    Classier than ever. In this black silk bodysuit nobody can determine who or what you are. Except for your signature white tie, identifying you as The Stealer. #didascalie
    ~ Me++
    ->then
-
-> then


=== function name_window()
{Windows:
 - xleft: left-most 
 - left: left 
 - middle:middle 
 - right:right 
 - xright: right-most 

}

=== actions_gondola ( -> then)
    + [actchoice: Look]
        It looks like any of the thousands of other gondolas that glide along the canals of Venice. # didascalie
        Except this one has a secret compartment! # didascalie
        ~ Gondola++
        ~ Compartment += Compartment.known
    + [actchoice: Move left]
        {Windows > xleft:
            You move the gondola a few feet left. # didascalie
            ~ Windows --
            You are now under the {name_window()} window. # didascalie
        -else :
            You can't move the gondola further left. # didascalie
        }
    + [actchoice: Move right]
        {Windows < xright:
            You move the gondola a few feet right. # didascalie
            ~ Windows ++
            You are now under the {name_window()} window. # didascalie
        -else :
            You can't move the gondola further right. # didascalie
        }

-        
-> then

=== actions_gondola_from_water ( -> then)
    + [actchoice: Look]
        The gondola looks very stable on the dark waters. You know it's a lie. #didascalie
    + [actchoice: Climb]
        You climb back inside the gondola. # actionscalie
        -> Exterior

-        
-> then

=== actions_palazzo ( -> then)
    + [actchoice: Look]
        This is the home of the Moltieri family. {One of the richest families in Venice. But you are not interested in stealing riches.|} You want their Token, the only way to vote in the upcoming Doge's Election. #didascalie
    + [actchoice: Enter]
        To set foot inside, you may try {not actions_ledge.jumped: the door that's a short jump away, or }one of the windows, three meters above your head. # didascalie
        ~ Palazzo += Palazzo.identified_entrances
-
-> then

=== actions_wall ( -> then)
    + [actchoice: Examine]
        This is... well... a wall. A pretty slick one. # didascalie
    + [actchoice: Climb]
        You try to climb but there are no asperities to hold on to. # didascalie
        Maybe if you had a pick, you could succeed. # didascalie
        ~ SearchableObjects += pick
-    
-> then

=== actions_window ( -> then)
    + (looked)[actchoice: Look]
        {There are five windows up there.|} <>
        {Windows has left :
            The window directly above the gondola seems open! # didascalie
        -else:
            The window directly above the gondola is closed. You can't make out whether the others are or not from your current position. # didascalie
        }
            
    + {not (Inventory has rope)}[actchoice: Climb]
        The window is too high. # didascalie
        Maybe if you had a grappling hook, you could succeed. # didascalie
        ~ SearchableObjects += rope
    + {Inventory has rope and not RopeAttached}[actchoice: Throw grappling hook]
        You launch the grappling hook towards the window above you <>
        {Windows hasnt left:
            but it bounces back on a closed window. # didascalie
         - else:
            and it grips on the open window frame. # didascalie
            ~ RopeAttached = true
         }
-    
-> then

=== actions_door ( -> then)
    + [actchoice: Open]
        You are too far away to open it. # didascalie
    + (examined)[actchoice: Examine]
        This is a wooden door with an old lock, the kind you could pick easily. # didascalie
        {not actions_ledge.jumped: Below it is a small ledge you could probably jump on. # didascalie}
        {actions_ledge.jumped: Now that the small ledge is destroyed, it is no longer an entry option. # didascalie}
-
-> then

=== actions_ledge ( -> then)
    + (examined)[actchoice: Examine ledge]
        {jumped: There's not much left of the ledge. | Now that you look it more closely, the ledge looks a little rotten.} # didascalie
    * (jumped)[actchoice: Jump on ledge{examined: anyway}]
        One... # actionscalie
        Two... # actionscalie
        Three... # actionscalie
        You propel yourself from the gondola... # actionscalie
        ... land on the small ledge below it... # actionscalie
        ... that breaks under your weight # actionscalie
        ... and you end up in the dark and cold water of the canal. # actionscalie
        -> Water
    * {jumped}[actchoice: Jump]
        No, you are not making the same mistake twice. # didascalie
-    
-> then


=== actions_compartment ( -> then)
    + [actchoice: Look]
        If you didn't know it was there you would never have guessed its presence. # didascalie
    + {Compartment <= Compartment.unlockable} [actchoice: Open]
        It's {locked\?!|still locked}. # didascalie
        ~ Compartment += Compartment.locked
    + {Compartment has Compartment.unlockable and Compartment hasnt Compartment.unlocked} [actchoice: Unlock with key]
        ~ Compartment += Compartment.unlocked
        You unlock the compartment. # didascalie
    + {Compartment has Compartment.unlocked and LIST_COUNT(SearchableObjects) == 0} [actchoice: Search]
        There are a million items in there, but not one in particular you seem to actually need {LIST_COUNT(Inventory) > 0: or already have}. # didascalie
    + {Compartment has Compartment.unlocked and SearchableObjects has pick} [actchoice: Look for a pick]
        {Sadly you can't find a|Still no} pick in there. # didascalie
    * {Compartment has Compartment.unlocked and SearchableObjects has rope} [actchoice: Look for a grappling hook]
        It takes you less than five minutes to find the grappling hook amongst the million items in the secret compartment. Thanks Marie Kondo. # didascalie
        ~ Inventory += rope
-
-> then

=== actions_combinaison ( -> then)
    + [actchoice: Look]
        Black silky elastomer. Very elegant. # didascalie
    + [actchoice: Search]
        You find a key in your pocket. # didascalie
        ~ Compartment += Compartment.unlockable
-
-> then

=== actions_rope ( -> then)
    * [actchoice: Climb]
        Congratulations! You managed to enter the Palazzo. 
        To be continued... #didascalie
-    
-> END

=== function came_from(-> x) 
    ~ return TURNS_SINCE(x) == 0

=== function max(a,b) ===
	{ a < b:
		~ return b
	- else:
		~ return a
	}


