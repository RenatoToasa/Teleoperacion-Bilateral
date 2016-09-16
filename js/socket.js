  $(document).ready(function() {

      console.log('Connecting...');

      Server = new FancyWebSocket('ws://192.168.1.104:9300');
	//Server = new FancyWebSocket('ws://190.15.141.99:8180');

      //Let the user know we're connected
      Server.bind('open', function() {
        // Tiempo
//console.time("t1");
        console.log( "Connected." );
    //  var mensaje = {'cliente':'php','ip':'192.168.1.106','datos':'05050','estado':'conexion','tiempo':'0.14'  };
      var mensaje = {'cliente':'php'};
        Server.send('message', JSON.stringify(mensaje) );
//alert(console.timeEnd("t1")); 
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
       if (payload!="null"){
     //s   console.log( res );   

           
    }
    

/*


//ENVIO DATOS CLIENTE SERVIDOR CLIENTE
       if(typeof res.resultado!="undefined"){
              
       $("#txtconsola").append(res.resultado+'\n');
       }
           if(typeof res.val1!="undefined"){
              SendMessage('Q1','moverQ1',res.val1);
       
       }
*/
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
        

        $('#streaming').parent().addClass('panel-success');    
        $('#admin').parent().addClass('panel-success');    



/*
        $('.mot1').append('<option value="'+parseInt(res.mot1)'"></option>');
        $('.mot2').append('<option value="'+res.mot2'"></option>');
        $('.mot5').append('<option value="'+res.mot5'"></option>');
        $('.mot7').append('<option value="'+res.mot7'"></option>');
*/



///DATOS PLATAFORMA-CONTROLADOR
if (res === 'null'){
  console.log('Llego un valor nulo');

}

if (res !="null" )
{
  if(res.origen ==="Controlador"){    

  $('#controlador').parent().addClass('panel-success');


        $('#puerto').val("Puerto = " + res.com);
        $('#vx').val("Velocidad X = " + res.valorx);
        $('#vy').val("Velocidad Y = " + res.valory);
        $('#vz').val("Velocidad Z = " + res.valorz);
        $('#ex').val("Error X = " + res.errorx);

        $('#ey').val("Error Y = " + res.errory);
        $('#ez').val("Error Z = " + res.errorz);
        $('#control').val("Control = " + res.control);
        


      
}


  if( res.origen ==="Plataforma"){    
  
    $('#plataforma').parent().addClass('panel-success');
   
        $('#confirmacion').val("Confirmacion = " + res.ok);
        $('#px').val("Posición X = " + res.valorx);
        $('#py').val("Posición Y = " + res.valory);
        $('#angulog').val("Angulo Giro = " + res.teta);
        $('#b1').val("Angulo Brazo 1= " + res.q1);
        $('#b2').val("Angulo Brazo 2= " + res.q2);
        $('#b3').val("Angulo Brazo 3= " + res.q3);


        try{
          
          SendMessage('Q11','moverQ1',parseInt((res.q1/100)*-57,29);
          SendMessage('Q22','moverQ2',parseInt(((res.q2/100)*57,29)-90);                      
          SendMessage('Q33','moverQ3',parseInt(((res.q3/100)*57,29)+90);

          
          SendMessage('manipulador1','moverRobot',parseInt(res.teta/100)*-57,29);    
          
          //SendMessage('Administrador','desactivar_A');
         // SendMessage('Administrador','desactivar_B');
       //   SendMessage('Administrador','desactivar_C');

       //  SendMessage('Manipulador_A','moverRobot',1000);

       //  SendMessage('Manipulador_A','velIzquierdaA',100);
        // SendMessage('Manipulador_A','velDerechaA',100);

        

  }catch(error){
    console.log("Error en SendMessage");
  }    
 } 

  if( res.origen ==="Plataforma1"){    
  
    $('#plataforma').parent().addClass('panel-success');
   
        $('#confirmacion').val("Confirmacion = " + res.ok);
        $('#px').val("Posición X = " + res.valorx);
        $('#py').val("Posición Y = " + res.valory);
        $('#angulog').val("Angulo Giro = " + res.teta);
        $('#b1').val("Angulo Brazo 1= " + res.q1);
        $('#b2').val("Angulo Brazo 2= " + res.q2);
        $('#b3').val("Angulo Brazo 3= " + res.q3);


        try{
          SendMessage('QA11','moverQ1',parseInt(res.q1));        
          SendMessage('QA22','moverQ2',parseInt(res.q2));                      
          SendMessage('QA33','moverQ3',parseInt(res.q3));                

          
          SendMessage('Manipulador_A','moverRobot',parseInt(res.teta));     
          
          //SendMessage('Administrador','desactivar_A');
        //  SendMessage('Administrador','desactivar_B');
          //SendMessage('Administrador','desactivar_C');

       //  SendMessage('Manipulador_A','moverRobot',1000);

       //  SendMessage('Manipulador_A','velIzquierdaA',100);
        // SendMessage('Manipulador_A','velDerechaA',100);

        

  }catch(error){
    console.log("Error en SendMessage");
  }    
 } 

//2
  if( res.origen ==="Plataforma2"){    
  
    $('#plataforma1').parent().addClass('panel-success');
   
        $('#confirmacion1').val("Confirmacion = " + res.ok);
        $('#px1').val("Posición X = " + res.valorx);
        $('#py1').val("Posición Y = " + res.valory);
        $('#angulog1').val("Angulo Giro = " + res.teta);
        $('#b11').val("Angulo Brazo 1= " + res.q1);
        $('#b21').val("Angulo Brazo 2= " + res.q2);
        $('#b31').val("Angulo Brazo 3= " + res.q3);


        try{
          SendMessage('QA11','moverQ1',parseInt(res.q1));        
          SendMessage('QA22','moverQ2',parseInt(res.q2));                      
          SendMessage('QA33','moverQ3',parseInt(res.q3));                

          
          SendMessage('manipulador1','moverRobot',parseInt(res.teta));     
          
         // SendMessage('Administrador','desactivar_A');
         // SendMessage('Administrador','desactivar_B');
         // SendMessage('Administrador','desactivar_C');



        

  }catch(error){
    console.log("Error en SendMessage");
  }    
 }

 //3

   if( res.origen ==="Plataforma3"){    
  
    $('#plataforma2').parent().addClass('panel-success');
   
        $('#confirmacion2').val("Confirmacion = " + res.ok);
        $('#px2').val("Posición X = " + res.valorx);
        $('#py2').val("Posición Y = " + res.valory);
        $('#angulog2').val("Angulo Giro = " + res.teta);
        $('#b12').val("Angulo Brazo 1= " + res.q1);
        $('#b22').val("Angulo Brazo 2= " + res.q2);
        $('#b32').val("Angulo Brazo 3= " + res.q3);


        try{
          SendMessage('QA11','moverQ1',parseInt(res.q1));        
          SendMessage('QA22','moverQ2',parseInt(res.q2));                      
          SendMessage('QA33','moverQ3',parseInt(res.q3));                

          
         // SendMessage('manipulador1','moverRobot',parseInt(res.teta));     
          
        //  SendMessage('Administrador','desactivar_A');
         // SendMessage('Administrador','desactivar_B');
         // SendMessage('Administrador','desactivar_C');



        

  }catch(error){
    console.log("Error en SendMessage");
  }    
 }

}

      



     
      if( res.cliente==="plataforma"){            
        $('#cliente1').html('');    
        $('#cliente1').parent().addClass('panel-success');
        $('#cliente1').append(res.cliente );
        var endTime = new Date();
        }
/*
console.log(res.mot1);
console.log(res.mot2);
console.log(res.mot5);
console.log(res.mot7);
     document.getElementById('mot1').setAttribute('value', parseInt(res.mot1));
     document.getElementById('mot2').setAttribute('value', parseInt(res.mot2));
     document.getElementById('mot5').setAttribute('value', parseInt(res.mot5));
     document.getElementById('mot7').setAttribute('value', parseInt(res.mot7));
*/

      if( res.origen ==="plataforma"){    
        //$('#mot1').setAttribute('value', parseInt(res.mot1));
       //$('#mot1').setAttribute('value', 4000);
       //document.getElementById('mot1').setAttribute('value', 4000);

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
        try{
          SendMessage('Q1','moverQ1',parseInt(res.mot1));        
          SendMessage('Q2','moverQ2',parseInt(res.mot2));                      
          SendMessage('Q3','moverQ3',parseInt(res.mot5));                
          SendMessage('Q4','moverQ4',parseInt(res.mot7));
          
        /*
        if (res.mot5!=0) {
          SendMessage('Q5','moverQ5',parseInt(res.mot5));
        }     
        if (res.mot6!=0) {
          SendMessage('Q6','moverQ6',parseInt(res.mot6));
        }    
*/
        /*
       if (res.mot7!=0) {
          SendMessage('Q7','moverQ7',res.mot7);
        }   
        if (res.mot8!=0) {
          SendMessage('Q8','moverQ8',res.mot8);
        }    
        if (res.mot9!=0) {
          SendMessage('Q9','moverQ9',res.mot9);
        }     
        */

  }catch(error){
    console.log("Error en SendMessage");
  }
}
 
//ESTADO DE DISPOSITIVOS

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

  $('.moverQ1').click(function(e){

    //e.preventDefault();
      var mensaje = {'origen':'php', 'destino':'php','val1':100, 'val2':'100'};
     Server.send('message', JSON.stringify(mensaje) );
   // SendMessage('Q1','moverQ1',100);


 });

   
 });



//CONSOLA DE ADMINISTRACION

$("#btnenvio").click(function(){

        var mensaje = {'origen':'php', 'destino':'Controlador','texto':'123'};
        Server.send('message', JSON.stringify(mensaje) );


        });



       
        $("#btnConectar").click(function(){
   //      if( res.cliente==="consola"){  
    

        var mensaje = {'origen':'php', 'destino':'consola','accion':'conectar', 'ventana':'uno'};
        Server.send('message', JSON.stringify(mensaje) );
          $('#tiempo').html('');
        $('#tiempo').parent().addClass('panel-success');
        $('#tiempo').append(i);  

  
     });

        $("#btnejecutar").click(function(){
  
            $('#txtconsola').html('');   
       var texto= $('#txtenvio').val();

        var mensaje = {'origen':'php', 'destino':'plataforma','ventana':'uno', 'comando':texto};
        //var mensaje = {'origen':'php', 'destino':'consola','ventana':'uno', 'comando':texto};
        Server.send('message', JSON.stringify(mensaje) );

         
     });

//GRAFICA 3D

  // $('.moverQ1').click(function(e){

   // e.preventDefault();
    //  var mensaje = {'origen':'php', 'destino':'php','val1':'100', 'val2':'100'};
    // Server.send('message', JSON.stringify(mensaje) );
    //SendMessage('Q1','moverQ1',100);


 // });

  $('.moverQ2').click(function(e){
    e.preventDefault();
    SendMessage('Q2','moverQ2',100);
  });




      Server.connect();
});

