import { expect } from '@wdio/globals'
import AppPage from '../pageobjects/app.page.js'
import user from '../data/user.json' assert { type: "json" };


describe('Job Application Form', () => {
    it('should fill the job application form with my data', async () => {
        await AppPage.open();
        
        await AppPage.clickApply();
        await browser.pause(300);
        await expect(AppPage.applicationTitle).toHaveText('Software Test Automation Engineer (API & UI Automation)');
        await AppPage.typeFirstName(user.firstName);
        await AppPage.typeLastName(user.lastName);
        await AppPage.typeEmail(user.email);
        await AppPage.typePhone(user.phone);

        const remoteFilePath = await browser.uploadFile('/Users/omac/dev/testing/testlio/test/data/OmarRodriguez-Resume.pdf');
        await AppPage.selectFile(remoteFilePath);
        
        //await expect(AppPage.resuneName).toHaveText('OmarRodriguez-Resume.pdf');
        
        await AppPage.typeLinkedInProfile(user.linkedinProfile);
        await AppPage.typeLocation(user.location);
        await AppPage.typeDescription(user.experience);
        await AppPage.checkDevices();
        await AppPage.typeHourRate(user.hourrate);
        await AppPage.typeworkingstatus(user.workingStatus);
        await browser.pause(50000);
        await AppPage.clickSubmit();  
    })
})

