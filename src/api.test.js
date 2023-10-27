const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); Add API application instance
chai.use(chaiHttp);

describe('API Tests', () => {
  it('should retrieve a translation for a valid word', (done) => {
    chai
      .request(app)
      .get('/translations?word=apple&target_language=fr')
      .end((err, res) => {
        chai.expect(res).to.have.status(200);
        chai.expect(res.body).to.have.property('translation');
        done();
      });
  });

  it('should handle invalid word for translation', (done) => {
    chai
      .request(app)
      .get('/translations?word=invalidword&target_language=fr')
      .end((err, res) => {
        chai.expect(res).to.have.status(400);
        done();
      });
  });
});
