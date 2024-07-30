const treeTest = {
    a: {
        value: 'A',
        b: {
            value: 'B',
            c: {
                value: 'C',
            },
        },
        b1: {
            value: 'B',
            c: {
                value: 'C',
            },
        },
    },
    b: {
        value: 'A14',
        b2: {
            value: 'B14',
            c: {
                value: 'C14',
            },
        },
        b3: {
            value: 'B12',
            c: {
                value: 'C12',
            },
        },
    },
    value: 'E',
}

const checkTree = (tree, val) => {
    console.log('tree', tree)
    console.log('tree.value', tree.value)

    if (tree.value === val) {
        return true
    }
    for (const key in tree) {
        if (typeof tree[key] === 'object' && checkTree(tree[key], val))
            return true
    }

    return false
}

console.log(checkTree(treeTest, 'B12'))
