import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {win} from "@angular/platform-browser/src/facade/browser";

@Component({
    selector: 'gallery-image',
    templateUrl: './app/gallery/VideoGallery/video.gallery.html',
    styleUrls: ['./app/assets/css/imagegallery.css','./app/assets/css/fancybox.css']
})

export class VideoGalleryComponent implements OnInit, AfterViewInit{
videoArray;
    constructor(private _http : Http){

    }
    onclick(){
        console.log(this.videoArray);
    }

    ngOnInit(){

        let that = this;
        this._http.get('https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1EcJRWQPx_IEjsq4EBeOoHfSSjqpxbziqdlFm0JsNkeI&sheet=Video')
            .subscribe(res => {
                this.videoArray = res.json().Video;
                // console.log(this.videoArray);
                jQuery(document).ready(() => {
                    jQuery(".various").fancybox({
                        maxWidth	: 800,
                        maxHeight	: 600,
                        fitToView	: false,
                        width		: '70%',
                        height		: '70%',
                        autoSize	: false,
                        closeClick	: false,
                        openEffect	: 'none',
                        closeEffect	: 'none'
                    });
                    that.placePlay();
                    jQuery(window).resize(function () {
                        that.placePlay();
                    });
                });
            });
    }

    ngAfterViewInit(){
        let that = this;
        setTimeout(function() {
            that.placePlay();
      }, 2000);
    }

    placePlay(){
        var height = jQuery('.video-box').height();
        var width = jQuery('.video-box').width();
        var height_icon = jQuery('.fix-icon-position').height();
        var width_icon = jQuery('.fix-icon-position').width();
        jQuery('.fix-icon-position').css('top',((height-height_icon)/2)+3);
        jQuery('.fix-icon-position').css('left',((width-width_icon)/2)+15);
    }

}