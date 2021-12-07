const jsonData = '/data.json';
const CrossCorseContent = document.querySelector('.cross_course_content');
const semesterProjectContent = document.querySelector('.semester_project_content');
const projectExamContent = document.querySelector('.project_exam_content');

fetchContent();

function fetchContent() {
    fetch(jsonData)
        .then(response => response.json())
        .then(data => {

            let crossCorseData = data.crossCorse;
            let semesterProjectData = data.semesterProject;
            let projectExamData = data.projectExam;

            CrossCorseContent.innerHTML += `
            <div>
            <h2>${crossCorseData.projectName}</h2>
            <p style="text-align: center; padding-top: 20px;">${crossCorseData.scriptLanguages}</p>
            <ul>
            <li><a href="${crossCorseData.githubLink}">Github</a></li>
            <li> | </li>
            <li><a href="${crossCorseData.liveVersion}">Live Version</a></li>
            </ul>
            </div>
            `;
            /* ---------------------------- Semester project ---------------------------- */

            semesterProjectContent.innerHTML += `
            <div>
            <h2>${semesterProjectData.projectName}</h2>
            <p style="text-align: center; padding-top: 20px;">${semesterProjectData.scriptLanguages}</p>
            <ul>
            <li><a href="${semesterProjectData.githubLink}">Github</a></li>
            <li> | </li>
            <li><a href="${semesterProjectData.liveVersion}">Live Version</a></li>
            </ul>
            </div>
                `;
            /* ------------------------------ Project Exsam ----------------------------- */
            
            projectExamContent.innerHTML += `
            <div>
            <h2>${projectExamData.projectName}</h2>
            <p style="text-align: center; padding-top: 20px;">${projectExamData.scriptLanguages}</p>
            <ul>
            <li><a href="${semesterProjectData.githubLink}">Github</a></li>
            <li> | </li>
            <li><a href="${semesterProjectData.liveVersion}">Live Version</a></li>
            </ul>
            </div>
            `

        })
}