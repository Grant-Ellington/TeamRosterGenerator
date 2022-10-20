const newEngineer = require('../index')


const createEngineerCard = (newEngineer) => {
    
    const engineerCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${newEngineer.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <p class="card-text">${newEngineer.id}</p>
      <a href="mailto:${newEngineer.email}">${newEngineer.email}</a>
      <a href="https://github.com/${newEngineer.github}" class="card-text">${newEngineer.github}</a>
    </div>`
    return engineerCard
};

module.exports = createEngineerCard;