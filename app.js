const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://cluster0.t8a2t.mongodb.net/';

// Conectar a MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var estudiantesRouter = require('./routes/estudiantes');
var gremiosRouter = require('./routes/gremios');
var hechicerosRouter = require('./routes/hechiceros');

var app = express();

// Configuración del motor de vistas (opcional si usas Jade/Pug)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas del sistema
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/estudiantes', estudiantesRouter);
app.use('/api/gremios', gremiosRouter);
app.use('/api/hechiceros', hechicerosRouter);

// Manejador de errores 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejador global de errores
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// Iniciar servidor en el puerto 3000
app.listen(3000, () => console.log("🚀 Servidor corriendo en http://localhost:3000"));

module.exports = app;
