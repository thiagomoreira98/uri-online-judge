i = 0
while True:
    try:
        i += 1
        entrada = input().split(' ')
        capital_inicial = float(entrada[0])
        capital_final = float(entrada[1])

        diferenca = capital_final - capital_inicial
        juros = ((capital_final * 100) / capital_inicial) - 100
        print("Projeto %.0f:" % i)
        print("Percentual dos juros da aplicacao: %.2f" % juros + " %\n")
    except EOFError:
        break