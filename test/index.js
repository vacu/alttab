const mongoose = require('mongoose');
const User = require('../models/user');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHttp);
describe('Users', () => {
  beforeEach((done) => {
    User.remove({}, (err) => {
      done();
    });
  });

  describe('Register', () => {
    it('it should register an account', (done) => {
      let user = {
        email: 'email@example.com',
        password: 'testpass'
      };
      chai.request(server).put('/api/register').send(user).end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('email');
        res.body.should.have.property('password');
        done();
      });
    });

    it('it shouldn\'t register an account', (done) => {
      let user = {
        email: 'email@example.com',
        password: ''
      };
      chai.request(server).put('/api/register').send(user).end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        done();
      });
    });
  });

  describe('Authenticate', () => {
    it('it should authenticate a user', (done) => {
      let user = {
        email: 'email@example.com',
        password: 'testpass'
      };
      chai.request(server).put('/api/register').send(user).end((err, res) => {
        let user = {
          email: 'email@example.com',
          password: 'testpass'
        };

        chai.request(server).post('/api/authenticate').send(user).end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('email');
          res.body.should.have.property('password');
          done();
        });
      });
    });

    it('it shouldn\'t authenticate a user', (done) => {
      let user = {
        email: 'email@example.com',
        password: 'testpass'
      };
      chai.request(server).put('/api/register').send(user).end((err, res) => {
        let user = {
          email: 'email@example.com',
          password: ''
        };
        chai.request(server).post('/api/authenticate').send(user).end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
      });
    });
  });
});
