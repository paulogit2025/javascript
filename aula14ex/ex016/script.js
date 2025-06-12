// function contar() {
//     var inicio = document.getElementById('iinicio')
//     var fim = document.getElementById('ifim')
//     var passo = document.getElementById('ipasso')
//     var ini = Number(inicio.value)
//     var fi = Number(fim.value)
//     var pas = Number(passo.value)
//     var contagem = document.getElementById('contagem')
//     if (pas == 0) {
//         alert('impossível contar, considerando passo 1.')
//         pas = 1
//     } else if (ini.length == 0) {
//         contagem.innerHTML = 'Impossível contar'
//     }
//     while (ini <= fi) {
//         contagem.innerHTML += ini
//         ini = ini + pas
//     }
    
// }

function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        // alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // Contagem descrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}