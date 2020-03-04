const faker = require('faker');
const axios = require('axios');
const fakerLength = 10;
const data = [];
for (let i = 0; i < fakerLength; i++) {
  const obj = {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraphs(10),
    author: 1,
    createdAt: new Date(),
  };
  data.push(obj);
}
data.map(async d => {
  try {
    await axios({
      method: 'post',
      url: 'http://softman.ml:3000/posts/',
      data: d,
      headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    console.error(JSON.stringify(e.response.data,null,2));
  }
});
