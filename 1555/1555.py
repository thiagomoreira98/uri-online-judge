testes = int(input())

for i in range(testes):
    entrada = input().split(' ')
    x = int(entrada[0])
    y = int(entrada[1])

    rafael = ((3*x) ** 2) + (y ** 2)
    beto = 2 * (x ** 2) + ((5 * y) ** 2)
    carlos = -100 * x + (y ** 3)

    if rafael > beto and rafael > carlos:
        print('Rafael ganhou')

    elif beto > rafael and beto > carlos:
        print('Beto ganhou')

    elif carlos > rafael and carlos > beto:
        print('Carlos ganhou')