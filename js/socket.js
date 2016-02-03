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
     // console.log( res.motor7 );


        $('#interfaz1').val("");
        $('#resultado1').val("");
        $('#status1').val("");
        $('#interfaz2').val("");
        $('#resultado2').val("");
        $('#status2').val("");   
        $('#interfaz').val("");
        $('#resultado').val("");
        $('#status').val("");
        $('#interfaz3').val("");
        $('#resultado3').val("");
        $('#status3').val("");

       if (payload!="null"){

        $('#consola').parent().addClass('panel-success');
           $('#consola').append(' <BR />');
        $('#consola').append(payload);
        }
        


      //console.log(res.dir_esc);
  
     // $('#interfaz1').val("hola");
        $('#streaming').parent().addClass('panel-success');    

      if( res.cliente==="controlador"){            
        $('#cliente').html('');    
        $('#cliente').parent().addClass('panel-success');
        $('#cliente').append(res.cliente );
       }

        if( res.origen ==="controlador"){    
       
        $('#datos').html('');
        $('#datos').parent().addClass('panel-success');
        $('#datos').append(res.val_silla);       
        $('#estado').html('');
        $('#estado').parent().addClass('panel-success');
        $('#estado').append("Conexion");
       $('#motor').html('');
        $('#motor').parent().addClass('panel-success');
        $('#motor').append("Motor1 = " + res.motor1)
        $('#motor').append(' <BR />');
        $('#motor').append("Motor2 = " + res.motor2);
         $('#motor').append(' <BR />');
        $('#motor').append("Motor3 = " + res.motor3);
        $('#motor').append(' <BR />');
        $('#motor').append("Motor4 = " + res.motor4);
        $('#motor').append(' <BR />');
        $('#motor').append("Motor5 = " + res.motor5);
        $('#motor').append(' <BR />');
        $('#motor').append("Motor6 = " + res.motor6);
        $('#motor').append(' <BR />');
        $('#motor').append("Motor7 = " + res.motor7);
        $('#motor').append(' <BR />');
        $('#motor').append("Motor8 = " + res.motor8);
        $('#motor').append(' <BR />');
        $('#motor').append("Motor9 = " + res.motor9);
      }
     

          if( res.cliente==="plataforma"){            
        $('#cliente1').html('');    
        $('#cliente1').parent().addClass('panel-success');
        $('#cliente1').append(res.cliente );
            }



          if( res.origen ==="plataforma"){    


        $('#datos1').html('');        
        $('#estado1').html('');
        $('#estado1').parent().addClass('panel-success');
        $('#estado1').append(res.estado);
        $('#ip1').html('');
        $('#ip1').parent().addClass('panel-success');
        $('#ip1').append(res.ip);
          $('#estado1').html('');
        $('#estado1').parent().addClass('panel-success');
        $('#estado1').append("Conexion");
        $('#motor1').html('');
        $('#motor1').parent().addClass('panel-success');
        $('#motor1').append("Motor1 = " + res.mot1)
        $('#motor1').append(' <BR />');
        $('#motor1').append("Motor2 = " + res.mot2);
         $('#motor1').append(' <BR />');
        $('#motor1').append("Motor3 = " + res.mot3);
        $('#motor1').append(' <BR />');
        $('#motor1').append("Motor4 = " + res.mot4);
        $('#motor1').append(' <BR />');
        $('#motor1').append("Motor5 = " + res.mot5);
        $('#motor1').append(' <BR />');
        $('#motor1').append("Motor6 = " + res.mot6);
        $('#motor1').append(' <BR />');
        $('#motor1').append("Motor7 = " + res.mot7);
        $('#motor1').append(' <BR />');
        $('#motor1').append("Motor8 = " + res.mot8);
        $('#motor1').append(' <BR />');
        $('#motor1').append("Motor9 = " + res.mot9);


      }


     if(typeof res.monitor!="undefined"){
        $('#dispositivos').parent().addClass('panel-success');


            $('#interfaz1').val(res.monitor[0].interfaz);
              $('#resultado1').val(res.monitor[0].resultado);
              $('#status1').val(res.monitor[0].commandstatus);


            $('#interfaz2').val(res.monitor[1].interfaz);
              $('#resultado2').val(res.monitor[1].resultado);
              $('#status2').val(res.monitor[1].commandstatus);
     



            $('#interfaz').val(res.monitor[2].interfaz);
              $('#resultado').val(res.monitor[2].resultado);
              $('#status').val(res.monitor[2].commandstatus);
   
              $('#interfaz3').val(res.monitor[3].interfaz);
              $('#resultado3').val(res.monitor[3].resultado);
              $('#status3').val(res.monitor[3].commandstatus);


    }

/*
        if(typeof res.monitor!="undefined"){
        for (var i = 0; i < res.monitor.length; i++) {
          var item = res.monitor[i];
          
          $('#dispositivos').parent().addClass('panel-success');
          


          switch(item.interfaz){

            //break;
            case "dev/ttys":{
              $('#interfaz1').val(item.interfaz);
              $('#resultado1').val(item.resultado);
              $('#status1').val(item.commandstatus);

            }
              
             case "plataforma":{
              $('#interfaz').val(item.interfaz);
              $('#resultado').val(item.resultado);
              $('#status').val(item.commandstatus);

            }
            
             case "dev/video":{
              $('#interfaz2').val(item.interfaz);
              $('#resultado2').val(item.resultado);
              $('#status2').val(item.commandstatus);
             
            }
            
            case "video":{
             $('#interfaz3').val(item.interfaz);
              $('#resultado3').val(item.resultado);

              $('#status3').val(item.commandstatus);
            }
            break;

          }

          
        }

      }
      */

    
       
 });

      Server.connect();
});
