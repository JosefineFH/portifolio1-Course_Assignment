const jsonData = '/data.json';
const CrossCorseContent = document.querySelector('.cross_course_content');
const semesterProjectContent = document.querySelector('.semester_project_content');
const projectExamContent = document.querySelector('.project_exam_content');

    fetch(jsonData)
        .then(response => response.json())
        .then(data => {

            const projectExamUpdate = document.querySelector('.project_exam_update');
            let projectExamData = data.projectExam;

            
            projectExamContent.innerHTML += `
            <div>
            <h2>${projectExamData.projectName}</h2>
            <ul>
                <li>${projectExamData.scriptLanguages[0]}</li>
                <li>${projectExamData.scriptLanguages[1]}</li>
                <li>${projectExamData.scriptLanguages[2]}</li>
                <li>${projectExamData.scriptLanguages[3]}</li>
            </ul>
            <ul>
            <li>
            <a class="a_link" href="${data.projectExam.githubLink}" target="_blank">
            <div class="a_link_border">
            Github
            </div>
            </a>
            </li>
            
            <li>
            <a class="a_link" href="${data.projectExam.liveVersion}" target="_blank">
            <div class="a_link_border">
            Live Version
            </div>
            </a>
            </li>
            </ul>
            </div>
            `
            console.log(data.projectExam)
            projectExamData.wantToUpdate.forEach(updates => {
                projectExamUpdate.innerHTML += `
                <div>
                <p>${updates}</p>
                </div>
                `
            });
        })
