export class ValidateHelper {

    validateNumbers(value) {
        const regex = /^([0-9])*$/;
        const result = regex.test(value);
        return result;
    }

}