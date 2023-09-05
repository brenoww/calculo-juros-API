const historico = require("../bancodedados");

const verHistorico = (req, res) => {
    return res.status(200).json(historico);
}

const jurosSimples = (req, res) => {
    const valorInicial = Number(req.body.valorInicial);
    let valorMensal = Number(req.body.valorMensal);
    const taxa = Number(req.body.taxa) / 100;
    const tempo = Number(req.body.tempo)

    try {
        if (!valorMensal || valorMensal === 0) {
            valorMensal = 0;
        }

        const valorFinal = valorInicial * (1 + taxa * tempo) + valorMensal * (tempo - 1);


        const juros = (valorFinal - valorInicial - valorMensal * (tempo - 1)).toFixed(2);

        const novoHistorico = {
            tipo: "Juros Simples",
            valorInicial: valorInicial.toFixed(2),
            valorAcumulado: valorFinal.toFixed(2),
            juros,
            taxa: `${taxa * 100}%`,
            tempo
        }

        historico.unshift(novoHistorico);

        return res.status(200).json({
            valorAcumulado: valorFinal.toFixed(2),
            taxa: `${taxa * 100}%`,
            juros
        })
    } catch (erro) {
        return res.status(500).json({ erro: erro.message });
    }
}

const jurosComposto = (req, res) => {
    const valorInicial = Number(req.body.valorInicial);
    let valorMensal = Number(req.body.valorMensal);
    const taxa = Number(req.body.taxa) / 100;
    const tempo = Number(req.body.tempo)

    try {
        if (!valorMensal || valorMensal === 0) {
            valorMensal = 0;
        }

        let valorFinal = (valorInicial) * (1 + taxa);

        for (let i = 0; i < tempo - 1; i++) {
            valorFinal = (valorFinal + valorMensal) * (1 + taxa);
        }

        const juros = (valorFinal - valorInicial - valorMensal * (tempo - 1)).toFixed(2);

        const novoHistorico = {
            tipo: "Juros Composto",
            valorInicial: valorInicial.toFixed(2),
            valorAcumulado: valorFinal.toFixed(2),
            juros,
            taxa: `${taxa * 100}%`,
            tempo
        }

        historico.unshift(novoHistorico);

        return res.status(200).json({
            valorAcumulado: valorFinal.toFixed(2),
            taxa: `${taxa * 100}%`,
            juros
        })
    } catch (erro) {
        return res.status(500).json({ erro: erro.message });
    }
}

module.exports = { jurosSimples, jurosComposto, verHistorico }