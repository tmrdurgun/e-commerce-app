/* eslint-disable no-undef */
const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../../../../app');

const productModel = require('../../../../models/products');

const request = supertest(app);

const productJson = require('../../../../__mocks__/data/products.json');

const productData = JSON.parse(JSON.stringify(productJson.data));

describe('PRODUCTS', () => {
  beforeAll(async () => {
    try {
      connection = await mongoose.connect(process.env.DB_URL_TEST, {
        useNewUrlParser: true,
        autoReconnect: true,
      });

      await productModel.deleteMany({});
      await productModel.insertMany(productData);
      
    } catch (error) {
      console.log(error.message);
    }
  });

  afterAll(async () => {
    await productModel.deleteMany({});
    await mongoose.connection.close();
  });

  it('should retrieve products', async (done) => { 
      const response = await request
        .get('/products');
  
      expect(response.status).toBe(200);
      expect(response.body.data.length > 0).toBeTruthy();
      done();
  });

});
