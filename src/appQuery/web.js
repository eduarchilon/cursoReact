
import $ from 'jquery';
/*para que se adapte a la pantalla*/


$(window).on("load", function(){
    var widthBrowser =$(window).width();

    if(widthBrowser>1024){
        $("#menu-items").css("display","flex");
    }
    else{
        $("#menu-items").css("display","none");
    }


});

        $(window).resize(function() {
            // var heightBrowser =$(window).height();
            var widthBrowser =$(window).width();
            // console.log(widthBrowser)
            // console.log("Tamaño de la pantalla del navegador: width="+widthBrowser +" height="+heightBrowser );
            
            /*condiciono asi aparece*/
            if(widthBrowser>1024){
                $("#menu-items").css("display","flex");
            }
            else{
                $("#menu-items").css("display","none");
            }
         });
        
         /*para que cargue el documento*/
        $(document).ready(function(){
            let count = 0;
            /*para los botones del header*/
                $("#btn-menu").click(function(){
                  if(count===0 ){
                      $('.nav__menu-items').show("slow");
                      count=1;
                  }else{
                      $('.nav__menu-items').hide("slow");
                      count=0;
                  }
                })

                

        });

