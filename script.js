const agent = window.navigator.userAgent;
const name = window.navigator.appName;
const version = window.navigator.appVersion;
// document.body.innerText="testinggg";
const str = "You are using " + name + version + "version";
const divTag = document.createElement("div");
divTag.id="browser-info";
divTag.innerText=str;
document.body.appendChild(divTag)
