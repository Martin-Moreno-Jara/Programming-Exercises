def fizzBuzz(max:int):
    for i in range(1,max+1):
        if i%3==0 and i%5==0:
            print(f'{i} FizzBuzz')
        elif i%3==0:
            print(f'{i} Fizz')
        elif i%5==0:
            print(f'{i} Buzz')

fizzBuzz(100)