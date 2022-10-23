const newEngineer = require('../index')


const createEngineerCard = (newEngineer) => {
    
    const engineerCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${newEngineer.name}</h5><br>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6><br>
      <p class="card-text">id: ${newEngineer.id}</p><br>
      <a href="mailto:${newEngineer.email}">Email: ${newEngineer.email}</a><br>
      <a href="https://github.com/${newEngineer.github}" class="card-text">Git Hub: ${newEngineer.github}</a>
    </div>`
    return engineerCard
};

module.exports = createEngineerCard;