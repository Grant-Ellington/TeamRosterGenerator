createManagerCard = (managerData) => {
    managerCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${managerData.managerName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p class="card-text">${managerData.managerId}</p>
      <a href=""mailto:${managerData.managerEmail} = Feedback&body = Message">${managerData.managerEmail}</a>
      <a href="#" class="card-text">${managerData.managerOfficeNum}</a>
    </div>`
    cards.push(managerCard);
    return managerCard
};

module.exports = createManagerCard;