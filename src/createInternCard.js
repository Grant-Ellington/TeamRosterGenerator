const createInternCard = (newIntern) => {
    internCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${newIntern.name}</h5><br>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6><br>
      <p class="card-text">id: ${newIntern.id}</p><br>
      <a href="mailto:${newIntern.email}">Email: ${newIntern.email}</a><br>
      <p class="card-text">School: ${newIntern.school}</p>
    </div>`
    return internCard
};

module.exports = createInternCard;