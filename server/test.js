const name = 'abcc';

const company = {
    name: 'Hexlet',
    getName() {
        return this.name;
    },
    country: {
        name: 'country',
        fn: function () {
            console.log(this.name)
        },
        arrowFn: () => {
            console.log(this)
        }
    }
    // То же самое что
    // getName: function getName() {
    //   return this.name;
    // },
};

console.log(company.getName())
company.country.fn()
console.log(company.country.arrowFn())
