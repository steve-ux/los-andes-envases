
function Formulario() {
  return (
    <div className="formularioContainer">
        <h2 className="consultaTitle2">Llená el formulario y nos comunicaremos a la brevedad.</h2>
      <form action="https://formsubmit.co/exe.universal@gmail.com" method="POST">
      <label for="full_name">Nombre completo:</label>
       <input required id="full_name" name="Full_Name" 
       type="text"/> 
       
       <label for="email">Email:</label>
       <input required id="email" name="Email" 
       type="text"/>

      
       <label for="message">Mensaje:</label>
       <textarea required id="message" name="Mensaje" 
       type="textarea" className="inputMsj"/>

      <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/>
      <input type="hidden" name="_subject" value="Nueva consulta desde la web!"/>
      <input type="hidden" name="_captcha" value="false"/>
       

      <button className="btnSend" type="submit" value="Send">ENVIAR</button>
      </form>
    </div>
  );
}

export default Formulario;