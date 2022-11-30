import { parse } from 'yaml'

class Reader {
    static async load(page){
        const response = await fetch(`/data/pages/${page}.json`);
        const data = await response.json();
        return data;
    }
    static async loadPage(page){
        const response = await fetch(`/data/pages/${page}.yaml`);
        const data = await response.text();

        const result = parse(data);
        return result.data;
    }
}


export default Reader;