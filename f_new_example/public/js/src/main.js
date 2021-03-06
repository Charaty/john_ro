// main.js
(function($){
  // 광고영역 생성
  const body=$('body'), wrap=$('#wrap');
  wrap.append('<section id="viewBox"></section>');
  const viewBox=$('#viewBox');
  // script 내용 간편작성함수 생성
  const JsLink=(temp)=>{return body.append(`<script src="../js/src/temp/${temp}"></script>`);};
  viewBox.load('./temp/slide_01.html',()=>{return JsLink('slide_01.js');})

  // 광고영역2 생성
  wrap.append('<section id="viewBox_02"></section>');
  const vB2=$('#viewBox_02');
  vB2.load('./temp/slide_02.html',()=>{return JsLink('slide_02.js')});

  // 광고영역3 생성
  wrap.append('<section id="viewBox_03"></section>');
  const vB3=$('#viewBox_03');
  vB3.load('./temp/slide_03.html',()=>{return JsLink('slide_03.js')});
  // 광고영역4 생성
  wrap.append('<section id="viewBox_04"></section>');
  const vB4=$('#viewBox_04');
  vB4.load('./temp/slide_04.html',()=>{return JsLink('slide_04.js')});
  // 광고영역 5생성
  wrap.append('<section id="viewBox_05"></section>');
  const vB5=$('#viewBox_05');
  vB5.load('./temp/slide_05.html',()=>{return JsLink('slide_05.js')});

})(jQuery);