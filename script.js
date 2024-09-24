const contentArea = document.getElementById('content-area');
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

const content = {
  education: `
    <div class="section">
      <h2 >Education</h2>
      <p ><strong class="aqua-text">Bachelor of Engineering in Computer Science</strong><br>PES University, Bangalore (2022 - Current), GPA: 8.07</p>
      <p ><strong class="aqua-text">Intermediate and Matriculation</strong><br>Presidency College, Sira (2019 - 2021)</p>
    </div>
  `,
  projects: `
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Travel Mate</h5>
            <p class="card-text">Tech Stack: JavaScript, Node.js, Express, EJS, Gemini-API</p>
            <p class="card-text">Platform for travel recommendations and planning with integrated AI.</p>
            <a href="https://github.com/chethan202004/travel" class="btn btn-primary" target="_blank">Code Base</a>
            <a href="https://travelmate-chethan-chethans-projects.vercel.app/" class="btn btn-secondary" target="_blank">Live Demo</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Fit Focus</h5>
            <p class="card-text">Tech Stack: Node.js, Express.js, EJS, MongoDB</p>
            <p class="card-text">Application focused on fitness with integrated fit bot.</p>
            <a href="https://github.com/chethanv-20/Fit_Focus" class="btn btn-primary" target="_blank">Code Base</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Toxicity Analysis</h5>
            <p class="card-text">Tech Stack: BERT, Python, Streamlit, RoBERTa</p>
            <p class="card-text">Toxicity detection in social media with BERT model and context analysis.</p>
            <a href="https://github.com/chethanv-20/toxicity_detection" class="btn btn-primary" target="_blank">Code Base</a>
          </div>
        </div>
      </div>
    </div>
  `,
  skills: `
    <div class="section">
      <h2>Skills</h2>
      <p ><strong class="aqua-text">Languages</strong>: C, C++, Python</p>
      <p ><strong class="aqua-text">Web Development</strong>: HTML, CSS, JavaScript, Node.js, Express.js, EJS</p>
      <p ><strong class="aqua-text">Backend</strong>: SQL, MongoDB</p>
      <p ><strong class="aqua-text">Technologies</strong>: GitHub, Bootstrap, Vercel, Streamlit, BERT, RoBERTa</p>
    </div>
  `,
  blog: `
    <div class="section">
      <h2>Blog</h2>
      <p >Simplifying the OSI Model for Beginners <a href="https://chethan20.hashnode.dev/the-osi-model">link</a></p>
    </div>
  `,
  contact: `
    <div class="section">
      <h2 >Contact</h2>
      <p >You can reach me at <strong><a href="mailto:chethanrocking2004@gmail.com">MAIL</a></strong></p>
      <p >Connect me on my linkdedin<strong><a href="https://www.linkedin.com/in/chethanv20/">Profile</a></strong></p>

    </div>
  `
};

function showContent(section) {
  contentArea.innerHTML = content[section];
}

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  themeLabel.innerText = themeToggle.checked ? 'Dark Mode' : 'Light Mode';
});