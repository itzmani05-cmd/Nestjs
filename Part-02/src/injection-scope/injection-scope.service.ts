import { Injectable,Scope } from '@nestjs/common';


// Scope.DEFAULT - Only One Instance
// Scope.REQUEST - Each Request Creates a New Instance
// Scope.Transient - 

// @Injectable({scope:Scope.DEFAULT,})
// @Injectable({scope:Scope.REQUEST,})
// @Injectable({scope:Scope.TRANSIENT,})

@Injectable({scope:Scope.TRANSIENT,})
export class InjectionScopeService {
    private count=0;
    private objectId=Math.floor(Math.random()*1000);
    constructor(){
        console.log(`Service created: ${this.objectId}`);
    }
    getCount(){
        this.count++;
        return {objectId:this.objectId,count:this.count};
    }
}
