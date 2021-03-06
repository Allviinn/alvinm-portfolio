import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular/index';

import {Http} from "@angular/http";

import 'rxjs/Rx';

import * as $ from 'jquery';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
	@ViewChild(Content) content: Content;

	posts: any;


  	constructor(public navCtrl: NavController, public http: Http) 
  	{

  		this.http.get('http://mujkic.chalon.codeur.online/api/api.php').map(res => res.json()).subscribe(data => {


		this.posts = data;
		var posts = this.posts;
    	console.log(posts[0].titre);
		//---------------------------SLIDER----------------------------------
    	$( document ).ready(function(){ 

			$('#lienAccueil a').css({"color": "#F9643C"});
    		window.addEventListener("scroll", function() {
    			var div = $('#sectionProjet').offset().top;
    			if (div > 347){ 
					$('#lienAccueil a').css({"color": "#F9643C"});
  					$('#lienProjets a').css({"color": "black"});
  					$('#lienParcour a').css({"color": "black"});
					$('#lienContact a').css({"color": "black"});
  				} else if (div < 347 && div > -200){ 
					$('#lienAccueil a').css({"color": "black"});
  					$('#lienProjets a').css({"color": "#F9643C"});
  					$('#lienParcour a').css({"color": "black"});
					$('#lienContact a').css({"color": "black"});
  				} else if (div < -200 && div > -800){ 
					$('#lienAccueil a').css({"color": "black"});
  					$('#lienProjets a').css({"color": "black"});
					$('#lienParcour a').css({"color": "#F9643C"});
					$('#lienContact a').css({"color": "black"});
  				} else if (div < -800){ 
					$('#lienAccueil a').css({"color": "black"});
  					$('#lienParcour a').css({"color": "black"});
					$('#lienProjets a').css({"color": "black"});
					$('#lienContact a').css({"color": "#F9643C"});
				}
			}, true);

			$('.translator').on('click', function() {

				var src = $('#imgTranslate').attr("src");
				
				if(src == 'images/france.png') {
					$('#imgTranslate').attr("src", 'images/anglais.png');
					$('#lienAccueil a').text('Accueil');
					$('#lienProjets a').text('Projets');
					$('#lienParcour a').text('Parcours');
					$('#beginner').text('développeur web junior');
					$('#voirProjets').text('Voir mes projets');
					$('#aPropos p').text("Mon nom est Alvin Mujkic et je suis actuellement en formation à ACS ( Access Code School ) à Chalon-sur-Saône. Avant d'intégrer celle-ci, mon parcours n'est pas exceptionnel. Je n'ai jamais été très scolaire, donc, à part le Brevet des Collèges, je n'ai aucun diplôme. J'ai depuis surout effectué de petites missions en intérim qui ne m'apportait pas beaucoup de satisfaction. J'ai alors décider de me lancer dans la programmation pour les opportunités que ce domaine offre, et aussi car programmer me plaît. Tout d'abord, j'ai codé en ligne sur des sites de e-learning et sur différents forums. Mais ce n'était pas suffisant et il fallait intégrer une formation. Après plusieurs entretiens, j'ai trouvé ma place au sein de ma formation actuelle, ACS. Cette formation prépare au métier de dévelopeur logiciel (développeur web) et délivre un titre professionnel de niveau 3 (équivalent Bac+2).");
					$('#articleCompetences h6 strong').text('Compétences');
					$('#labelEmail').text('Votre e-mail :');
					$('#labelSujet').text('Sujet :');
					$('#message').attr('placeholder', 'Ecrivez votre message ici....');
					$('#submit').attr('value', 'Envoyer');
					$('#articleInfo h5').text('Informations complémentaires');
					$('#idNom').text('Nom :');
					$('#idPrenom').text('Prénom :');
					$('#idTel').text('Tél :');
					$('#idAdresse').text('Adresse :');
					var count = $('.articlesProjet').length;
					for (var i = 0; i < count; i++) {
						$('#projetH4' + i).html(posts[i].titre);
						$('#projetP' + i).html(posts[i].descriptif);
					}

				}

				if(src == 'images/anglais.png') {
					$('#imgTranslate').attr("src", 'images/france.png');
					$('#lienAccueil a').text('Home');
					$('#lienProjets a').text('Work');
					$('#lienParcour a').text('Course');
					$('#beginner').text('web developper junior');
					$('#voirProjets').text('View my work');
					$('#aPropos p').text("My name is Alvin Mujkic et I'm curently in ACS (Access Code School) in Chalon-Sur-Saône. Before getting in this school, my general course is not fantastic. I never really liked the traditional school, so except the Certificate of General Education, I don't have any diplomas. Generally, I had many jobs, but they all were on short periods and didn't get me any satisfaction. Then I decided to learn programming because of all the opportunities the Web offers us, and mostly because it interest me a lot. I first started to learn coding on the Internet thanks to some e-learning sites and forums. But that wasn't enough and I wanted to find a school where I would be able to learn more efficiently. After a few interviews, I finally found and was accepted in ACS school. This school prepare us to be a junior web developper and provides us a diploma that is equivalent to the second-year university level.");
					$('#articleCompetences h6 strong').text('My skills');
					$('#labelEmail').text('Your e-mail :');
					$('#labelSujet').text('Subject :');
					$('#message').attr('placeholder', 'Write your message here....');
					$('#submit').attr('value', 'Send');
					$('#articleInfo h5').text('Further informations');
					$('#idNom').text('Surname :');
					$('#idPrenom').text('Name :');
					$('#idTel').text('Tel :');
					$('#idAdresse').text('Adress :');
					var count = $('.articlesProjet').length;
					for (var i = 0; i < count; i++) {
						$('#projetH4' + i).html(posts[i].titreAnglais);
						$('#projetP' + i).html(posts[i].descrAnglais);
					}
				}
			});


			$('#submit').on('click', function(e) {

				e.preventDefault();

				var mail = $('#email').val();
				var sujet = $('#sujet').val();
				var message = $('#message').val();

				var json1={	"email":mail,
               				"sujet":sujet,
               				"message": message
              				};


              	$.ajax({
    	    		type:'POST',
    	    		url:'http://mujkic.chalon.codeur.online/api/prive.php',
    	    		crossDomain: true,
    	   			data: { "dataMail": json1 },
    	    			success: function(data){
    	    			    $('#msgAjax').html(data);
    	    			    $('#msgAjax').css('visibility', 'visible');
    	    			    $('#email').val('');
    	    			    $('#sujet').val('');
    	    			    $('#message').val('');
    	    			}
    	   
    			});
			});

		});
		
	});
  	}

  	

  	public scrollElement() {
    let element = document.getElementById('sectionProjet');
    this.content.scrollTo(0, element.offsetTop-50, 500);
  	}
  	public scrollElement1() {
    let element = document.getElementById('sectionAccueil');
    this.content.scrollTo(0, element.offsetTop, 500);
  	}
  	public scrollElement2() {
    let element = document.getElementById('sectionParcour');
    this.content.scrollTo(0, element.offsetTop-45, 500);
  	}
  	public scrollElement3() {
    let element = document.getElementById('sectionContact');
    this.content.scrollTo(0, element.offsetTop-45, 500);
  	}





}
