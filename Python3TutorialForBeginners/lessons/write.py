# zapisywanie do pliku
with open('files/write.txt', 'w') as write_file:
    write_file.write('Life is really simple, but we insist on making it complicated.')


# some code

# dodawanie do pliku
with open('files/write.txt', 'a') as write_file:
    write_file.write('\nNothing in life is to be feared, it is only to be understood. Now is the time to understand more so that we may fear less.')

quotes = [
    '\nI can resist everything except temptation',
    '\nWe are all in the gutter, but some of us are looking at the stars',
    '\nAlways forgive your enemies - nothing annoys them so much'
]

with open('files/write.txt', 'a') as write_file:
    write_file.writelines(quotes)
