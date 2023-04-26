

export default function smartDescructuring (my : Object) : Object {
    // вытащить все методы из обьекта
    // забайндить их с контекстом обьекта
    return Object.getOwnPropertyNames(my).filter(item => {
        return typeof my.isPrototypeOf === 'function';
    })
} 