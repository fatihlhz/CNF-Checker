function onCheck() {
    const input = document.getElementById("input")
    const output = document.getElementById("output")
    let result
    
    if(input.value) {
        const verified = isCNF(input.value)
        verified ? result = "Input termasuk kedalam CNF" : result = "Input tidak termasuk kedalam CNF"
    } else {
        result = "Input kosong."
    }


    output.value = result
}

function isCNF(cfgString) {
    const productions = cfgString.split('\n').map(prod => prod.trim());

    for (const prod of productions) {
        if (!prod.includes('->')) {
            return false;
        }

        const [left, right] = prod.split('->').map(part => part.trim());
        if (left.length !== 1 || !left.match(/[A-Z]/)) {
            return false;
        }

        const rightSymbols = right.split(/\s+/);
        if (
            rightSymbols.length === 2 &&
            rightSymbols.every(sym => sym.match(/[A-Z]/))
        ) {
            continue;
        } else if (
            rightSymbols.length === 1 &&
            (rightSymbols[0].match(/[a-z]/) || rightSymbols[0].match(/[A-Z]/))
        ) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}
// function isCNF(input) {
//     const data = input.split("\n")
//     let verified = false
//     let point = 0

//     data.forEach((x) => {
//         const index = data.indexOf(x)
//         let y = x.split("->").map((x) => (x.trim()))
//         data[index] = y
//     })
    
//     const eror1 = data.filter((x) => {
//         return x[0] == x[0].toLowerCase()
//     })
    
//     if(error1)
//     if (point > 0) {
//         verified = true
//     }

//     return verified
// }