import {expect, test} from '../../fixtures/fixtures'

test.beforeEach(async ({page,baseURL})=>{
  await page.goto(`${baseURL}`)
})

test.describe('collection of tests on home page validations', () => {

  test('validate home page title and menu links',{tag:'@sanity'}, async ({page,homePage}) => {
    
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking')
    const menuCSS =[
      [
        homePage.menuHeaderSolutions,
        homePage.menuHeaderAboutUs,
        homePage.menuHeaderServices,
        homePage.menuHeaderProducts,
        homePage.menuHeaderAdminPage,
        homePage.linkForgotLoginInfo,
        homePage.linkRegister,
        homePage.buttonLogin,
        homePage.inputPassword,
        homePage.inputUserName
      ]
    ]
    for(let i=0; i<=menuCSS.length;i++){
      await expect((menuCSS[0][i])).toBeVisible()
    }
  })
})
