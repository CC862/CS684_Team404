const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');

afterAll(async () => {
  await pool.end();
});

describe('Signup AP', () => {
  test('POST /signup with valid user data should create a new use', async () => {
    const userData = {
      username: 'JestUser4',//change for new user 
      password: 'Testpass123',
      confirmPassword: 'Testpass123',
      email: 'JestUser4@example.com'// change for new user
    };
    const response = await request(app)
      .get('/')
      //.send(userData)
      .expect(200)  // expect redirection
      .redirects(1);  // follow redirection
    expect(response.text).toContain('general');
  });
 
});