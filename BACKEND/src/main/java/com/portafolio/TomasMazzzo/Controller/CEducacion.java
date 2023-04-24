/**
 *
 * @author sirM
 */
package com.portafolio.TomasMazzzo.Controller;

import com.portafolio.TomasMazzzo.Entity.Educacion;
import com.portafolio.TomasMazzzo.Security.Controller.Mensaje;
import com.portafolio.TomasMazzzo.Service.SEducacion;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/educacion")
@CrossOrigin(origins = "http://localhost:4200")
public class CEducacion {

    @Autowired
    SEducacion sEducacion;

    // CREAR LISTA
    @GetMapping(value = {"/lista"})
    public ResponseEntity<List<Educacion>> list() {
        List<Educacion> list = sEducacion.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    // BUSCAR EXPERIENCIA
    @GetMapping("/detail/{id}")
    public ResponseEntity<Educacion> getById(@PathVariable("id") int id) {
        if (!sEducacion.existsById(id)) {
            return new ResponseEntity(new Mensaje("Esa educación no existe."), HttpStatus.NOT_FOUND);
        }
        Educacion educacion = sEducacion.getOne(id).get();
        return new ResponseEntity(educacion, HttpStatus.OK);
    }

    // BORRAR EXPERIENCIA
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id, HttpServletResponse response) {
        // VALIDAMOS SI EXISTE EL ID
        if (!sExperiencia.existsById(id)) {
            return new ResponseEntity(new Mensaje("El ID no existe."), HttpStatus.BAD_REQUEST);
        }

        response.setHeader("Access-Control-Allow-Origin", "*");
        sEducacion.delete(id);
        return new ResponseEntity(new Mensaje("Experiencia eliminada."), HttpStatus.OK);
    }
}
