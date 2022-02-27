
function Formulario() {
  return (
    <div className="formularioContainer">
        <h2 className="consultaTitle">ENVÍE SU CONSULTA</h2>
      <form>
      <label for="input_name">Nombre completo:</label>
       <input required id="input_name" name="First_Name" 
       type="text" placeholder="Nombre"/> 
       
       <label for="input_last_name">Email:</label>
       <input required id="input_last_name" name="Last_Name" 
       type="text" placeholder="Email"/>

       <label for="street_address">Mensaje:</label>
       <input required id="street_address" name="Address" 
       type="text" placeholder="Mensaje"/> 

      </form>
      <button className="btnSend" type="submit" value="Send">ENVIAR</button>
    </div>
  );
}

export default Formulario;