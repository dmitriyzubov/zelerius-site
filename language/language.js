// <!-- ?v1.281 -->

    var language;
    function getLanguage() {
        (localStorage.getItem('language') == null) ? setLanguage('en') : false;
        $.ajax({
        url:  '/language/' +  localStorage.getItem('language') + '.json?v1.281',
        dataType: 'json', async: false, dataType: 'json',
        success: function (lang) { language = lang } });
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        location.reload();
    }

    $(document).ready(function(){
        getLanguage();
        if(language== '')
            language = 'en';

        $('#title').text(language.title);
        $('#subtitle').text(language.subtitle);
        $('#titleButton').text(language.titleButton);
        $('#menuItem1').text(language.menuItem1);
        $('#menuItem2').text(language.menuItem2);
        $('#menuItem2sub1').text(language.menuItem2sub1);
        $('#menuItem2sub2').text(language.menuItem2sub2);
        $('#menuItem2sub3').text(language.menuItem2sub3);
        $('#menuItem2sub4').text(language.menuItem2sub4);
        $('#menuItem3').text(language.menuItem3);
        $('#menuItem4').text(language.menuItem4);
        $('#menuItem5').text(language.menuItem5);
        $('#menuItem6').text(language.menuItem6);
        $('#menuItem7').text(language.menuItem7);

        $('#menuItem7sub1').text(language.menuItem7sub1);
        $('#menuItem7sub2').text(language.menuItem7sub2);
        $('#menuItem7sub3').text(language.menuItem7sub3);
        $('#menuItem7sub4').text(language.menuItem7sub4);
        $('#menuItem7sub5').text(language.menuItem7sub5);
        $('#menuItem7sub6').text(language.menuItem7sub6);
        $('#menuItem7sub7').text(language.menuItem7sub7);
        $('#menuItem7sub8').text(language.menuItem7sub8);
        $('#menuItem7sub9').text(language.menuItem7sub9);
        $('#menuItem7sub10').text(language.menuItem7sub10);
        $('#menuItem7sub11').text(language.menuItem7sub11);
        $('#menuItem7sub12').text(language.menuItem7sub12);
        $('#menuItem7sub13').text(language.menuItem7sub13);

        $('#text1').text(language.text1);
        $('#text2').text(language.text2);
        $('#text3').text(language.text3);
        $('#text4').text(language.text4);
        $('#text5').text(language.text5);
        $('#text6').text(language.text6);
        $('#text7').text(language.text7);
        $('#text8').text(language.text8);
        $('#text9').text(language.text9);
        $('#text10').text(language.text10);
        $('#text11').text(language.text11);
        $('#text12').text(language.text12);
        $('#text13').text(language.text13);
        $('#text14').text(language.text14);
        $('#text15').text(language.text15);
        $('#text16').text(language.text16);
        $('#text17').text(language.text17);
        $('#text18').text(language.text18);
        $('#text19').text(language.text19);
        $('#text20').text(language.text20);
        $('#text21').text(language.text21);
        $('#text22').text(language.text22);
        $('#text23').text(language.text23);
        $('#text24').text(language.text24);
        $('#text25').text(language.text25);
        $('#text26').text(language.text26);
        $('#text27').text(language.text27);
        $('#text28').text(language.text28);
        $('#text29').text(language.text29);
        $('#text30').text(language.text30);
        $('#text31').text(language.text31);
        $('#text32').text(language.text32);
        $('#text33').text(language.text33);
        $('#text34').text(language.text34);
        $('#text35').text(language.text35);
        $('#text36').text(language.text36);
        $('#text37').text(language.text37);
        $('#text38').text(language.text38);
        $('#text39').text(language.text39);
        $('#text40').text(language.text40);
        $('#text41').text(language.text41);
        $('#text42').text(language.text42);
        $('#text43').text(language.text43);
        $('#text44').text(language.text44);
        $('#text45').text(language.text45);
        $('#text46').text(language.text46);
        $('#text47').text(language.text47);
        $('#text48').text(language.text48);
        $('#text49').text(language.text49);
        $('#text50').text(language.text50);
        $('#text51').text(language.text51);
        $('#text52').text(language.text52);
        $('#text53').text(language.text53);
        $('#text54').text(language.text54);
        $('#text55').text(language.text55);
        $('#text56').text(language.text56);
        $('#text57').text(language.text57);
        $('#text58').text(language.text58);
        $('#text59').text(language.text59);
        $('#text60').text(language.text60);
        $('#text61').text(language.text61);
        $('#text62').text(language.text62);
        $('#text63').text(language.text63);
        $('#text64').text(language.text64);
        $('#text65').text(language.text65);
        $('#text66').text(language.text66);
        $('#text67').text(language.text67);
        $('#text68').text(language.text68);
        $('#text69').text(language.text69);
        $('#text70').text(language.text70);
        $('#text71').text(language.text71);
        $('#text72').text(language.text72);
        $('#text73').text(language.text73);
        $('#text74').text(language.text74);
        $('#text75').text(language.text75);
        $('#text76').text(language.text76);
        $('#text77').text(language.text77);
        $('#text78').text(language.text78);
        $('#text79').text(language.text79);
        $('#text80').text(language.text80);
        $('#text81').text(language.text81);
        $('#text82').text(language.text82);
        $('#text83').text(language.text83);
        $('#text84').text(language.text84);
        $('#text85').text(language.text85);
        $('#text86').text(language.text86);
        $('#text87').text(language.text87);
        $('#text88').text(language.text88);
        $('#text89').text(language.text89);
        $('#text90').text(language.text90);
        $('#text91').text(language.text91);
        $('#text92').text(language.text92);
        $('#text93').text(language.text93);
        $('#text94').text(language.text94);
        $('#text94').text(language.text94);
        $('#text95').text(language.text95);
        $('#text96').text(language.text96);
        $('#text97').text(language.text97);
        $('#text98').text(language.text98);
        $('#text99').text(language.text99);
        $('#text100').text(language.text100);
        $('#text101').text(language.text101);
        $('#text102').text(language.text102);
        $('#text103').text(language.text103);
        $('#text104').text(language.text104);
        $('#text105').text(language.text105);

        fetchLiveStats();
    });
