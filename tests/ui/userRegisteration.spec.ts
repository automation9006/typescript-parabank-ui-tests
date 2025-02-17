import {expect, test} from '../../fixtures/fixtures'
import generateTestData from '../../mockdata/mockData'

test.beforeEach(async ({ page, baseURL }) => {
  await test.step('Given I visit Parabank', async () => {
    await page.goto(`${baseURL}`)
  })

})

test.describe('tests to validate user registration journey',() => {
  const fakerData = generateTestData()
    
  test('validate user registration success',{tag:'@userRegistration'}, async ({homePage,registerPage}) => {
    await test.step('When I access user register page', async () => {
      await homePage.linkRegister.click()
    })
    await test.step('When I fill date on user register page', async () => {
      await registerPage.registrationFillFirstName(fakerData.firstName)
      await registerPage.registrationFilllastName(fakerData.lastName)
      await registerPage.registrationFilladdress(fakerData.address)
      await registerPage.registrationFillCity(fakerData.city)
      await registerPage.registrationFillState(fakerData.state)
      await registerPage.registrationFillzipCode(fakerData.zipCode)
      await registerPage.registrationFillPhone(fakerData.phone)
      await registerPage.registrationFillSsn(fakerData.ssn)
      await registerPage.registrationFilluserName(fakerData.userName)
      await registerPage.registrationFillPassword(fakerData.password)
    })
    await test.step('When I click registerbutton', async () => {
      await registerPage.clickRegistrationButton()
    })
    await test.step('Then I validate user register success', async () => {
      console.log('******************** ' + fakerData.userName)
      await expect(registerPage.messageWelcome).toHaveText('Welcome ' + fakerData.userName)
      await expect(registerPage.messageAccountCreated).toHaveText('Your account was created successfully. You are now logged in.')
      await expect(registerPage.buttonLogout).toBeVisible()
    })
  })
})
