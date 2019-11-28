import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ReplitService{

    constructor(
        private http : HttpClient
    ){

    }

    getRepos() : Promise<any>{
        return this.http.get('https://api.github.com/users/codigofacilito/repos').toPromise();
    }
}
