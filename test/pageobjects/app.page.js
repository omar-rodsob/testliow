import { $ } from '@wdio/globals'
import Page from './page.js';

class AppPage extends Page {
    get applyButton () {
        return $('.open-job-modal > a');
    }

    get applicationTitle () {
        return $('#jobModalLabel');
    }

    get firstNameInput () {
        return $('#first_name');
    }

    get lastNameInput () {
        return $('#last_name');
    }

    get emailInput () {
        return $('#email');
    }

    get phoneInput () {
        return $('#phone');
    }

    get resumeFile () {
        return $('#resume');
    }

    get resumeName () {
        return $('#resume_filename');
    }

    get linkedinInput () {
        return $('#question_43709887');
    }

    get timeZoneInput () {
        return $('#question_43709888');
    }

    get jobDescription () {
        return $('#question_43709889');
    }

    get desaireRate () {
        return $('#question_43709890');
    }

    get checkBoxDevices () {
        return $('input[value="175608586"]');
    }

    get currentStatusInput () {
        return $('#question_43852015');
    }

    get submitButton () {
        return $('button[type="submit"]');
    }

    async clickApply(){
        await this.applyButton.click();
    }

    async typeFirstName(firstName){
        this.firstNameInput.setValue(firstName);
    }

    async typeLastName(lastName){
        this.lastNameInput.setValue(lastName);
    }

    async typeEmail(email){
        this.emailInput.setValue(email);
    }

    async typePhone(phone){
        this.phoneInput.setValue(phone);
    }

    async selectFile(filePath){
      this.resumeFile.setValue(filePath);
    }

    async typeLinkedInProfile(linkedinProfile){
        this.linkedinInput.setValue(linkedinProfile);
    }

    async typeLocation(location){
        this.timeZoneInput.setValue(location);
    }

    async typeDescription(description){
        this.jobDescription.setValue(description);
    }

    async  checkDevices(){
        (await $('input[value="175608585"]')).click();
        (await $('input[value="175608586"]')).click();
        (await $('input[value="175608587"]')).click();
    }

    async  typeHourRate(rate){
        this.desaireRate.setValue(rate);
    }

    async typeworkingstatus(status){
        this.currentStatusInput.setValue(status);
    }

    async  clickSubmit(){
        this.submitButton.click();
    }

    open () {
        return super.open('');
    }
}

export default new AppPage();
