$(document).ready (function (){
  $('.heading h1').hover(function(){
    //console.log('things');
    //console.log ($(this));
    $(this).html('[mi-shel] [k<em>uh</em>-lohn]')
  }, function(){
    $(this).text('Michelle Col\363n');
  });
});


//Detect when user hovers over word Experience
//Set up word we want it to be
//Use new word to replace element we hovered over
//On mouseOut turn back to Experience

$(document).ready (function (){
  $('.education a').hover(function(){
    //console.log('things');
    //console.log ($(this));
    $(this).html('[ej-oo-key-sh<em>uh</em> n]');
  }, function(){
    $(this).text('Education');
  });
});

$(document).ready (function (){
  $('.experience a').hover(function(){
    //console.log('things');
    //console.log ($(this));
    $(this).html('[ik-speer-ee-<em>uh</em> ns]')
  }, function(){
    $(this).text('Experience');
  });
});

$(document).ready (function (){
  $('.about a').hover(function(){
    //console.log('things');
    //console.log ($(this));
    $(this).html('[<em>uh</em>-bout]');
  }, function(){
    $(this).text('About');
  });
});

$(document).ready (function (){
  $('.contact a').hover(function(){
    //console.log('things');
    //console.log ($(this));
    $(this).text('[kon-takt]');
  }, function(){
    $(this).text('Contact');
  });
});