var storyContent = {"inkVersion":21,"root":[["^Venise, 19 juin 1841, un peu après minuit. ","#","^actionscalie","/#","\n",{"->":"Exterior"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Exterior":[["^À la faveur de la nouvelle lune, ","<>","\n","ev",{"VAR?":"Me"},{"VAR?":"Me.described"},"?","/ev",[{"->":".^.b","c":true},{"b":["^ dans votre <:combinaison>combinaison</> noire, ",{"->":".^.^.^.9"},null]}],"nop","<>","\n","^<:me>vous</>","<>","\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^ guidez",{"->":".^.^.17"},null],"s1":["pop","^ avez amarré",{"->":".^.^.17"},null],"#f":5}],"^ ","<>","\n","^votre <:gondola>gondole</> ","<>","\n","ev",{"VAR?":"Compartment"},{"VAR?":"Compartment.known"},"?","/ev",[{"->":".^.b","c":true},{"b":["^ munie d'un <:compartment>compartiment secret</> ",{"->":".^.^.^.28"},null]}],"nop","<>","\n","^le long du <:wall>mur</> du <:palazzo>Palazzo Moltieri</>","<>","\n","ev",{"VAR?":"Palazzo"},{"VAR?":"Palazzo.identified_entrances"},"?","/ev",[{"->":".^.b","c":true},{"b":["^, à proximité d'une <:door>porte</> et trois mètres sous <:window>","ev",{"CNT?":"actions_window.1.c-0"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ ses fenêtres",{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["^ la fenêtre ","ev",{"f()":"name_window"},"out","/ev",{"->":".^.^.^.7"},null]}],"nop","^</>",{"->":".^.^.^.40"},null]}],"nop","\n","<>","^.","ev",{"VAR?":"RopeAttached"},{"VAR?":"Windows"},{"VAR?":"left"},"?","&&","/ev",[{"->":".^.b","c":true},{"b":["^ Un <:rope>grappin</> pend de la fenêtre ouverte juste au-dessus de vous.",{"->":".^.^.^.52"},null]}],"nop","ev",{"VAR?":"RopeAttached"},{"VAR?":"Windows"},{"VAR?":"left"},"!?","&&","/ev",[{"->":".^.b","c":true},{"b":["^ Un grappin pend d'une fenêtre ouverte à quelques mètres de vous.",{"->":".^.^.^.61"},null]}],"nop","\n","ev",{"^->":"Exterior.0.c-0"},{"f()":"came_from"},"/ev",[{"->":".^.b","c":true},{"b":["^ ","ev",{"^->":"Exterior"},"/ev","thread",{"->":"actions_gondola"},{"->":".^.^.^.68"},null]}],"nop","\n","ev",{"^->":"Exterior.0.c-2"},{"f()":"came_from"},"/ev",[{"->":".^.b","c":true},{"b":["^ ","ev",{"^->":"Exterior"},"/ev","thread",{"->":"actions_palazzo"},{"->":".^.^.^.75"},null]}],"nop","\n","ev",{"^->":"Exterior.0.c-1"},{"f()":"came_from"},"/ev",[{"->":".^.b","c":true},{"b":["^ ","ev",{"^->":"Exterior"},"/ev","thread",{"->":"actions_wall"},{"->":".^.^.^.82"},null]}],"nop","\n","ev",{"^->":"Exterior.0.c-3"},{"f()":"came_from"},"/ev",[{"->":".^.b","c":true},{"b":["^ ","ev",{"^->":"Exterior"},"/ev","thread",{"->":"actions_compartment"},{"->":".^.^.^.89"},null]}],"nop","\n","ev",{"^->":"Exterior.0.c-4"},{"f()":"came_from"},"/ev",[{"->":".^.b","c":true},{"b":["^ ","ev",{"^->":"Exterior"},"/ev","thread",{"->":"actions_window"},{"->":".^.^.^.96"},null]}],"nop","\n","ev",{"^->":"Exterior.0.c-5"},{"f()":"came_from"},"/ev",[{"->":".^.b","c":true},{"b":["^ ","ev",{"^->":"Exterior"},"/ev","thread",{"->":"actions_door"},{"->":".^.^.^.103"},null]}],"nop","\n","ev",{"^->":"Exterior.0.c-6"},{"f()":"came_from"},"/ev",[{"->":".^.b","c":true},{"b":["^ ","ev",{"^->":"Exterior"},"/ev","thread",{"->":"actions_combinaison"},{"->":".^.^.^.110"},null]}],"nop","\n","ev",{"^->":"Exterior.0.c-7"},{"f()":"came_from"},"/ev",[{"->":".^.b","c":true},{"b":["^ ","ev",{"^->":"Exterior"},"/ev","thread",{"->":"actions_rope"},{"->":".^.^.^.117"},null]}],"nop","\n","ev",{"^->":"Exterior.0.c-5"},{"f()":"came_from"},{"CNT?":"actions_door.1.c-1"},"&&","/ev",[{"->":".^.b","c":true},{"b":["^ ","ev",{"^->":"Exterior"},"/ev","thread",{"->":"actions_ledge"},{"->":".^.^.^.126"},null]}],"nop","\n","ev",{"^->":"Exterior"},"/ev","thread",{"->":"env_me"},"ev","str","^envchoice: gondola","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^envchoice: wall","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^envchoice: palazzo","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^envchoice: compartment","/str","/ev",{"*":".^.c-3","flg":4},"ev","str","^envchoice: window","/str","/ev",{"*":".^.c-4","flg":4},"ev","str","^envchoice: door","/str","/ev",{"*":".^.c-5","flg":4},"ev","str","^envchoice: combinaison","/str","/ev",{"*":".^.c-6","flg":4},"ev","str","^envchoice: rope","/str","/ev",{"*":".^.c-7","flg":4},{"c-0":["\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":7}],"c-1":["\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":7}],"c-2":["\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":7}],"c-3":["\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":7}],"c-4":["\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":7}],"c-5":["\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":7}],"c-6":["\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":7}],"c-7":["\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":7}],"g-0":["done",{"#f":5}]}],{"#f":3}],"Water":[["^Vous être dans l'eau. Au-dessus de vous, votre <:gondola>gondole</>, amarrée contre le <:palazzo>Palazzo Moltieri</>.","\n","ev",{"^->":"Water.0.c-0"},{"f()":"came_from"},"/ev",[{"->":".^.b","c":true},{"b":["^ ","ev",{"^->":"Water"},"/ev","thread",{"->":"actions_palazzo"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"^->":"Water.0.c-1"},{"f()":"came_from"},"/ev",[{"->":".^.b","c":true},{"b":["^ ","ev",{"^->":"Water"},"/ev","thread",{"->":"actions_gondola_from_water"},{"->":".^.^.^.14"},null]}],"nop","\n","ev","str","^envchoice: palazzo","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^envchoice: gondola","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"Water"},{"->":".^.^.g-0"},{"#f":7}],"c-1":["\n",{"->":"Water"},{"->":".^.^.g-0"},{"#f":7}],"g-0":["done",{"#f":5}]}],{"#f":3}],"env_me":[{"temp=":"then"},["ev","str","^envchoice: me","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Plus classe que jamais. Dans cette combinaison de soie noire, personne ne peut savoir qui vous êtes. Seul signe distinctif : la petite cravate blanche vous identifie comme Camille de la Cambriole. ","#","^didascalie","/#","\n","ev",{"VAR?":"Me"},1,"+",{"VAR=":"Me","re":true},"/ev",{"->":"then","var":true},{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"then","var":true},{"#f":5}]}],{"#f":1}],"name_window":["ev",{"VAR?":"Windows"},"/ev",["du","ev",{"VAR?":"xleft"},"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^la plus à gauche","\n",{"->":".^.^.^.9"},null]}],["du","ev",{"VAR?":"left"},"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^de gauche","\n",{"->":".^.^.^.9"},null]}],["du","ev",{"VAR?":"middle"},"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^du milieu","\n",{"->":".^.^.^.9"},null]}],["du","ev",{"VAR?":"right"},"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^de droite","\n",{"->":".^.^.^.9"},null]}],["du","ev",{"VAR?":"xright"},"==","/ev",{"->":".^.b","c":true},{"b":["pop","\n","^la plus à droite","\n",{"->":".^.^.^.9"},null]}],"pop","nop","\n",{"#f":1}],"actions_gondola":[{"temp=":"then"},["ev","str","^actchoice: Examiner","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^actchoice: Ramer vers la gauche","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^actchoice: Ramer vers la droite","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Identique aux milliers d'autres qui glissent sur les canaux de Venise. ","#","^didascalie","/#","\n","^Sauf que la vôtre a un compartiment secret ! ","#","^didascalie","/#","\n","ev",{"VAR?":"Gondola"},1,"+",{"VAR=":"Gondola","re":true},"/ev","ev",{"VAR?":"Compartment"},{"VAR?":"Compartment.known"},"+",{"VAR=":"Compartment","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"Windows"},{"VAR?":"xleft"},">","/ev",[{"->":".^.b","c":true},{"b":["\n","^Vous déplacez la gondole d'environ un mètre vers la gauche. ","#","^didascalie","/#","\n","ev",{"VAR?":"Windows"},1,"-",{"VAR=":"Windows","re":true},"/ev","ev",{"CNT?":"actions_window.1.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^Vous êtes maintenant sous la fenêtre ","ev",{"f()":"name_window"},"out","/ev","^. ","#","^didascalie","/#","\n",{"->":".^.^.^.16"},null]}],"nop","\n",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n","^Vous ne pouvez pas ramer davantage vers la gauche. ","#","^didascalie","/#","\n",{"->":".^.^.^.8"},null]}],"nop","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["\n","ev",{"VAR?":"Windows"},{"VAR?":"xright"},"<","/ev",[{"->":".^.b","c":true},{"b":["\n","^Vous déplacez la gondole d'environ un mètre vers la droite. ","#","^didascalie","/#","\n","ev",{"VAR?":"Windows"},1,"+",{"VAR=":"Windows","re":true},"/ev","ev",{"CNT?":"actions_window.1.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["\n","^Vous êtes maintenant sous la fenêtre ","ev",{"f()":"name_window"},"out","/ev","^. ","#","^didascalie","/#","\n",{"->":".^.^.^.16"},null]}],"nop","\n",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n","^Vous ne pouvez pas ramer davantage vers la droite. ","#","^didascalie","/#","\n",{"->":".^.^.^.8"},null]}],"nop","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"then","var":true},{"#f":5}]}],{"#f":1}],"actions_gondola_from_water":[{"temp=":"then"},["ev","str","^actchoice: Examiner","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^actchoice: Monter","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^La gondole, tranquille, a l'air stable sur les eaux sombres. C'est un leurre. ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^Vous vous hissez sur la gondole. ","#","^actionscalie","/#","\n",{"->":"Exterior"},{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"then","var":true},{"#f":5}]}],{"#f":1}],"actions_palazzo":[{"temp=":"then"},["ev","str","^actchoice: Examiner","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^actchoice: Entrer","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^C'est ici qu'habite la Famille Moltieri.",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^C'est l'une des Familles les plus riches de Venise. Mais ce ne sont pas leurs richesses que vous convoitez.",{"->":".^.^.17"},null],"s1":["pop",{"->":".^.^.17"},null],"#f":5}],"^ Vous voulez récupérer leur Boule Dorée, car c'est pour vous le seul moyen de voter aux prochaines Élections Dogéales. ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^Pour pénétrer dans le palazzo, vous ","ev",{"CNT?":"actions_ledge.1.c-1"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ avez le choix entre passer par la porte, moyennant un petit saut de cabri, ou ",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^ n'avez pas d'autre choix que de passer ",{"->":".^.^.^.8"},null]}],"nop","^ par les fenêtres, trois bons mètres au-dessus de votre tête. ","#","^didascalie","/#","\n","ev",{"VAR?":"Palazzo"},{"VAR?":"Palazzo.identified_entrances"},"+",{"VAR=":"Palazzo","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"then","var":true},{"#f":5}]}],{"#f":1}],"actions_wall":[{"temp=":"then"},["ev","str","^actchoice: Examiner","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^actchoice: Escalader","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^C'est un mur. Un mur enduit. À vrai dire, vous n'avez jamais vu un enduit aussi lisse. ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^Vous essayez d'escalader, mais il n'y a aucune aspérité à laquelle s'accrocher. ","#","^didascalie","/#","\n","^Peut-être qu'avec un piolet, vous pourriez y arriver. ","#","^didascalie","/#","\n","ev",{"VAR?":"SearchableObjects"},{"VAR?":"pick"},"+",{"VAR=":"SearchableObjects","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"then","var":true},{"#f":5}]}],{"#f":1}],"actions_window":[{"temp=":"then"},["ev","str","^actchoice: Regarder","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^actchoice: Escalader","/str",{"VAR?":"Inventory"},{"VAR?":"rope"},"?","!","/ev",{"*":".^.c-1","flg":5},"ev","str","^actchoice: Lancer grappin","/str",{"VAR?":"Inventory"},{"VAR?":"rope"},"?",{"VAR?":"RopeAttached"},"!","&&","/ev",{"*":".^.c-2","flg":5},{"c-0":["\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Les fenêtres sont au nombre de cinq.",{"->":".^.^.17"},null],"s1":["pop",{"->":".^.^.17"},null],"#f":5}],"^ ","<>","\n","ev",{"VAR?":"Windows"},{"VAR?":"left"},"?","/ev",[{"->":".^.b","c":true},{"b":["\n","^La fenêtre directement au-dessus de la gondole semble ouverte ! ","#","^didascalie","/#","\n",{"->":".^.^.^.12"},null]}],[{"->":".^.b"},{"b":["\n","^La fenêtre au-dessus de vous est fermée. De là où se trouve la gondole, vous ne pouvez pas voir si les autres fenêtres sont ouvertes ou pas. ","#","^didascalie","/#","\n",{"->":".^.^.^.12"},null]}],"nop","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^Les trois mètres qui vous séparent ","ev",{"CNT?":".^.^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ de la fenêtre",{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["^des fenêtres",{"->":".^.^.^.7"},null]}],"nop","^ sont infranchissables. ","#","^didascalie","/#","\n","^Peut-être que si vous aviez un grappin, ce serait plus facile ? ","#","^didascalie","/#","\n","ev",{"VAR?":"SearchableObjects"},{"VAR?":"rope"},"+",{"VAR=":"SearchableObjects","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-2":["\n","^Vous lancez le grappin vers la fenêtre juste au-dessus de vous ","<>","\n","ev",{"VAR?":"Windows"},{"VAR?":"left"},"!?","/ev",[{"->":".^.b","c":true},{"b":["\n","^mais il rencontre une fenêtre fermé et retombe vers vous. ","#","^didascalie","/#","\n",{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","^qui s'accroche au rebord de la fenêtre ouverte. ","#","^didascalie","/#","\n","ev",true,"/ev",{"VAR=":"RopeAttached","re":true},{"->":".^.^.^.11"},null]}],"nop","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"then","var":true},{"#f":5}]}],{"#f":1}],"actions_door":[{"temp=":"then"},["ev","str","^actchoice: Ouvrir","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^actchoice: Examiner","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Vous êtes trop loin pour l'ouvrir. ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^C'est une porte en bois munie d'une serrure ancienne, le genre que vous pourriez forcer facilement. ","#","^didascalie","/#","\n","ev",{"CNT?":"actions_ledge.1.c-1"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ Juste en dessous se trouve un petit rebord sur lequel vous pourriez sauter. ","#","^didascalie",{"->":".^.^.^.11"},null]}],"nop","/#","\n","ev",{"CNT?":"actions_ledge.1.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["^ Maintenant que le petit rebord sous la porte est détruit, cette porte n'est plus vraiment une entrée possible. ","#","^didascalie",{"->":".^.^.^.18"},null]}],"nop","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"then","var":true},{"#f":5}]}],{"#f":1}],"actions_ledge":[{"temp=":"then"},["ev","str","^actchoice: Examiner rebord","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^actchoice: Sauter sur le rebord ","ev",{"CNT?":".^.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ tout de même",{"->":".^.^.^.13"},null]}],"nop","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^actchoice: Sauter","/str",{"CNT?":".^.c-1"},"/ev",{"*":".^.c-2","flg":21},{"c-0":["\n","ev",{"CNT?":".^.^.c-1"},"/ev",[{"->":".^.b","c":true},{"b":["^ Il ne reste plus grand chose de ce petit rebord. ",{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{"b":["^ En y regardant de plus prêt, le rebord a l'air d'un bois vermoulu pas très solide.",{"->":".^.^.^.6"},null]}],"nop","^ ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^À la une... ","#","^actionscalie","/#","\n","^À la deux... ","#","^actionscalie","/#","\n","^À la trois... ","#","^actionscalie","/#","\n","^Vous initiez un saut de cabri... ","#","^actionscalie","/#","\n","^... Vous vous réceptionnez sur le petit rebord... ","#","^actionscalie","/#","\n","^... qui cède alors sous votre poids ","#","^actionscalie","/#","\n","^... entraînant votre chute dans les eaux froides et sombres du canal. ","#","^actionscalie","/#","\n",{"->":"Water"},{"->":".^.^.g-0"},{"#f":5}],"c-2":["\n","^Pas question de faire la même erreur deux fois. ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"then","var":true},{"#f":5}]}],{"#f":1}],"actions_compartment":[{"temp=":"then"},["ev","str","^actchoice: Examiner","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^actchoice: Ouvrir","/str",{"VAR?":"Compartment"},{"VAR?":"Compartment.unlockable"},"<=","/ev",{"*":".^.c-1","flg":5},"ev","str","^actchoice: Déverrouiller avec clé","/str",{"VAR?":"Compartment"},{"VAR?":"Compartment.unlockable"},"?",{"VAR?":"Compartment"},{"VAR?":"Compartment.unlocked"},"!?","&&","/ev",{"*":".^.c-2","flg":5},"ev","str","^actchoice: Chercher","/str",{"VAR?":"Compartment"},{"VAR?":"Compartment.unlocked"},"?",{"VAR?":"SearchableObjects"},"LIST_COUNT",0,"==","&&","/ev",{"*":".^.c-3","flg":5},"ev","str","^actchoice: Chercher un piolet","/str",{"VAR?":"Compartment"},{"VAR?":"Compartment.unlocked"},"?",{"VAR?":"SearchableObjects"},{"VAR?":"pick"},"?","&&","/ev",{"*":".^.c-4","flg":5},"ev","str","^actchoice: Chercher un grappin","/str",{"VAR?":"Compartment"},{"VAR?":"Compartment.unlocked"},"?",{"VAR?":"SearchableObjects"},{"VAR?":"rope"},"?","&&","/ev",{"*":".^.c-5","flg":21},{"c-0":["\n","^Jamais vous n'auriez pu soupçonner la présence de ce compartiment secret si vous ne l'aviez pas installé vous-même. ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^Il est ",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^verrouillé ?!",{"->":".^.^.17"},null],"s1":["pop","^toujours verrouillé",{"->":".^.^.17"},null],"#f":5}],"^.","#","^didascalie","/#","\n","ev",{"VAR?":"Compartment"},{"VAR?":"Compartment.locked"},"+",{"VAR=":"Compartment","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"c-2":["\n","ev",{"VAR?":"Compartment"},{"VAR?":"Compartment.unlocked"},"+",{"VAR=":"Compartment","re":true},"/ev","^Vous déverrouillez le compartiment. ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"c-3":["\n","^Il y a un million de trucs là-dedans, mais rien dont vous sembliez avoir un besoin pressant ","ev",{"VAR?":"Inventory"},"LIST_COUNT",0,">","/ev",[{"->":".^.b","c":true},{"b":["^ ou que vous n'ayiez pas déjà en votre possession",{"->":".^.^.^.9"},null]}],"nop","^. ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"c-4":["\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Malheureusement, il n'y a pas de ",{"->":".^.^.17"},null],"s1":["pop","^Toujours pas de",{"->":".^.^.17"},null],"#f":5}],"^ piolet dans ce bazar. ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"c-5":["\n","^En moins de cinq minutes vous dénichez un grappin parmi les millions de trucs rangés dans le compartiment secret. Merci Marie Kondo. ","#","^didascalie","/#","\n","ev",{"VAR?":"Inventory"},{"VAR?":"rope"},"+",{"VAR=":"Inventory","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"then","var":true},{"#f":5}]}],{"#f":1}],"actions_combinaison":[{"temp=":"then"},["ev","str","^actchoice: Regarder","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^actchoice: Fouiller","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Elastomère de soie véritable. Teint en noir profond. D'une élégance rare. ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","^Il y a une clé dans votre poche. ","#","^didascalie","/#","\n","ev",{"VAR?":"Compartment"},{"VAR?":"Compartment.unlockable"},"+",{"VAR=":"Compartment","re":true},"/ev",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"->":"then","var":true},{"#f":5}]}],{"#f":1}],"actions_rope":[{"temp=":"then"},["ev","str","^actchoice: Grimper","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^Félicitations ! Vous avez réussi à pénétrer dans le Palazzo.","\n","^À suivre... ","#","^didascalie","/#","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["end",{"#f":5}]}],{"#f":1}],"came_from":[{"temp=":"x"},"ev",{"VAR?":"x"},"turns",0,"==","/ev","~ret","\n",{"#f":1}],"max":[{"temp=":"b"},{"temp=":"a"},"ev",{"VAR?":"a"},{"VAR?":"b"},"<","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"b"},"/ev","~ret",{"->":"max.9"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"a"},"/ev","~ret",{"->":"max.9"},null]}],"nop","\n",{"#f":1}],"global decl":["ev",{"list":{"Me.unobserved":1}},{"VAR=":"Me"},{"list":{"Palazzo.unobserved":1}},{"VAR=":"Palazzo"},{"list":{"Gondola.unoberved":1}},{"VAR=":"Gondola"},{"list":{},"origins":["Compartment"]},{"VAR=":"Compartment"},{"list":{},"origins":["SearchableObjects"]},{"VAR=":"SearchableObjects"},{"list":{"Windows.right":4}},{"VAR=":"Windows"},{"list":{}},{"VAR=":"Inventory"},false,{"VAR=":"RopeAttached"},"/ev","end",null],"#f":1}],"listDefs":{"Me":{"unobserved":1,"described":2},"Palazzo":{"unobserved":1,"identified_entrances":2},"Gondola":{"unoberved":1,"secret_compartment":2},"Compartment":{"known":1,"locked":2,"unlockable":3,"unlocked":4},"SearchableObjects":{"rope":1,"pick":2},"Windows":{"xleft":1,"left":2,"middle":3,"right":4,"xright":5}}};