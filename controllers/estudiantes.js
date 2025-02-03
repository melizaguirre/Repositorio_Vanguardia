const getAllEstudiantes = async (request, response,next) => {
    response.status(200).json({
        'status': 200,
        "message": "Hello from server"
    })
}
module.exports = {getAllEstudiantes}