function tabuada() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('txtt')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        for(let c = 1; c <= 10; c++) {
            let s = n * c
            res.innerHTML += `${n} x ${c} = ${s} `
        }
    }
}