fetch(jsonData)
    .then(response => response.json())
    .then(data => {

        let semesterProjectData = data.semesterProject;

        semesterProjectContent.innerHTML += `
            <div>
            <h2>${semesterProjectData.projectName}</h2>
            <ul>
                <li>${semesterProjectData.scriptLanguages[0]}</li>
                <li>${semesterProjectData.scriptLanguages[1]}</li>
                <li>${semesterProjectData.scriptLanguages[2]}</li>
                
            </ul>            
            <ul>
            <li><a href="${semesterProjectData.githubLink}" target="_blank">Github</a></li>
            <li> | </li>
            <li><a href="${semesterProjectData.liveVersion}" target="_blank">Live Version</a></li>
            </ul>
            </div>`;
        const semesterProjectUpdate = document.querySelector('.semester_project_update');

        semesterProjectData.wantToUpdate.forEach(updates => {
            semesterProjectUpdate.innerHTML += `
                <div>
                <p>${updates}</p>
                </div>
                `
        });
    })