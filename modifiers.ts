class Student {
  public name: string;
  private rollNo: number;
  protected course: string;

  constructor(name: string, rollNo: number, course: string) {
    this.name = name;
    this.rollNo = rollNo;
    this.course = course;
  }

  showRoll(): void {
    console.log("Roll No:", this.rollNo);
  }
}

class CollegeStudent extends Student {
  showCourse(): void {
    console.log("Course:", this.course);
  }
}

const s1 = new CollegeStudent("Amit", 101, "BCA");

console.log(s1.name);   // ✅ public
s1.showRoll();          // ✅ via method
s1.showCourse();        // ✅ protected via child
