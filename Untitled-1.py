class Teacher():
    def __init__(self, name, courses):
        self.name = name
        self.courses = courses
    def python_guru(self):
        for item in self.courses:
            if(item == "Python Start" or item == "Python Pro"):
                return True
            else:
                return False

n = int(input("Введите количество преподавателей"))
techList = []
for i in range(n):
    techList.append(Teacher(input("Введите имя"), input("Введите список курсов через запятую").split(",")))
result = ""

for i in techList:
    if(i.python_guru() == True):
        result = result + i.name
print('Эксперты Python:', result)
        