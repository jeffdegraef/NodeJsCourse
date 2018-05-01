export default function getBaseUrl() {
    //checks if we are running the app in dev or prod. IN dev means localhost. Based on that it will return the localhost URL or not.
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3001/' : '/';
}
