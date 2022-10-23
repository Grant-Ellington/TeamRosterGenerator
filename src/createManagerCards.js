// const cards = require('../index')
const newManager = require('../index')

createManagerCard = (newManager) => {
    // console.log(newManager.name, newManager.email)
     managerCard = `       
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${newManager.name}</h5><br>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6><br>
      <p class="card-text">id: ${newManager.id}</p><br>
      <a href=""mailto:${newManager.email} = Feedback&body = Message">Email: ${newManager.email}</a><br>
      <p class="card-text">Office Number: ${newManager.officeNumber}</p>
    </div>`

    // console.log(managerCard)
    return managerCard
};
module.exports = createManagerCard;