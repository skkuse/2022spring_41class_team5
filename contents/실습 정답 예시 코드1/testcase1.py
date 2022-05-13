import subprocess

output=subprocess.check_output('python3 ./answer1.py',shell=True)
print(output)
print()*10
isAnswer=False

if output=='Life':
    isAnswer=True

print(isAnswer)    