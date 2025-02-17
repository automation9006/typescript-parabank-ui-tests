import {faker} from '@faker-js/faker'
import { loginData } from '../testdata/loginData'

function generateUserRegFormData(){
  return{
    firstName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    address : faker.location.buildingNumber(),
    city : faker.location.city(),
    state : faker.location.state(),
    zipCode : faker.location.zipCode(),
    phone : faker.phone.number(),
    ssn : faker.phone.number(),
    userName : faker.string.alphanumeric(18),
    password : loginData.password,
    confirmPassword : loginData.password,
        
  }
    
}
export default generateUserRegFormData