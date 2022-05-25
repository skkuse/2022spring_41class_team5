def solution1(num):
    # score는 학생의 점수를 낱타내는 변수입니다
    score=num
    grade=None
    
    if # 이곳에 코드를 적어주세요:
        grade='A'
    elif # 이곳에 코드를 적어주세요:
        grade='B'
    else # 이곳에 코드를 적어주세요:
        grade='C'

    return grade

def solution2(str):
    # fruit은 과일 이름을 나타내는 변수입니다
    fruit=str
    fruits=['apple','banana','mango','grapes','peach']
    state='hungry!'

    for # 이곳에 코드를 적어주세요 :
        if # 이곳에 코드를 적어주세요 :
            state='yummy!'
            
    return state

#################################skeleton answer#######################################

# 맞은 문제 개수
sum=0

#전체 문제 개수
num_pb=6

if(solution1(90)=='A'): sum+=1
if(solution1(85)=='B') : sum+=1
if(solution1(50)=='C') : sum+=1

if(solution2('apple')=='yummy!'): sum+=1
if(solution2('pineapple')=='hungry!') : sum+=1
if(solution2('mango')=='yummy!') : sum+=1

if(sum==num_pb) : print(f'pass ({sum}/{num_pb})')
else : print(f'fail ({sum}/{num_pb})')