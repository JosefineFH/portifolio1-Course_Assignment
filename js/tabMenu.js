const crossCourse = document.querySelector('.cross_corse_tab');
const semesterProject = document.querySelector('.semester_project_tab');
const projectExam = document.querySelector('.project_exam_tab');

const crossCourseSection = document.querySelector('.cross_course_project');
const semesterProjectSection = document.querySelector('.semester_project');
const projectExamSection = document.querySelector('.project_exam_1');

semesterProjectSection.style.display = 'none';
projectExamSection.style.display = 'none';

crossCourse.addEventListener('click', () => {
    crossCourseSection.style.display = 'block';
    semesterProjectSection.style.display = 'none';
    projectExamSection.style.display = 'none';

    crossCourse.style.backgroundColor = '#B8D2D8'
    crossCourseSection.style.backgroundColor = '#B8D2D8';

    semesterProject.style.backgroundColor = 'unset';
    projectExam.style.backgroundColor = 'unset';


})
semesterProject.addEventListener('click', () => {
    
    crossCourseSection.style.display = 'none';
    semesterProjectSection.style.display = 'block';
    projectExamSection.style.display = 'none';

    semesterProjectSection.style.backgroundColor = '#B3DDD1';
    semesterProject.style.backgroundColor = '#B3DDD1';

    projectExam.style.backgroundColor = 'unset';
    crossCourse.style.backgroundColor = 'unset'


})
projectExam.addEventListener('click', () => {
    crossCourseSection.style.display = 'none';
    semesterProjectSection.style.display = 'none';
    projectExamSection.style.display = 'block';

    projectExamSection.style.backgroundColor = '#c8b7c9';
    projectExam.style.backgroundColor = '#c8b7c9';

    semesterProject.style.backgroundColor = 'unset';
    crossCourse.style.backgroundColor = 'unset'

})