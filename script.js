
function calcular() {
    let a = Number((document.querySelector('input.valor-a')).value);
    let b = Number((document.querySelector('input.valor-b')).value);
    let c = Number((document.querySelector('input.valor-c')).value);
    let res = document.querySelector('p.res');
    
    let delta = (b ** 2) - (4 * a * c); //Δ = b² – 4ac
    let x1 = (-b + (delta ** 0.5)) / (2 * a); // x' = (-b + √Δ) / (2a)
    let x2 = (-b - (delta ** 0.5)) / (2 * a); // x" = (-b - √Δ) / (2a)
    res.innerHTML = `<p>O valor de \u{0394} é <strong>${delta}</strong></p>`;

    if (delta == 0) {
        res.innerHTML += ' '
    } else if (delta < 0) {
        res.innerHTML += `</br><p>O valor de \u{0394} é <strong>negativo</strong>.</br>A equação não terá valores reais.</p>`
    } else {
        res.innerHTML += `</br><p>O valor de x' é <strong>${x1}</strong></p>`;
        res.innerHTML += `</br><p>O valor de x" é <strong>${x2}</strong></p>`;
    }
}

function recalc() {
    let a2 = document.querySelector('input.valor-a');
    let b2 = document.querySelector('input.valor-b');
    let c2 = document.querySelector('input.valor-c');
    let res2 = document.querySelector('p.res');

    a2.value = '';
    b2.value = '';
    c2.value = '';
    res2.innerHTML = 'Resultado'
}
