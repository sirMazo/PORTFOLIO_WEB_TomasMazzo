import { Injectable } from '@angular/core';
import { SobreMi } from '../model/sobre-mi';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SSobreMiService {
  URL = environment.URL + 'sobreMi/';
    
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<SobreMi[]>{
    return this.httpClient.get<SobreMi[]>(this.URL + 'lista');
  }
  
  public detail(id: number): Observable<SobreMi>{
    return this.httpClient.get<SobreMi>(this.URL + `detail/${id}`);
  } 
  
  public save(perfil: SobreMi): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', perfil);
  }
  
  public update(id: number, perfil: SobreMi): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, perfil);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
