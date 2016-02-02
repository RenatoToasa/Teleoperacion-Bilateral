  $(document).ready(function() {
      console.log('Connecting...');
      Server = new FancyWebSocket('ws://192.168.1.106:9300');


      //Let the user know we're connected
      Server.bind('open', function() {
        console.log( "Connected." );
    //  var mensaje = {'cliente':'php','ip':'192.168.1.106','datos':'05050','estado':'conexion','tiempo':'0.14'  };
      var mensaje = {'cliente':'php'};
        Server.send('message', JSON.stringify(mensaje) );

      });


      //OH NOES! Disconnection occurred.
      Server.bind('close', function( data ) {
     //   alert(data);

      
        console.log( "Disconnected." );
      });


      //console.log any messages sent from server
      Server.bind('message', function( payload ) {
        var res = jQuery.parseJSON(payload);
      



        //console.log(res.origen);
        console.log( res );
       // console.log( res.tipo );





        //console.log(cadena);
       // alert(cadena);
        $('#silla').parent().addClass('panel-success');

        $('#silla').append(payload);
        
        


      //console.log(res.dir_esc);


/*


      if (typeof res.origen!="undefined") {
         for (var i = 0; i < res.origen.length; i++) {
          var item = res.origen[i];
          console.log(item);
           $('#cliente').html('');    
        $('#cliente').parent().addClass('panel-success');
        $('#cliente').append(item );
      }

 }

*/

      if(res.cliente==="portatil"){
        $('#cliente').html('');    
        $('#cliente').parent().addClass('panel-success');
        $('#cliente').append(res.cliente );     
        $('#estado').html('');
        $('#estado').parent().addClass('panel-success');
        $('#estado').append("Conexion");
        
        if(res.tipo==="conexion"){
        $('#ip').html('');
        $('#ip').parent().addClass('panel-success');
        $('#ip').append(res.ip);

        }    
  


        
      }


        if( res.origen ==="controlador"){    
       
        $('#datos').html('');
        $('#datos').parent().addClass('panel-success');
        $('#datos').append(res.silla_val);




      }
            if(res.cliente==="brazo")
      {
         $('#cliente1').html('');    
        $('#cliente1').parent().addClass('panel-success');
        $('#cliente1').append(res.cliente );

      }



          if( res.origen ==="brazo"){    

        $('#cliente1').html('');    
        $('#cliente1').parent().addClass('panel-success');
        $('#cliente1').append(res.cliente );
        $('#datos1').html('');        
        $('#estado1').html('');
        $('#estado1').parent().addClass('panel-success');
        $('#estado1').append(res.estado);
        $('#ip1').html('');
        $('#ip1').parent().addClass('panel-success');
        $('#ip1').append(res.ip);


      }









/*



        if(typeof res.monitor!="undefined"){
        for (var i = 0; i < res.monitor.length; i++) {
          var item = res.monitor[i];
          //console.log(item.interfaz);

          switch(item.interfaz){
            case "silla":{
              $('#silla').parent().addClass('panel-success');
              $('#txtsilla').append(item.interfaz);
              $('#txtEstadoSilla').append(item.commandstatus);
            }

            //break;
            case "dev/ttys":{
              $('#ttys').append(item.interfaz);
              $('#estadoT').append(item.commandstatus);

            }
            //break;
             case "video":{
             $('#video').append(item.interfaz);
             $('#estadoV').append(item.commandstatus);
             
            }
            break;
            case "dev/video":{
            $('#dev/video').append(item.interfaz);
            $('#estadoVideo').append(item.commandstatus);
            }

          }
        }
      }
        */
              
 });


      Server.connect();



});
