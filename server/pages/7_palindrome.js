
import fetch from 'node-fetch';

function isPalindrom(str) {
    let clearStr = str.toLowerCase().replace(/[А-Яа-яЁё]/g, '');
    if(clearStr === clearStr.split('').reverse().join('')) return true;
    return false;
}



console.log(isPalindrom('А роза упала на лапу Азора'));


//Область видимости
function f() { console.log(this.x); }
var obj = {x: 'bar'};

// f.apply(obj)
// f.call(obj)

obj.f  = f
obj.f()


//Уникальный массив
function unique(arr) {
    const set = new Set(arr);
    console.log(Array.from(set));
}
unique([1, 1, 2, 2, 4, 2, 3, 7, 3]);

//Обход дервева

const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4 },
                { value: 5 },
            ]
        },
        {
            value: 3,
            children: [
                { value: 6 },
                { value: 7 },
            ]
        }
    ]
};

// function getTreeValues(node) {
//     let values = node.value;
//
//     if(Array.isArray(node.children)){
//         node.children.forEach(item => values += getTreeValues(item))
//     }
//     return values;
// }
//
// console.log(getTreeValues(tree))

//FLat

function flat(arr) {
    let res = [];
    arr.forEach(item => {
        if(Array.isArray(item))
            res = res.concat(flat(item));
        else
            res.push(item);
    })
    return res
}

console.log(flat([1, [2, [3, [4,5]]]])); // => [1, 2, 3, 4, 5]

function getApi(url){
    return new Promise(async (resolve, reject) => {
        let count = 0;
        let result;
        while(count < 6) {
            console.log(`Запрос ${count+1}`)
            try {
                await fetch(url).then(res => resolve(res.json()));
                break;
            } catch {
                count++;
                if(count === 5) {
                    reject(new Error('Ошибка'));
                }
            }
        }
    })
}

// getApi('http://127.0.0.1:5000/tasks')
//     .then(res => console.log(res))
//     .catch(err => console.log(err.message));


//количество вызовов

const getCount = function (n) {
    let count = 1;
    return function() {
        if(count <= n) {
            count++;
            return 'yes'
        }
        return 'no'
    }
}

const getOne = getCount(2)

console.log(getOne())
console.log(getOne())
console.log(getOne())

