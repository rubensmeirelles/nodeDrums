type menuOptions = '' | 'all' | 'acoustic' | 'eletronic' | 'pearl' | 'sonor' | 'mapex' | 'alesis' | 'rolland' | 'yamaha';

export const createMenuObject = (activeMenu: menuOptions) => {
    let returnObject = {
        all: false,
        acoustic: false,
        eletronic: false,
        pearl: false,
        sonor: false,
        mapex: false,
        alesis: false,
        rolland: false,
        yamaha: false
    }
    if(activeMenu != '') {
        returnObject[activeMenu] = true;
    }
    return returnObject;
}