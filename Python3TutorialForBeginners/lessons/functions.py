def greet(name = 'ryu', time = 'morning'):
    # print('hello world')
    print(f'Good {time} {name}, hope you are well')

# name = input('enter your name: ')
# time = input('enter the time of day: ')

# greet()
# greet('shaun', 'afternoon')
# greet('shaun', 'afternoon')
# greet(name = 'shaun')
# greet(name, time)
# greet()

def area(radius):
    # print(3.142 * radius * radius)
    return 3.142 * radius * radius

def vol(area, lenght):
    print(area * lenght)

radius = int(input('enter a radius: '))
lenght = int(input('enter a lenght: '))

# area(5)
# area(radius)

# area_calc = area(radius)
# vol(area_calc, lenght)

vol(area(radius), lenght)