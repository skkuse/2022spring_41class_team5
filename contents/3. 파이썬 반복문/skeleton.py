def solution1(num):
    cnt=0
    sum=0
    while # 이곳에 코드를 작성해주세요:
        cnt+=1
        if # 이곳에 코드를 작성해주세요:
            sum+=cnt
        
    return sum

def solution2():
    scores=[70,60,65,55,75,95,90,80,85,100]
    sum=0
    for # 이곳에 코드를 작성해주세요:
        # 이곳에 코드를 작성해주세요
    
    avg=sum/10

    return avg

#################################skeleton answer#######################################

# 맞은 문제 개수
sum=0

#전체 문제 개수
num_pb=3

if(solution1(100)==1683): sum+=1
if(solution1(300)==15150) : sum+=1

if(solution2()==77.5) :sum+=1

if(sum==num_pb) : print(f'pass ({sum}/{num_pb})')
else : print(f'fail ({sum}/{num_pb})')
