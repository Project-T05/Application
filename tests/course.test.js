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

describe('get all user ', () => {
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
  let test1;
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
    test1=res.body;
    expect(test1.nome).toBe("test1");
  });

  it("should create favourite", async () => {
    const res = await request(app).post("/api/favourite_courses").send({
      utente_id: martin.id,
      corso_id: test1.id
    });
    expect(res.statusCode).toBe(200);
  });

  it("should delete the favourite", async () => {
    const res = await request(app).delete("/api/favourite_courses/"+martin.id+"/"+test1.id);
    expect(res.statusCode).toBe(200);
  });


  it("should delete the course", async () => {
    const res = await request(app).delete("/api/courses/"+test1.id);
    expect(res.statusCode).toBe(200);

  });
});