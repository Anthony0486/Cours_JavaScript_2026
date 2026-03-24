/**
 * Intéragit avec une API JSON
 * @param {string} url 
 * @param {RequestInit & {json: object}} options  
 */
export async function fetchJSON(url, options = {}){
    const headers = {Accept: 'application/json', ...options.headers}
    if(options.json){
        options.body = JSON.stringify(options.json);
        headers['content-type'] = 'application/json';
    }
    const response = await fetch(url, {...options, headers});
    if(response.ok){
        return response.json();
    }
    throw new Error('Erreur serveur', {cause: response});
};