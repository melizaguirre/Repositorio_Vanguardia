let gremios = []; 

const agregarGremio = (req, res) => {
    const { id, nombre, casas, cantidad, status } = req.body;
    gremios.push({ id, nombre, casas, cantidad, status, miembros: [] });
    res.status(201).json({ message: "Gremio agregado correctamente", gremios });
};

const actualizarGremio = (req, res) => {
    const { id } = req.params;
    const gremio = gremios.find(g => g.id == id);
    if (!gremio) return res.status(404).json({ message: "Gremio no encontrado" });

    Object.assign(gremio, req.body);
    res.json({ message: "Gremio actualizado", gremio });
};

const eliminarGremio = (req, res) => {
    gremios = gremios.filter(g => g.id != req.params.id);
    res.json({ message: "Gremio eliminado", gremios });
};

const obtenerGremios = (req, res) => res.json(gremios);

const agregarMiembro = (req, res) => {
    const { id } = req.params;
    const { miembro } = req.body;
    const gremio = gremios.find(g => g.id == id);
    if (!gremio) return res.status(404).json({ message: "Gremio no encontrado" });

    gremio.miembros.push(miembro);
    res.json({ message: "Miembro agregado", gremio });
};
const getAll = (req, res) => {
    try {
      // Simulación de base de datos
      const gremios = [
        { id: 1, nombre: "Gremio Fénix", casas: ["Casa Roja"], cantidad: 20, status: "activo" },
        { id: 2, nombre: "Gremio Dragón", casas: ["Casa Azul"], cantidad: 30, status: "inactivo" }
      ];
  
      gremios.forEach(gremio => console.log(gremio));
      res.status(200).json(gremios);
    } catch (error) {
      console.error("Error al obtener los gremios:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };
  
  
module.exports = { agregarGremio, actualizarGremio, eliminarGremio, obtenerGremios, agregarMiembro, getAll};
