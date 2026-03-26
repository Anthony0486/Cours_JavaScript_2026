const a = {
    b: 3
};

const p = new Proxy(a, {
    get(target, prop, receiver){
        console.log('Accès à la propriété', prop);
        return Reflect.get(...arguments);
    },
    set(target, prop, value, receiver){
        console.log('Ecriture dans la propriété', prop);
        return Reflect.set(...arguments);
    }
});
console.log(a)