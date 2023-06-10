LIST Me = (unobserved), described
LIST Palazzo = (unobserved), identified_entrances
LIST Gondola = (unoberved), secret_compartment
LIST Compartment = known, locked, unlockable, unlocked
LIST SearchableObjects = rope, pick
LIST Windows = xleft, left, middle, (right), xright
VAR Inventory = ()
VAR RopeAttached = false

Venise, 19 juin 1841, un peu après minuit. # actionscalie

-> Exterior

=== Exterior
À la faveur de la nouvelle lune, <>
{Me has Me.described : dans votre <:combinaison>combinaison</> noire, }<>
<:me>vous</><>

{\ guidez| avez amarré} <>
votre <:gondola>gondole</> <>
{Compartment has Compartment.known: munie d'un <:compartment>compartiment secret</> }<>
le long du <:wall>mur</> du <:palazzo>Palazzo Moltieri</><>
{Palazzo has Palazzo.identified_entrances :, à proximité d'une <:door>porte</> et trois mètres sous <:window>{not actions_window.looked : ses fenêtres| la fenêtre { name_window()}}</>}
<>.{RopeAttached and Windows has left: Un <:rope>grappin</> pend de la fenêtre ouverte juste au-dessus de vous.}{RopeAttached and Windows hasnt left: Un grappin pend d'une fenêtre ouverte à quelques mètres de vous.}

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
Vous être dans l'eau. Au-dessus de vous, votre <:gondola>gondole</>, amarrée contre le <:palazzo>Palazzo Moltieri</>.

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
    Plus classe que jamais. Dans cette combinaison de soie noire, personne ne peut savoir qui vous êtes. Seul signe distinctif : la petite cravate blanche vous identifie comme Camille de la Cambriole. # didascalie
    ~ Me++
    ->then
-
-> then


=== function name_window()
{Windows:
 - xleft: la plus à gauche
 - left: de gauche
 - middle: du milieu
 - right: de droite
 - xright: la plus à droite

}

=== actions_gondola ( -> then)
    + [actchoice: Examiner]
        Identique aux milliers d'autres qui glissent sur les canaux de Venise. # didascalie
        Sauf que la vôtre a un compartiment secret ! # didascalie
        ~ Gondola++
        ~ Compartment += Compartment.known
    + [actchoice: Ramer vers la gauche]
        {Windows > xleft:
            Vous déplacez la gondole d'environ un mètre vers la gauche. # didascalie
            ~ Windows --
            {actions_window.looked:
                - Vous êtes maintenant sous la fenêtre {name_window()}. # didascalie
            }
        -else :
            Vous ne pouvez pas ramer davantage vers la gauche. # didascalie
        }
    + [actchoice: Ramer vers la droite]
        {Windows < xright:
            Vous déplacez la gondole d'environ un mètre vers la droite. # didascalie
            ~ Windows ++
            {actions_window.looked:
                - Vous êtes maintenant sous la fenêtre {name_window()}. # didascalie
            }
        -else :
            Vous ne pouvez pas ramer davantage vers la droite. # didascalie
        }

-        
-> then

=== actions_gondola_from_water ( -> then)
    + [actchoice: Examiner]
        La gondole, tranquille, a l'air stable sur les eaux sombres. C'est un leurre. # didascalie
    + [actchoice: Monter]
        Vous vous hissez sur la gondole. # actionscalie
        -> Exterior

-        
-> then

=== actions_palazzo ( -> then)
    + [actchoice: Examiner]
        C'est ici qu'habite la Famille Moltieri.{C'est l'une des Familles les plus riches de Venise. Mais ce ne sont pas leurs richesses que vous convoitez.|} Vous voulez récupérer leur Boule Dorée, car c'est pour vous le seul moyen de voter aux prochaines Élections Dogéales. #didascalie
    + [actchoice: Entrer]
        Pour pénétrer dans le palazzo, vous {not actions_ledge.jumped: avez le choix entre passer par la porte, moyennant un petit saut de cabri, ou | n'avez pas d'autre choix que de passer } par les fenêtres, trois bons mètres au-dessus de votre tête. # didascalie
        ~ Palazzo += Palazzo.identified_entrances
-
-> then

=== actions_wall ( -> then)
    + [actchoice: Examiner]
        C'est un mur. Un mur enduit. À vrai dire, vous n'avez jamais vu un enduit aussi lisse. # didascalie
    + [actchoice: Escalader]
        Vous essayez d'escalader, mais il n'y a aucune aspérité à laquelle s'accrocher. # didascalie
        Peut-être qu'avec un piolet, vous pourriez y arriver. # didascalie
        ~ SearchableObjects += pick
-    
-> then

=== actions_window ( -> then)
    + (looked)[actchoice: Regarder]
        {Les fenêtres sont au nombre de cinq.|} <>
        {Windows has left :
            La fenêtre directement au-dessus de la gondole semble ouverte ! # didascalie
        -else:
            La fenêtre au-dessus de vous est fermée. De là où se trouve la gondole, vous ne pouvez pas voir si les autres fenêtres sont ouvertes ou pas. # didascalie
        }
            
    + {not (Inventory has rope)}[actchoice: Escalader]
        Les trois mètres qui vous séparent {looked: de la fenêtre|des fenêtres} sont infranchissables. # didascalie
        Peut-être que si vous aviez un grappin, ce serait plus facile ? # didascalie
        ~ SearchableObjects += rope
    + {Inventory has rope and not RopeAttached}[actchoice: Lancer grappin]
        Vous lancez le grappin vers la fenêtre juste au-dessus de vous <>
        {Windows hasnt left:
            mais il rencontre une fenêtre fermé et retombe vers vous. # didascalie
         - else:
            qui s'accroche au rebord de la fenêtre ouverte. # didascalie
            ~ RopeAttached = true
         }
-    
-> then

=== actions_door ( -> then)
    + [actchoice: Ouvrir]
        Vous êtes trop loin pour l'ouvrir. # didascalie
    + (examined)[actchoice: Examiner]
        C'est une porte en bois munie d'une serrure ancienne, le genre que vous pourriez forcer facilement. # didascalie
        {not actions_ledge.jumped: Juste en dessous se trouve un petit rebord sur lequel vous pourriez sauter. # didascalie}
        {actions_ledge.jumped: Maintenant que le petit rebord sous la porte est détruit, cette porte n'est plus vraiment une entrée possible. # didascalie}
-
-> then

=== actions_ledge ( -> then)
    + (examined)[actchoice: Examiner rebord]
        {jumped: Il ne reste plus grand chose de ce petit rebord. | En y regardant de plus prêt, le rebord a l'air d'un bois vermoulu pas très solide.} # didascalie
    * (jumped)[actchoice: Sauter sur le rebord {examined: tout de même}]
        À la une... # actionscalie
        À la deux... # actionscalie
        À la trois... # actionscalie
        Vous initiez un saut de cabri... # actionscalie
        ... Vous vous réceptionnez sur le petit rebord... # actionscalie
        ... qui cède alors sous votre poids # actionscalie
        ... entraînant votre chute dans les eaux froides et sombres du canal. # actionscalie
        -> Water
    * {jumped}[actchoice: Sauter]
        Pas question de faire la même erreur deux fois. # didascalie
-    
-> then


=== actions_compartment ( -> then)
    + [actchoice: Examiner]
        Jamais vous n'auriez pu soupçonner la présence de ce compartiment secret si vous ne l'aviez pas installé vous-même. # didascalie
    + {Compartment <= Compartment.unlockable} [actchoice: Ouvrir]
        Il est {verrouillé \?!|toujours verrouillé}.# didascalie
        ~ Compartment += Compartment.locked
    + {Compartment has Compartment.unlockable and Compartment hasnt Compartment.unlocked} [actchoice: Déverrouiller avec clé]
        ~ Compartment += Compartment.unlocked
        Vous déverrouillez le compartiment. # didascalie
    + {Compartment has Compartment.unlocked and LIST_COUNT(SearchableObjects) == 0} [actchoice: Chercher]
        Il y a un million de trucs là-dedans, mais rien dont vous sembliez avoir un besoin pressant {LIST_COUNT(Inventory) > 0: ou que vous n'ayiez pas déjà en votre possession}. # didascalie
    + {Compartment has Compartment.unlocked and SearchableObjects has pick} [actchoice: Chercher un piolet]
        {Malheureusement, il n'y a pas de |Toujours pas de} piolet dans ce bazar. # didascalie
    * {Compartment has Compartment.unlocked and SearchableObjects has rope} [actchoice: Chercher un grappin]
        En moins de cinq minutes vous dénichez un grappin parmi les millions de trucs rangés dans le compartiment secret. Merci Marie Kondo. # didascalie
        ~ Inventory += rope
-
-> then

=== actions_combinaison ( -> then)
    + [actchoice: Regarder]
        Elastomère de soie véritable. Teint en noir profond. D'une élégance rare. # didascalie
    + [actchoice: Fouiller]
        Il y a une clé dans votre poche. # didascalie
        ~ Compartment += Compartment.unlockable
-
-> then

=== actions_rope ( -> then)
    * [actchoice: Grimper]
        Félicitations ! Vous avez réussi à pénétrer dans le Palazzo.
        À suivre... #didascalie
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


