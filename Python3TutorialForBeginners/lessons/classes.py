class Planet:

    def __init__(self, name, radius, gravity, system):
        self.name = name
        self.radius = radius
        self.gravity = gravity
        self.system = system

    def orbit(self):
        return f'{self.name} is orbiting in the {self.system}'

hoth = Planet('Hoth', 200000, 5.5, 'Hoth System')
print(f'name is: {hoth.name}')
print(f'radius is: {hoth.radius}')
print(f'the gravity is: {hoth.gravity}')
print(hoth.orbit())

naboo = Planet('Naboo', 300000, 8, 'Naboo System')
print(f'name is: {naboo.name}')
print(f'radius is: {naboo.radius}')
print(f'the gravity is: {naboo.gravity}')
print(naboo.orbit())