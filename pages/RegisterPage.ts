import { Page } from '@playwright/test'

export default class RegisterPage{

  constructor(public page:Page){
  }
  inputFirstName = this.page.locator('//*[@id=\'customer.firstName\']')
  inputLastName = this.page.locator('//*[@id=\'customer.lastName\']')
  inputAddress=this.page.locator('//*[@id=\'customer.address.street\']')
  inputCity=this.page.locator('//*[@id=\'customer.address.city\']') 
  inputState=this.page.locator('//*[@id=\'customer.address.state\']')
  inputZipCode=this.page.locator('//*[@id=\'customer.address.zipCode\']')
  inputPhone=this.page.locator('//*[@id=\'customer.phoneNumber\']')
  inputSSN=this.page.locator('//*[@id=\'customer.ssn\']')
  inputUserName=this.page.locator('//*[@id=\'customer.username\']')
  inputPassword=this.page.locator('//*[@id=\'customer.password\']')
  inputConfirmPassword=this.page.locator('//*[@id=\'repeatedPassword\']')
  buttonRegister=this.page.locator('#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input')
  messageWelcome =this.page.locator('#rightPanel > h1[class=\'title\']')
  messageAccountCreated = this.page.locator('#rightPanel > p')
  buttonLogout=this.page.locator('#leftPanel > ul > li > a[href=\'logout.htm\']')

  async registrationFillFirstName(firstName: string){
    await this.inputFirstName.fill(firstName)
  }
  async registrationFilllastName(lastName: string) {
    await this.inputLastName.fill(lastName)
  }
  async registrationFilladdress(address: string) {
    await this.inputAddress.fill(address)
  }
  async registrationFillCity(city: string) {
    await this.inputCity.fill(city)
  }
  async registrationFillState(state: string) {
    await this.inputState.fill(state)
  }
  async registrationFillzipCode(zipCode: string) {
    await this.inputZipCode.fill(zipCode)
  }
  async registrationFillPhone(phone: string) {
    await this.inputPhone.fill(phone)
  }
  async registrationFillSsn(ssn: string) {
    await this.inputSSN.fill(ssn)
  }
  async registrationFilluserName(userName: string) {
    await this.inputUserName.fill(userName)
  }
  async registrationFillPassword(password: string) {
    await this.inputPassword.fill(password)
    await this.inputConfirmPassword.fill(password)
  }
  async clickRegistrationButton() {
 
    await this.buttonRegister.click()
  }
     
}