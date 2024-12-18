import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { album } from './model/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  constructor(private http:HttpClient) { }
  getalbums():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/album');

  }
  getalbumById(id:any):Observable<any>{
    return this.http.get<any>('http://localhost:3000/album/'+id);
  }
  addalbums(album:any){
    return this.http.post('http://localhost:3000/',album);
  }

  deletealbums(id:any){
    return this.http.delete('http://localhost:3000/album/'+id);
  }
}
