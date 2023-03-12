const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div class="card m-4 text-light bg-dark" style="width: 18rem;">
            <div class="card-body">
                <h2 >${manager.getName()}</h2>
                <h3><i class="fas fa-mug-hot"></i> Manager</h3>
            </div>
            <ul class="list-group list-group-flush mb-3">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></span></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        `
    }
    const generateEngineer = engineer => {
        return `
        <div class="card m-4 text-light bg-dark" style="width: 18rem;">
                    <div class="card-body">
                        <h2 >${engineer.getName()}</h2>
                        <h3><i class="fas fa-mug-hot"></i> Engineer</h3>
                    </div>
                    <ul class="list-group list-group-flush mb-3">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span></li>
                        <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                    </ul>
        </div>
        `
    }
    const generateIntern = intern => {
        return `
        <div class="card m-4 text-light bg-dark" style="width: 18rem;">
                    <div class="card-body">
                        <h2 >${intern.getName()}</h2>
                        <h3><i class="fas fa-mug-hot"></i> Intern</h3>
                    </div>
                    <ul class="list-group list-group-flush mb-3">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></span></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
        </div>
        `
    }
    const teamHtml = []
    team.forEach(teamMember => {
        if (teamMember.getRole() === "Manager"){
            teamHtml.push(generateManager(teamMember))

        }else if (teamMember.getRole() === "Engineer"){
            teamHtml.push(generateEngineer(teamMember))

        }else if (teamMember.getRole() === "Intern"){
            teamHtml.push(generateIntern(teamMember))

        }
    });
    return teamHtml.join("")
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"/>
</head>
<body>
    <header class="p-5 mb-4 text-center border-bottom text-light bg-dark">
        <h1>My Team</h1>
    </header>
    <div class="container">
        <div class="row">
            <div class="row justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
    
</body>
</html>
    `
}