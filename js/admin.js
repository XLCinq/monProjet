 window.addEventListener('load', init);
        
        function init() {

          //Cible de l'événement
          var cible = document.getElementById("menu");

          //Assigner les différentes sections de contenu à une variable 
          var ecoles        = document.getElementById('ecoles');
          var commissions   = document.getElementById('commissions');
          var contenus      = document.getElementById('contenus');
          var utilisateurs  = document.getElementById('utilisateurs');
          var modules       = document.getElementById('modules');
          var matieres      = document.getElementById('matieres');

          //Tableau des différents contenus  
          var tabSection = document.getElementsByClassName('section');
          //Tableau des éléments de liste li
          var tabLi = document.getElementsByClassName('active');

          //Écoute pour un clique sur la barre de navigation
          cible.addEventListener("click", function(e) { 
      
            //Appel de la fonction de réinitialisation de la classe
            réinitialiserClasse(tabSection);
            réinitialiserClasse(tabLi); 

            //Récupérer le nom de la classe de l'onglet cliqué 
            //dans la barre de navigation
            var etat = e.target.className;
            //Récupère l'élément de la classe contenu
            var ancre = document.getElementsByClassName(etat);

            //Afficher le contenu relatif à l'onglet cliqué
            //dans la section d'affichage et activer l'onglet
            switch(etat) {          
                                    
              case("ecoles"):       //Attribuer les classes de bootstrap et de visibilité à la table correspondante
                                    ecoles.className = "section visible";
                                    //Cibler le parent de l'élément et attribuer la classe active
                                    ancre[0].parentNode.className = "active";
                                    break;
              case("commissions"):  commissions.className = "section visible";
                                    ancre[0].parentNode.className = "active";
                                    break;  
              case("contenus"):     contenus.className = "section visible";  
                                    ancre[0].parentNode.className = "active";
                                    break;
              case("utilisateurs"): utilisateurs.className = "section visible";
                                    ancre[0].parentNode.className = "active";
                                    break;          
              case("modules"):      modules.className = "section visible"; 
                                    ancre[0].parentNode.className = "active";
                                    break;
              case("matieres"):     matieres.className = "section visible";
                                    ancre[0].parentNode.className = "active";
                                    break;                                
            } 
          });
      }

          //Réinitialise les classes du tableau d'éléments
          function réinitialiserClasse(tabElements) {

            for(i = 0; i < tabElements.length; i++) {
                if(tabElements[i].className == "section visible") {
                  tabElements[i].className = "hidden";
                  break;
                } else if(tabElements[i].className == "active"){
                  tabElements[i].className = "";
                  break;
                }
            }
          }
      