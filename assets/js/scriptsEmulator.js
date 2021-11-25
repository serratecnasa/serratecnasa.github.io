const input_bandeira = document.getElementById('selectbandeira')
const input_potencia = document.getElementById('potenciadoaparelho')
const input_tempousoH = document.getElementById('tempodeusoh')
const input_tempousoM = document.getElementById('tempodeusom')
const input_dtocalc = document.getElementById('dtocalc')
const btn_calc = document.getElementById('btn-calc')
const div_result = document.getElementById('result')

btn_calc.addEventListener('click', () => {

    if (input_tempousoM.value == '') input_tempousoM.value = 0
    if (input_tempousoH.value == '') input_tempousoH.value = 0

    if (input_bandeira.value == '') return alert('Por favor, escolher uma bandeira')
    if (input_potencia.value == '' || input_potencia.value <= 0) return alert('Por favor, preencha o campo de potencia')
    // if (input_dtocalc == '' || input_dtocalc <= 0) return alert('Por favor, preencha o campo de tempo de uso')

    var v_watts = input_potencia.value / 1000
    var t_minuto = input_tempousoH.value + (input_tempousoM.value / 60)
    var kw_hora = v_watts * t_minuto

    var data = ''

    switch (input_bandeira.value) {
        case 'verde':
            var gastoobt = kw_hora * 0.694

            var sms = gastoobt > 1 ? 'Vix, tá gastando muito!' : 'Muito bem, está na média'

            data = {
                gastoobt,
                sms
            }
            break;
        case 'amarela':
            var gastoobt = kw_hora * (0.694 + 0.01874)
            var sms = gastoobt > 1 ? 'Vix, tá gastando muito!' : 'Muito bem, está na média'
            data = {
                gastoobt,
                sms
            }
            break;
        case 'Vermelha1':
            var gastoobt = kw_hora * (0.694 + 0.0397)
            var sms = gastoobt > 1 ? 'Vix, tá gastando muito!' : 'Muito bem, está na média'
            data = {
                gastoobt,
                sms
            }
            break;
        case 'vermelha2':
            var gastoobt = kw_hora * (0.694 + 0.0949)
            var sms = gastoobt > 1 ? 'Vix, tá gastando muito!' : 'Muito bem, está na média'
            data = {
                gastoobt,
                sms
            }
            break;
        case 'escassez':
            var gastoobt = kw_hora * (0.694 + 0.147)
            var sms = gastoobt > 1 ? 'Vix, tá gastando muito!' : 'Muito bem, está na média'
            data = {
                gastoobt,
                sms
            }
            break;

        default:
            break;
    }
    var gasto = (data.gastoobt * input_dtocalc.value)
    var m = -Math.floor(Math.log10(gasto) + 1) + 1;

    m >= 100 ?
        gasto = gasto >= 0 ? gasto.toFixed(0) : gasto
        : m <= 0 ?
            gasto = gasto >= 0 ? gasto.toFixed(0) : gasto
            : gasto = gasto >= 0 ? gasto.toFixed(m) : gasto


    var mensagem = `Com a bandeira ${input_bandeira.value}, usando o aparelho com ${input_potencia.value}Watts usados em ${input_tempousoH.value}H e ${input_tempousoM.value}Min Você gastou ${gasto}\n ${data.sms}`

    div_result.innerText = mensagem




})