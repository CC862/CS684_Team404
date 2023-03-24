const request = require('supertest');
const { app, server } = require('../app');
const pool = require('../db/db');

afterAll(async () => {
  await pool.end();
});

describe('Dashboard Check', () => {
  test('Checks if plain dashboard has general in it.', async () => {
    
    const response = await request(app)
      .get('/')
    
    expect(response.text).toContain('general');
  });
 
});

describe('signin router', () => {
  test('should respond with signin page on GET /signin', async () => {
    const res = await request(app).get('/signin');
    expect(res.status).toEqual(200);
    expect(res.text).toContain('Log in');
  });

  // sign in with user in database
  test('should redirect to dashboard on successful login', async () => {
    const res = await request(app)
      .post('/signin')
      .send({ emailOrUsername: 'jay123456', password: '123456Jay' });
    expect(res.status).toEqual(302);
    expect(res.text).toContain('Found. Redirecting to /dashboard?loginSuccess=true');
    
    
  });

  test('Checks logged in dashboard checks for the technolgy preffrence.', async () => {
    
    const response = await request(app)
      get('/')
    
    expect(response.text).toContain('technology');
  });
 
});