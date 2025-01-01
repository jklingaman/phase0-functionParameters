function introduction(name = "user") {
    return(`Hi, my name is ${name}.`)
}
introduction("Aki");

const programLang = "ember.js";

function introductionWithLanguage(name1, programLang) {
    return(`Hi, my name is ${name1} and I am learning to program in ${programLang}.`);
}

introductionWithLanguage("Aki");

const programingLanguage = "JavaScript";

function introductionWithLanguageOptional(fName = "user", programingLanguageValue = programingLanguage) {
    return(`Hi, my name is ${fName} and I am learning to program in ${programingLanguageValue}.`);
}

introductionWithLanguageOptional("Gracie", "Python");