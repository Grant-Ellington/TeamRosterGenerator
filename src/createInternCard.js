const createInternCard = (internData) => {
    internCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${internData.internName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <p class="card-text">${internData.internId}</p>
      <a href="mailto:${internData.internEmail}">${internData.internEmail}</a>
      <a href="https://github.com/${internData.internGit}" class="card-text">${internData.internGit}</a>
    </div>`
    cards.push(internCard);
    return internCard
};

module.exports = createInternCard;