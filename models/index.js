const User = require('./User');
const Department = require('./Department');


Department.hasMany(User,{
    foreignKey:'department_id',
});

User.belongsTo(Department,{
    foreignKey: 'department_id',
    onDelete:'SET NULL'
});




module.exports={User, Department};