const verificarDados = (req, res, next) => {
    const valorInicial = Number(req.body.valorInicial);
    const valorMensal = Number(req.body.valorMensal);
    const taxa = Number(req.body.taxa);
    const tempo = Number(req.body.tempo)

    if (!valorInicial || !taxa || !tempo) {
        return res.status(400).json({ mensagem: "O valor inicial, a taxa e o tempo são obrigatórios!" })
    }
    if (Number.isNaN(valorInicial)) {
        return res.status(400).json({ mensagem: "O valor inicial deve ser um numero válido (ex.: 10 ou 10.0)" })
    }
    if (valorInicial <= 0) {
        return res.status(400).json({ mensagem: "O valor inicial deve ser maior que zero!" })
    }
    if (valorMensal < 0 || Number.isNaN(valorMensal)) {
        return res.status(400).json({ mensagem: "O valor mensal deve ser um numero válido (ex.: 10 ou 10.0)" })
    }
    if (Number.isNaN(taxa)) {
        return res.status(400).json({ mensagem: "O taxa em porcentagem deve ser um numero válido [ex.: 1 (%) ou 0.5 (%)]" })
    }
    if (taxa <= 0) {
        return res.status(400).json({ mensagem: "A taxa deve ser maior que zero!" })
    }
    if (Number.isNaN(tempo) || !Number.isInteger(tempo)) {
        return res.status(400).json({ mensagem: "O tempo deve ser um numero válido (ex.: 10 )" })
    }
    if (taxa < 1) {
        return res.status(400).json({ mensagem: "O tempo deve ser maior que um!" })
    }
    next();
}

module.exports = verificarDados