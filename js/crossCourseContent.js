fetch(jsonData)
    .then(response => response.json())
    .then(data => {
        const crossCourseUpdate = document.querySelector('.cross_course_update');
        let crossCorseData = data.crossCorse;

        CrossCorseContent.innerHTML += `
            <div>
            <h2>${crossCorseData.projectName}</h2>
            <ul>
                <li>${crossCorseData.scriptLanguages[0]}</li>
                <li>${crossCorseData.scriptLanguages[1]}</li>
                <li>${crossCorseData.scriptLanguages[2]}</li>
                <li>${crossCorseData.scriptLanguages[3]}</li>
            </ul>            
            <ul>
            <li><a href="${crossCorseData.githubLink}">Github</a></li>
            <li> | </li>
            <li><a href="${crossCorseData.liveVersion}">Live Version</a></li>
            </ul>
            </div>
            `;


            crossCorseData.wantToUpdate.forEach(updates => {
                crossCourseUpdate.innerHTML += `
                    <div>
                    <p>${updates}</p>
                    </div>
                    `
            });
    })