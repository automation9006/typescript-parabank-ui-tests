import {expect, test} from '../../fixtures/fixtures'
import { loginData } from '../../testdata/loginData'

test.beforeEach(async ({ page, baseURL }) => {
  await test.step('Given I visit Parabank', async () => {
    
    await page.goto(`${baseURL}`)
  })
})
test.describe('collection of login validations tests', () => {

  test('validate user login with valid logins', { tag: '@login' }, async ({ homePage, registerPage }) => {
    
    await test.step('When I try to login with valid username and password', async () => {
      homePage.userLogin(loginData.username, loginData.password)
    })
    await test.step('Then I should get login sucess', async () => {
      await expect(registerPage.buttonLogout).toBeVisible()
      await expect(homePage.textAccountOverview).toHaveText('Accounts Overview')
    })
  })
  test('validate user login with in-valid logins combinations', { tag: '@login' }, async ({ homePage }) => {
    await test.step('When I try to login with invalid username and password', async () => {
      const loginData = [
        // invalid login details
        ['autotest2025', 'test!'],
        ['autotest200@', 'test2000'],
        
      ]
    
      for (let i = 0; i < loginData.length; i++) {
      
        homePage.userLogin(loginData[i][0], loginData[i][1])
        console.log('*****************username ::' + loginData[i][0])
        console.log('*****************password ::' + loginData[i][1])
      
        await test.step('Then I should get the error: “The username and password could not be verified', async () => {
          await expect(homePage.textErrorTitle).toHaveText('Error!')
          await expect(homePage.textErrorMessage).toHaveText('The username and password could not be verified.')
          // await expect(homePage.textErrorMessage).toHaveText('An internal error has occurred and has been logged.')
        })
      }
    })
    
  })
})
