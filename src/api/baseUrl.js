import chalk from 'chalk';

export default function getBaseUrl() {
    //checks if we are running the app in dev or prod. IN dev means localhost. Based on that it will return the localhost URL or not.
    //const inDevelopment = window.location.hostname === 'localhost';
    //return inDevelopment ? 'http://localhost:3001/' : '/';

        return getQueryStringParameterByName('useMockApi')? 'http://localhost:3001' : '/';
}


function getQueryStringParameterByName(name, url) {
    if(!url) url=window.location.href;
    name = name.replace(/[\[\]]/g,"\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results)return null;
    if (!results[2]) return '';
    console.log(chalk.green("Query string used:useMockApi"));

    return decodeURIComponent(results[2].replace(/\+/g,""));
}
