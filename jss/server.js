const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// MongoDB bağlantısı
mongoose.connect('mongodb+srv://rahibe:portolife@cluster0.yi6a8.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

// Bağlantı hatası kontrolü
db.on('error', console.error.bind(console, 'MongoDB bağlantı hatası:'));

// Bağlantı başarılı mesajı
db.once('open', function() {
  console.log("MongoDB veritabanına başarıyla bağlandı!");
});

// Veritabanı modeli
const Entry = mongoose.model('Entry', {
  name: String,
  status: String,
  address: String,
  date: String
});

// Express uygulaması oluştur
const app = express();

// Middleware'ler
app.use(cors());
app.use(bodyParser.json());

// Veri ekleme endpoint'i
app.post('/api/entries', async (req, res) => {
  const entry = new Entry({
    name: req.body.name,
    status: req.body.status,
    address: req.body.address,
    date: req.body.date
  });

  try {
    await entry.save();
    res.send({ message: "Veri başarıyla eklendi." });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Veri eklenirken bir hata oluştu." });
  }
});

// Veri silme endpoint'i
app.delete('/api/entries/:id', async (req, res) => {
  const id = req.params.id;

  try {
    await Entry.findByIdAndDelete(id);
    res.send({ message: "Veri başarıyla silindi." });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Veri silinirken bir hata oluştu." });
  }
});

// Sunucuyu dinle
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
