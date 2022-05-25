def solution1(num):
    # is_odd 함수
    def is_odd(num):
        if # 이곳에 코드를 작성해주세요:
            return # 이곳에 코드를 작성해주세요
        else:
            return # 이곳에 코드를 작성해주세요

    return is_odd(num)

def solution2(num):
    # sum 함수
    def sum(num):
        sum=0
        #이곳에 코드를 작성해주세요

        return sum

    return sum(num)

#################################skeleton answer#######################################

# 맞은 문제 개수
sum=0

#전체 문제 개수
num_pb=8

if(solution1(1)==True): sum+=1
if(solution1(4)==False) : sum+=1
if(solution1(539)==True) : sum+=1
if(solution1(4820)==False) : sum+=1

if(solution2(10)==55) : sum+=1
if(solution2(100)==5050) : sum+=1
if(solution2(87)==3828) : sum+=1
if(solution2(54)==1485) : sum+=1


if(sum==num_pb) : print(f'pass ({sum}/{num_pb})')
else : print(f'fail ({sum}/{num_pb})')