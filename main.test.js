const supertest = require('supertest');
const request = supertest('http://localhost:3000'); //test on localhost with port 3000
jest.setTimeout(30000);

//sample data  
const sample = {
	username : "user1",					//to access other sample data = change number
	password : "passwordfromuser1",
	phone : "011-111111111",
	role : "user",
}

describe('Express Route Test', function () {
	////////////////////////////////////////////////////////////////////////
	//Testing
	// it('should return Welcome to OUR page !', async () => {
	// 	return request.get('/test')
	// 		.expect(200)
	// 		.expect('Content-Type', /text/)
	// 		.then(res => {
	// 			expect(res.text).toBe('testing... you are good for now');
	// 		});
	// })
	
	///////////////////////////////////////////////////////////////////////
	// post - read 
 
	// Expected to success
	it('User login - success', async () => {
		return request
			.post('/user/login')
			.send(sample) //req.body
			.expect('Content-Type', /json/)
			.expect(200).then(response => {
				expect(response.body).toEqual(
					expect.objectContaining({ // Detail can be retrieved
						_id : expect.any(String),
						username: expect.any(String),
						phone: expect.any(String),
						role: expect.any(String),
					})
				)
			});
	});

	// // Expected to fail
	// it('User login - fail', async () => {
	// 	return request
	// 		.post('/user/login')
	// 		.send(sample)
	// 		.expect(400)
	// 		.expect('Content-Type', /text/)
	// 		.then(res => {
	// 			expect(res.text).toBe('login fail');
	// 		});
	// })

	///////////////////////////////////////////////////////////////////////
	// post - create

	// // Expected to success
	// it('User Registration - success', async () => {
	// 	return request
	// 		.post('/user/register')
	// 		.send(sample) //req.body for register
	// 		.expect(200)
	// 		.expect('Content-Type', /text/)
	// 		.then(res => {
	// 			expect(res.text).toBe("creation success");
	// 		});
	// });

	// // Expected to fail
	// it('User Registration - fail', async () => {
	// 	return request
	// 		.post('/user/register')
	// 		.send(sample) //req.body for register
	// 		.expect(400)
	// 		.expect('Content-Type', /text/)
	// 		.then(res => {
	// 			expect(res.text).toBe("creation fail");
	// 		});
	// });

	///////////////////////////////////////////////////////////////////////
	// delete

 	// // Expected to success
	// it('Delete username - success', async () => {
	// 	return request
	// 		.delete('/user/delete')
	// 		.send(sample) //req.body for register
	// 		.expect(200)
	// 		.expect('Content-Type', /text/)
	// 		.then(res => {
	// 			expect(res.text).toBe('deletion success');
	// 		});
	// });

	// // Expected to fail
	// it('Delete username - fail', async () => {
	// 	return request
	// 		.delete('/user/delete')
	// 		.send(sample) //req.body for register
	// 		.expect(400)
	// 		.expect('Content-Type', /text/)
	// 		.then(res => {
	// 			expect(res.text).toBe('deletion fail');
	// 		});
	// });

	///////////////////////////////////////////////////////////////////////
	// patch - update

	// // Expected to success
	// it('Update info - success', async () => {
	// 	return request
	// 		.patch('/user/update')
	// 		.send(sample) //req.body for register
	// 		.expect(200)
	// 		.expect('Content-Type', /text/)
	// 		.then(res => {
	// 			expect(res.text).toBe('update success');
	// 		});
	// });

	// // Expected to fail
	// it('Update info - fail', async () => {
	// 	return request
	// 		.patch('/user/update')
	// 		.send(sample) //req.body for register
	// 		.expect(400)
	// 		.expect('Content-Type', /text/)
	// 		.then(res => {
	// 			expect(res.text).toBe('update fail');
	// 		});
	// });
});
