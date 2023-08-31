const jurosSimples = (req, res) => {
    const valorInicial = Number(req.body.valorInicial);
    let valorMensal = Number(req.body.valorMensal);
    const taxa = Number(req.body.taxa);
    const tempo = Number(req.body.tempo)

    try {
        if (!valorInicial || valorInicial <= 0 || Number.isNaN(valorInicial)) {
            return res.status(400).json({ mensagem: "O valor inicial deve ser um numero válido (ex.: 10 ou 10.0)" })
        }
        if (valorMensal < 0 || Number.isNaN(valorMensal)) {
            return res.status(400).json({ mensagem: "O valor mensal deve ser um numero válido (ex.: 10 ou 10.0)" })
        }
        if (!taxa || taxa <= 0 || Number.isNaN(taxa)) {
            return res.status(400).json({ mensagem: "O taxa deve ser um numero válido (ex.: 10 ou 10.0)" })
        }
        if (!tempo || tempo < 1 || Number.isNaN(tempo) || !Number.isInteger(tempo)) {
            return res.status(400).json({ mensagem: "O tempo deve ser um numero válido (ex.: 10 )" })
        }
        if (!valorMensal || valorMensal === 0) {
            valorMensal = 0;
        }

        let valorFinal = 0;

        const valorParcial = valorInicial * (1 + taxa);
        console.log(valorParcial);
        valorFinal = (valorParcial + valorMensal) * (1 + taxa * (tempo - 1));
        console.log(valorFinal);
        return res.status(200).json({
            Montante: valorFinal.toFixed(2),
            taxa: taxa,
            juros: (valorFinal - valorInicial).toFixed(2)
        })
    } catch (erro) {
        return res.status(500).json({ erro: erro.message });
    }

}

module.exports = { jurosSimples }