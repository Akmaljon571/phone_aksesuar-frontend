export const sum = (sum) => {
    return `${sum}`.split('').reverse().map((e, i) => i % 3 === 0 ? e + ' ' : e).reverse().join('')
}

