fruits=['apple','banana','mango','grapes','peach']

exists=False
for fruit in fruits:
    if fruit=='banana':
        exists=True
        break

if exists:
    print('yummy!')
else:
    print('hungry!')

# yummy!