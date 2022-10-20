const createInternCard = (newIntern) => {
    internCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${newIntern.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <p class="card-text">${newIntern.id}</p>
      <a href="mailto:${newIntern.email}">${newIntern.email}</a>
      <a href="https://github.com/" class="card-text">${newIntern.school}</a>
    </div>`
    return internCard
};

module.exports = createInternCard;