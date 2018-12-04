const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../api');
const models = require('../../api/server/models');

describe('POST /auth/register', () => {
  it('should register a new user', (done) => {
    chai.request(server)
      .post('/auth/register')
      .send({
        username: 'abcdefg',
        password: '123456',
      })
      .end((err, res) => {
        should.not.exist(err);
        res.redirects.lenght.should.eql(0);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.eql('success');
        done();
      });
  });
});
