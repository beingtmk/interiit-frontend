import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-water-polo',
    templateUrl:'./app/scheduleandresult/waterpolo/waterpolo.html',
    styleUrls:['./app/assets/css/scheduleandresults.css', './app/assets/css/common.css']
})

export class WaterPoloComponent implements OnInit, AfterViewInit{

    constructor(){

    };
    ngOnInit(){};
    ngAfterViewInit(){
        jQuery(document).ready(function () {
            framedimen();
            jQuery(window).resize(function () {
                framedimen();
            });
            jQuery('#schedule').click(function () {
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','https://worldatsports.appspot.com/widget_matches?tournamentid=5541144758845440');
                jQuery('.display-space nav #schedule').addClass('active');
            });
            jQuery('#pointstable').click(function () {
                jQuery('.display-space nav').children().removeClass('active');
                jQuery('.display-space iframe').attr('src','https://worldatsports.appspot.com/widget_pointstable?tournamentid=5541144758845440');
                jQuery('.display-space nav #pointstable').addClass('active');
            });
            function framedimen() {
                var window_height = jQuery(window).height();
                var heading_height = jQuery('.display-space h2').height();
                var nav_height = jQuery('.display-space nav').height();
                jQuery('.display-space iframe').attr('height', window_height - heading_height - nav_height - 150);
                jQuery('.display-space nav #schedule').addClass('active');
            }
        });
    };
}