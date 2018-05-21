while True:
    try:
        entrada = input().split(' ')
        result = 0

        for item in entrada:
            factorial = 1
            for i in range(int(item)):
                factorial *= (i + 1)

            result += factorial

        print(result)
    except EOFError:
        break