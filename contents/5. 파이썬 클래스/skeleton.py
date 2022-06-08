def solution1():
    class Calculator:
        def __init__(self):
            self.result=0
            # 이곳에 코드를 적어주세요
        
        def add(self,num):
            self.result+=num
            # 이곳에 코드를 적어주세요
            return self.result

        
        def sub(self,num):
            self.result-=num
            # 이곳에 코드를 적어주세요
            return self.result

        
        def mul(self,num):
            self.result*=num
            # 이곳에 코드를 적어주세요
            return self.result

        
        def div(self,num):
            self.result/=num
            # 이곳에 코드를 적어주세요
            return self.result

    cal=Calculator()
    return cal

def solution2():
    class Calculator:
        def __init__(self):
            self.result=0
            # 이곳에 코드를 적어주세요
        
        def add(self,num):
            self.result+=num
            # 이곳에 코드를 적어주세요
            return self.result

        
        def sub(self,num):
            self.result-=num
            # 이곳에 코드를 적어주세요
            return self.result

        
        def mul(self,num):
            self.result*=num
            # 이곳에 코드를 적어주세요
            return self.result

        
        def div(self,num):
            self.result/=num
            # 이곳에 코드를 적어주세요
            return self.result

        def reset(self):
            #이곳에 코드를 적어주세요
            return

    cal=Calculator()
    return cal


#################################skeleton answer#######################################

def test1():
    answer=[]

    cal=solution1()
    cal.add(1)
    cal.mul(2)
    cal.add(10)
    cal.div(3)
    answer.append(cal.history)

    return answer #[1,2,12,4]

def test2():
    answer=[]

    cal=solution2()
    cal.add(12)
    cal.mul(3)
    cal.div(6)
    answer.append(cal.history) # [12,36,6]

    cal.reset()
    cal.add(7)
    cal.sub(2)
    cal.div(5)
    answer.append(cal.history) # [7,5,1]

    return answer # [[12,36,6],[7,5,1]]


# 맞은 문제 개수
sum=0

#전체 문제 개수
num_pb=2

if(test1()==[[1,2,12,4]]) : sum+=1
if(test2()==[[12,36,6],[7,5,1]]) : sum+=1


if(sum==num_pb) : print(f'pass ({sum}/{num_pb})')
else : print(f'fail ({sum}/{num_pb})')
