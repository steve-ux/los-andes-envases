
function Formulario() {
  return (
    <div className="formularioContainer">
        <h2 className="consultaTitle">ENVÍE SU CONSULTA</h2>
      <form action="https://formsubmit.co/info@envaseslosandes.com" method="POST">
      <label for="full_name">Nombre completo:</label>
       <input required id="full_name" name="Nombre Completo" 
       type="text"/> 
       
       <label for="email">Email:</label>
       <input required id="email" name="Email" 
       type="email"/>

      
       <label for="message">Mensaje:</label>
       <textarea required id="message" name="Mensaje" 
       type="textarea" minLength="10" title="Mensaje mínimo de 10 caracteres." className="inputMsj"/>

      <input type="hidden" name="_next" value="https://envaseslosandes.com/Enviado"/>
      <input type="hidden" name="_subject" value="Nueva consulta desde la web!"/>
      <input type="hidden" name="_captcha" value="false"/>
       

      <button className="btnSend" type="submit" value="Send">ENVIAR</button>
      </form>
    </div>
  );
}

export default Formulario;