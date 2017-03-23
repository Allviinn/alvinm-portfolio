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
        console.log(data);
        this.posts = data;
    	});
		//---------------------------SLIDER----------------------------------
    	$( document ).ready(function() 
    	{

			var article = $(".articlesProjet");
	
			$("#flecheDroite").click(function(){
				if ($("#articleProjet6").css("opacity") == "1") 
				{
					$("#articleProjet6").css({"opacity": "0", "display" : "none"});
					$("#articleProjet5").css({"opacity": "1", "display" : "block"}); 

				} else if ($("#articleProjet5").css("opacity") == "1") 
				{
					$("#articleProjet5").css({"opacity": "0", "display" : "none"});
					$("#articleProjet4").css({"opacity": "1", "display" : "block"});

				} else if ($("#articleProjet4").css("opacity") == "1") 
				{
					$("#articleProjet4").css({"opacity": "0", "display" : "none"});
					$("#articleProjet3").css({"opacity": "1", "display" : "block"}); 

				} else if ($("#articleProjet3").css("opacity") == "1") 
				{
					$("#articleProjet3").css({"opacity": "0", "display" : "none"});
					$("#articleProjet2").css({"opacity": "1", "display" : "block"}); 

				} else if ($("#articleProjet2").css("opacity") == "1") 
				{
					$("#articleProjet2").css({"opacity": "0", "display" : "none"});
					$("#articleProjet1").css({"opacity": "1", "display" : "block"}); 

				} else if ($("#articleProjet1").css("opacity") == "1") 
				{
					$("#articleProjet1").css({"opacity": "0", "display" : "none"});
					$("#articleProjet6").css({"opacity": "1", "display" : "block"}); 
				}
				
			}); 
	
			$("#flecheGauche").click(function(){
	 			if ($("#articleProjet6").css("opacity") == "1") 
				{
					$("#articleProjet6").css({"opacity": "0", "display" : "none"});
					$("#articleProjet1").css({"opacity": "1", "display" : "block"}); 

				} else if ($("#articleProjet1").css("opacity") == "1") 
				{
					$("#articleProjet1").css({"opacity": "0", "display" : "none"});
					$("#articleProjet2").css({"opacity": "1", "display" : "block"});

				} else if ($("#articleProjet2").css("opacity") == "1") 
				{
					$("#articleProjet2").css({"opacity": "0", "display" : "none"});
					$("#articleProjet3").css({"opacity": "1", "display" : "block"}); 

				} else if ($("#articleProjet3").css("opacity") == "1") 
				{
					$("#articleProjet3").css({"opacity": "0", "display" : "none"});
					$("#articleProjet4").css({"opacity": "1", "display" : "block"}); 

				} else if ($("#articleProjet4").css("opacity") == "1") 
				{
					$("#articleProjet4").css({"opacity": "0", "display" : "none"});
					$("#articleProjet5").css({"opacity": "1", "display" : "block"}); 

				} else if ($("#articleProjet5").css("opacity") == "1") 
				{
					$("#articleProjet5").css({"opacity": "0", "display" : "none"});
					$("#articleProjet6").css({"opacity": "1", "display" : "block"}); 
				}
			}); 

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
