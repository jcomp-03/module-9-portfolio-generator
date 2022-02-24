// If the user elected to give information "about" themselves, generate HTML for it and display it.
// It takes the variable 'about' initalized further down and defined from destructuring 
// the array templateData and passes it as an argument into the function generateAbout. If it is not
// an empty string i.e. the user elected to give some information, return the template literal 
// string shown below.
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${aboutText}</p>
    </section>
  `;
};

// This function will handle generating the project HTML data. It will run immediately after
// running the function generateAbout in the template literal further down below. It takes as a
// a parameter the array 'projects' which is populated after destructuring the array templateData
const generateProjects = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectsArr
        .filter(({ feature }) => feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}

      ${projectsArr
        .filter(({ feature }) => !feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
  `;
    
  // ************* OLD CODE COMMENTED OUT ************* //
  // get an array of just featured projects
  /* const featuredProjects = projectsArr.filter(project => {
    if(project.feature){
      return true;
    } else{
      return false;
    }
  }); */

  // get an array of all non-featured projects
/*   const nonFeaturedProjects = projectsArr.filter(project => {
    if(!project.feature){
      return true;
    } else{
      return false;
    }
  }); */

  // for featured projects, return template literal below but notice the
  // width is col-12, i.e. it spans the full width of its parent container
/*   const featuredProjectHtmlArr = featuredProjects.map(({ name, description, languages, link }) => {
    return `
      <div class="col-12 mb-2 bg-dark text-light p-3 flex-column">
        <h3 class="portfolio-item-title text-light">${name}</h3>
        <h5 class="portfolio-languages">
          Built With:
          ${languages.join(', ')}
        </h5>
        <p>${description}</p>
        <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
      </div>
    `;
  }); */

  // for non-featured projects, return template literal below noticing that for
  // for screen sizes md and higher, the column width is 6/12, i.e. col-md-6
/*   const nonFeaturedProjectHtmlArr = nonFeaturedProjects.map(
    ({ name, description, languages, link }) => {
      return `
        <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
          <h3 class="portfolio-item-title text-light">${name}</h3>
          <h5 class="portfolio-languages">
            Built With:
            ${languages.join(', ')}
          </h5>
          <p>${description}</p>
          <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
        </div>
      `;
    }
  );
  
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${featuredProjectHtmlArr.join('')}
      ${nonFeaturedProjectHtmlArr.join('')}
      </div>
    </section>
  `; */

  // ************* OLDER CODE COMMENTED OUT ************* //
  // use .map method on projectsArr to create a new array projectHtmlArr
  // and then take that new array and interpolate it into the returning
  // project <section> element template literal below.
  /* const projectHtmlArr = projectsArr.map(({name, description, languages, link}) => {
    return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
    }); */
  // once the projectHtmlArr is populated, use join method to turn it into
  // a combined string of HTML before returning it.
  /* return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectHtmlArr.join('')}
      </div>
    </section>
  `; */
};

module.exports = templateData => {
  // destructure page data by section
  const { projects, about, ...header } = templateData;

  // return this template literal
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
            header.github
          }">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateAbout(about)}
      ${generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};
