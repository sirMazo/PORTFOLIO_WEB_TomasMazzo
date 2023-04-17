/**
 *
 * @author sirM
 */

package com.portafolio.TomasMazzzo.Repository;

import com.portafolio.TomasMazzzo.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long>{
    
}
