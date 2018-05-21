while True:
    try:
        entrada = int(input())
        phillbonati = [0, 1]

        for i in range(entrada):
            if i > 1:
                if i % 2 == 0:
                    phillbonati.append(phillbonati[i - 1] + phillbonati[i - 2])
                else:
                    phillbonati.append(phillbonati[i - 1] * phillbonati[i - 2])

        print(phillbonati[entrada - 1])
    except EOFError:
        break