import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


    	//---------------------------SLIDER----------------------------------
    $( document ).ready(function() {

	var article = $(".articlesProjet");

	
	var largeur = article.innerWidth();
	$(window).resize(function() {
		var largeur = article.innerWidth();
	});
	var posArticle1 = 0;
	var posArticle2 = largeur;
	var posArticle3 = largeur*2;


	$("#flecheDroite").click(function(){
		if ($(".troisiemePaire").css("left") != "0px") {
			$(".premierePaire").animate({left: posArticle1 - largeur}, 250);
			$(".deuxiemePaire").animate({left: posArticle2 - largeur}, 250);
			$(".troisiemePaire").animate({left: posArticle3 - largeur}, 250);
			posArticle1 = posArticle1 - largeur;
			posArticle2 = posArticle2 - largeur;
			posArticle3 = posArticle3 - largeur;
			}
	}); 

	$("#flecheGauche").click(function(){
	 	if ($(".premierePaire").css("left") != "0px") {
			$(".premierePaire").animate({left: posArticle1 + largeur}, 250);
			$(".deuxiemePaire").animate({left: posArticle2 + largeur}, 250);
			$(".troisiemePaire").animate({left: posArticle3 + largeur}, 250);
			posArticle1 = posArticle1 + largeur;
			posArticle2 = posArticle2 + largeur;
			posArticle3 = posArticle3 + largeur;
		}
}); 
$("#flecheDroite").click(function(){
		if ($(".troisiemePaire").css("left") == "0px") {
			$(".premierePaire").animate({left: "0%"}, 250);
			$(".deuxiemePaire").animate({left: "100%"}, 250);
			$(".troisiemePaire").animate({left: "200%"}, 250);
			posArticle1 = 0;
			posArticle2 = largeur;
			posArticle3 = largeur*2;
		}
}); 

$("#flecheGauche").click(function(){
		if ($(".premierePaire").css("left") == "0px") {
			$(".premierePaire").animate({left: "-200%"}, 250);
			$(".deuxiemePaire").animate({left: "-100%"}, 250);
			$(".troisiemePaire").animate({left: "0%"}, 250);
			posArticle1 = largeur*(-2);
			posArticle2 = -largeur;
			posArticle3 = 0;
		}
}); 

//-------------------------------------------------------

$(document).scroll(function() {
  				var y = $(document).scrollTop();	
  				console.log(y);		
  				if (y > "10px") {	
    				$('#topScroll').css({opacity: '1'});  //Rend visible la petite fleche e retour en haut de page
 				} else {
    				$('#topScroll').css({opacity: '0'});	//ne fonctionne toujours pas....
  				}
			});


});
            
            
        









  }

}
