# 1번 문제
def solution1():
    string='Life is short'
    
    # 이곳에 코드를 적어주세요 #

    return string

# 2번 문제
def solution2():
    list=[3,1,5,4,2]

    # 이곳에 코드를 적어주세요 #

    return list

# 3번 문제
def solution3():
    tuple=(1,2,3)

    return tuple

#################################skeleton answer#######################################

# 맞은 문제 개수
sum=0
#전체 문제 개수
num_pb=3

if(solution1()=='Life'): sum+=1
if(solution2()==[5,4,3,2,1]) : sum+=1
if(solution3()==(1,2,3,4)) : sum+=1

if(sum==num_pb) : print(f'pass ({sum}/{num_pb})')
else : print(f'fail ({sum}/{num_pb})')