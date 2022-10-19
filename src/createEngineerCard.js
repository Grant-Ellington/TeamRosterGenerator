const createEngineerCard = (engineerData) => {
    
    const engineerCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineerData.engineerName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <p class="card-text">${engineerData.engineerId}</p>
      <a href="mailto:${engineerData.engineerEmail}">${engineerData.engineerEmail}</a>
      <a href="https://github.com/${engineerData.engineerGit}" class="card-text">${engineerData.engineerGit}</a>
    </div>`
    cards.push(engineerCard);
    return engineerCard
};

module.exports = createEngineerCard;