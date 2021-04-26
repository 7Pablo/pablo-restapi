//Leer todos los modelos creados (users, .. posts, product)
const models = require("../database/models");

//Crear operacion POST para un nuevo usuario
const createUser = async (req, res) => {
    try{
        //Generar una sentencia SQL tipo insert into ...
        const user = await models.User.create(req.body);

        //Codigo 201 = insertado OK
        return res.status(201).json({
            user
        });
    } catch (error) {
        //Codigo 500 error del lado del server
        return res.status(500).json({ error: error.message });
    }
};

//Metodo GET (todos) para usuarios
const getAllUsers = async (req, res) => {
    console.log('getting users');
    try{
        const users = await models.User.findAll({
            include: []
        });
        return res.status(200).json({ 
            users 
        });
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
};

module.exports = {
    createUser,
    getAllUsers
};