import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService{
  getUsers(){
    return "Hello all!"
  }
}

@Injectable()
export class PersonService{
  getPersons(){
    return [
      'Manikandan','Prithviraj'
    ];
  }
}

