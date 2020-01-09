// ==UserScript==
// @name         Rename Google Docs Notes/Assignments Titles
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  rename my google docs I use for notes and assignments for classes
// @author       KnackNotron
// @match        https://docs.google.com/document/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function nameDoc(docName) {
        document.getElementsByClassName('docs-title-input')[0].focus(); //bringing focus to the doc title input bar
        document.getElementsByClassName('docs-title-input')[0].value=docName; //setting the doc title to the name made earlier
        document.getElementsByClassName('docs-title-input')[0].blur(); //taking focus off of doc title input bar
        document.getElementsByClassName('kix-wordhtmlgenerator-word-node')[0].focus(); //re-focusing on the body of the document
        console.log('done renaming document!');
    }
    window.onload = function daMain() {
        console.log('attempting to rename document...');
        var d = new Date();
        const u = window.location.href;
        var n = 'temp';
        if (u.includes('folder=1x-jOupfd0WXE3VlOrMFVED3l_1ohGflq')) {
            //starting with Chinese notes folder:
            n = '(Notes) (AP Chinese) (' + (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear() + ')'; //creating the docs name and storing it
            nameDoc(n);
        } else if (u.includes('folder=11XwSQnASZvRRDY-r45vHNawMzLAjzT_2')) {
            //now Chinese homework folder:
            n = '(Homework) (AP Chinese) (' + (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear() + ')'; //creating the docs name and storing it
            nameDoc(n);
        } else if (u.includes('folder=1MGtDalI3sVRry4mvsMSPdTMGuOan0C7f')) {
            //now stats notes
            n = '(Notes) (Stats) (' + (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear() + ')'; //creating the docs name and storing it
            nameDoc(n);
        } else if (u.includes('folder=1ttfKso785B9EAnYxZgCE4zATOT8hUqdZ')) {
            //now stats homework
            n = '(Homework) (Stats) (' + (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear() + ')'; //creating the docs name and storing it
            nameDoc(n);
        } else if (u.includes('folder=18G-3bjcMcwDjslxePu9Iz0O9UkQ9mReR')) {
            //now stats chapter 6 handouts
            n = '(Handout) (Stats) (' + (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear() + ') Chapter 6 Handout '; //creating the docs name and storing it
            nameDoc(n);
        } else if (u.includes('folder=1JpzdmNgV_LomCS2IGhjRVuAVh0SA4M32')) {
            //now stats chapter 6 classroom examples
            n = '(CE) (Stats) (' + (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear() + ') CE 6. '; //creating the docs name and storing it
            nameDoc(n);
        } else if (u.includes('folder=1uVexGTU4L5i2267Yvu3NaJPp3j6tiioq')) {
            //now MSJ notes
            n = '(Notes) (MSJ) (' + (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear() + ')'; //creating the docs name and storing it
            nameDoc(n);
        } else if (u.includes('folder=1TJYeyx0zeZ5lXOctY5aIGYHY7Kk1_JBd')) {
            //now MSJ homework
            n = '(Homework) (MSJ) (' + (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear() + ')'; //creating the docs name and storing it
            nameDoc(n);
        }
    }
})();