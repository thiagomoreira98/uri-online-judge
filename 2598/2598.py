casos = int(input())

for i in range(casos):
    entrada = input().split(' ')
    avenida = int(entrada[0])
    km_radar = int(entrada[1])

    saida = str(avenida / km_radar)
    length = len(saida)

    if length > 1:
        saida = float(saida) + 1

    print("%.0f" % saida)