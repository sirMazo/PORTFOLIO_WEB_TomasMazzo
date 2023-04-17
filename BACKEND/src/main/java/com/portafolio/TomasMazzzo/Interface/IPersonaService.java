/**
 *
 * @author sirM
 */

package com.portafolio.TomasMazzzo.Interface;

import com.portafolio.TomasMazzzo.Entity.Persona;
import java.util.List;



public interface IPersonaService {
    //  TRAER UNA LISTA PERSONA   
    public List<Persona> getPersona();
    
    //  GUARDAR UN OBJ DE TIPO PERSONA
    public void savepersona(Persona persona);
    
    //  ELIMINAR UN OBJETO PERSONA, BUSCANDO POR ID
    public void deletePersona(Long id);

    //  BUSCAR UNA OBJETO PERSONA, POR ID
    public Persona findPersona(Long id);

}
