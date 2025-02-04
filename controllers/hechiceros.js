let hechiceros = [];

const agregarHechicero = (req, res) => {
    const { id, nombre, direccion, magia, nivel, status } = req.body;

    hechiceros.push({ id, nombre, direccion, magia, nivel, status });
    res.status(201).json({ message: "Hechicero agregado correctamente", hechiceros });
};

const actualizarHechicero = (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, magia, nivel, status } = req.body;

    let hechicero = hechiceros.find(h => h.id === id);
    if (!hechicero) {
        return res.status(404).json({ message: "Hechicero no encontrado" });
    }

    hechicero.nombre = nombre || hechicero.nombre;
    hechicero.direccion = direccion || hechicero.direccion;
    hechicero.magia = magia || hechicero.magia;
    hechicero.nivel = nivel || hechicero.nivel;
    hechicero.status = status !== undefined ? status : hechicero.status;

    res.status(200).json({ message: "Hechicero actualizado", hechicero });
};

const eliminarHechicero = (req, res) => {
    const { id } = req.params;
    hechiceros = hechiceros.filter(h => h.id !== id);
    res.status(200).json({ message: "Hechicero eliminado" });
};

const buscarTodosHechiceros = (req, res) => {
    res.status(200).json(hechiceros);
};

const buscarHechiceroPorId = (req, res) => {
    const { id } = req.params;
    const hechicero = hechiceros.find(h => h.id === id);
    if (!hechicero) {
        return res.status(404).json({ message: "Hechicero no encontrado" });
    }
    res.status(200).json(hechicero);
};

module.exports = { 
    agregarHechicero, 
    actualizarHechicero, 
    eliminarHechicero, 
    buscarTodosHechiceros, 
    buscarHechiceroPorId 
};
