const request = require('supertest');
const bodyParser = require('body-parser');
const app = require('../app');
const db = require("../app/models");

beforeEach(async () => {
  
  await db.mongoose
  .connect(db.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
});
afterEach(async () => {
  await db.mongoose.connection.close();
});

describe('Test ', () => {
    it('It should response the GET method', async () => {
    
    const response = await request(app).get('/api/users/');
    expect(response.statusCode).toBe(200);
  });
});

describe("user create ", () => {
  it("should create a user", async () => {
    const res = await request(app).post("/api/users").send({
      nome: "Martin",
      cognome: "p"
    });
    
    expect(res.body.nome).toBe("Martin");
  });
});
describe("user get and course create with that user and delete of that course", () => {
  let martin;
  it("should create a user", async () => {
    const res = await request(app).get("/api/users").query({nome: 'Martin'});
    martin= res.body[0];
    expect(res.statusCode).toBe(200);
    expect(martin.nome).toBe("Martin");
  });
  it("should create a course", async () => {
    const res = await request(app).post("/api/courses/").send({
      nome: 'test1',
      numero_cfu: 12,
      valutazione_corso: 6,
      attivo: true,
      utente_id: martin.id
    });
    expect(res.body.nome).toBe("test1");
    const del = await request(app).delete("/api/courses/"+res.body.id);
    expect(res.statusCode).toBe(200);

  });
});