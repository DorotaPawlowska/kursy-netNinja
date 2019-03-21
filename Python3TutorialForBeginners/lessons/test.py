from classes import Planet

naboo = Planet('Naboo', 300000, 8, 'Naboo System')
print(f'Naboo: {naboo.name}')
print(Planet.spin('a very high speed'))
print(naboo.spin('a very high speed'))
