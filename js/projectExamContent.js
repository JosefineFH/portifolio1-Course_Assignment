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
            <li><a href="${projectExamData.githubLink} target="_blank"">Github</a></li>
            <li> | </li>
            <li><a href="${projectExamData.liveVersion} target="_blank"">Live Version</a></li>
            </ul>
            </div>
            `

            projectExamData.wantToUpdate.forEach(updates => {
                projectExamUpdate.innerHTML += `
                <div>
                <p>${updates}</p>
                </div>
                `
            });
        })
