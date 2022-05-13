class Calculator:
    def __init__(self):
        self.result=0
        self.history=[]
    
    def add(self,num):
        self.result+=num
        self.history.append(self.result)
        return self.result

    
    def sub(self,num):
        self.result-=num
        self.history.append(self.result)
        return self.result

    
    def mul(self,num):
        self.result*=num
        self.history.append(self.result)
        return self.result

    
    def div(self,num):
        self.result/=num
        self.history.append(self.result)
        return self.result

    def reset(self):
        self.result=0
        self.history=[]