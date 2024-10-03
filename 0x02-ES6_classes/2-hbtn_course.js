class HolbertonCourse:
    def __init__(self, name, length, students):
        self._name = None
        self._length = None
        self._students = None

        self.name = name  # Uses the setter to validate and set the value
        self.length = length  # Uses the setter to validate and set the value
        self.students = students  # Uses the setter to validate and set the value

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if not isinstance(value, str):
            raise ValueError("name must be a string")
        self._name = value

    @property
    def length(self):
        return self._length

    @length.setter
    def length(self, value):
        if not isinstance(value, (int, float)):
            raise ValueError("length must be a number")
        self._length = value

    @property
    def students(self):
        return self._students

    @students.setter
    def students(self, value):
        if not isinstance(value, list) or not all(isinstance(student, str) for student in value):
            raise ValueError("students must be a list of strings")
        self._students = value

# Example usage
try:
    course = HolbertonCourse("Python Programming", 10, ["Alice", "Bob"])
    print(course.name)     # Output: Python Programming
    print(course.length)   # Output: 10
    print(course.students)  # Output: ['Alice', 'Bob']
except ValueError as e:
    print(e)
