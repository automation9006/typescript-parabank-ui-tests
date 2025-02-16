import {test as baseTest} from '@playwright/test'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'

type pages ={

    homePage :HomePage
    registerPage  :RegisterPage
}

const testPages = baseTest.extend<pages>({
   
  registerPage:async ({page},use) =>{
    await use(new RegisterPage(page))
  },
  homePage:async ({page},use) =>{
    await use(new HomePage(page))
  }

})

export const test = testPages
export const expect = testPages.expect