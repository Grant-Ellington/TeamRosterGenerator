// const cards = require('../index')
const newManager = require('../index')

createManagerCard = (newManager) => {
    // console.log(newManager.name, newManager.email)
     managerCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${newManager.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p class="card-text">${newManager.id}</p>
      <a href=""mailto:${newManager.email} = Feedback&body = Message">${newManager.email}</a>
      <a href="#" class="card-text">${newManager.officeNumber}</a>
    </div>`

    // console.log(managerCard)
    return managerCard
};
module.exports = createManagerCard;