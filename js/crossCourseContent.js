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
            <li>
            <a class="a_link" href="${crossCorseData.githubLink}" target="_blank"">
            <div class="a_link_border">Github</div>
            </a>
            </li>
            <li><a href="${crossCorseData.liveVersion}" target="_blank"">
            <div class="a_link_border">Live Version</div></a>
            </li>
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