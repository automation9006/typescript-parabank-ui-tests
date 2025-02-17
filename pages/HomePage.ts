import { Page } from '@playwright/test'

export default class HomePage{
  
  constructor(public page:Page){

  }

  inputUserName = this.page.locator('div[class=\'login\'] [class=\'input\'][name=\'username\']')
  inputPassword = this.page.locator('div[class=\'login\'] [class=\'input\'][name=\'password\']')
  buttonLogin=this.page.locator('#loginPanel > form > div:nth-child(5) > input')
  linkForgotLoginInfo=this.page.locator('#loginPanel a[href=\'lookup.htm\']') 
  linkRegister=this.page.locator('#loginPanel > p:nth-child(3) > a')
  menuHeaderSolutions=this.page.locator('li[class=\'Solutions\']')
  menuHeaderAboutUs=this.page.locator('#headerPanel > ul.leftmenu > li:nth-child(2) > a')
  menuHeaderServices=this.page.locator('#headerPanel > ul.leftmenu > li:nth-child(3) > a')
  menuHeaderProducts=this.page.locator('#headerPanel > ul.leftmenu > li:nth-child(4) > a')
  menuHeaderLocations=this.page.locator('#headerPanel > ul.leftmenu > li:nth-child(5) > a')
  menuHeaderAdminPage=this.page.locator('#headerPanel > ul.leftmenu > li:nth-child(6) > a')
  textAccountOverview=this.page.locator('#showOverview > h1[class=\'title\']')
  textErrorTitle=this.page.locator('#rightPanel > h1[class=\'title\']')
  textErrorMessage=this.page.locator('#rightPanel > p[class=\'error\']')

  async userLogin(userName: string, password: string) {
    await this.inputUserName.fill(userName)
    await this.inputPassword.fill(password)
    const loginButton = await this.page.waitForSelector('#loginPanel > form > div:nth-child(5) > input')
    await loginButton.isVisible()
    await this.buttonLogin.click()
  }
}