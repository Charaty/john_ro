// spigen_main.js

(function($){
  const body=$('body'),
        header=$('#headBox'),
        adver=$('#viewBox'),
        content=$('#conBox'),
        content2=$('#conBox2'),
        footer=$('#footBox');
// =======================================        
  let tempUrl="./spigen_temp/";
  let jsUrl="../js/src/spigen_temp_pc/"

  header.load(tempUrl+'spigen_header.html',function(){
   // body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
  });

  adver.load(tempUrl+'spigen_main_adver.html');

  content.load(tempUrl+'spigen_main_content_01.html',function(){

    let conJS=jsUrl+'make_spigen_content_01.js';
    body.append(`<script src="${conJS}"></script>`);
    // body.append(`<script src="${conJS}"></script>`);
    // body.append(`<script src="${conJS}"></script>`);
  });

  content2.load(tempUrl+'spigen_main_content_02.html',function(){
    let conJS=jsUrl+'make_spigen_content_02.js';
    body.append(`<script src="${conJS}"></script>`);
  });

  footer.load(tempUrl+'spigen_footer.html');

  // setTimeout(function(){},'시간'); //일정시간이 지난 후에 함수를 수행해라!
  setTimeout(function(){
    body.append('<script src="../js/src/spigen_temp_pc/make_spigen_header_pc.js"></script>');
  },100);

})(jQuery);