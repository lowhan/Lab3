const MongoClient = require("mongodb").MongoClient;
const User = require("./user");

//sample data  
const sample = {
	username : "user1",					//to access other sample data = change number
	password : "passwordfromuser1",
	phone : "011-1111111",
	role : "user",
}

describe("User Account Management", () => {
	let client;
	beforeAll(async () => {
		client = await MongoClient.connect(
			"mongodb+srv://m001-student:m001-mongodb-basics@Sandbox.vqzcw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{ useNewUrlParser: true },
		);
		User.injectDB(client);
	})
	afterAll(async () => {
		await client.close();
	})

	///////////////////////////////////////////////////////////////
					// create - registration //

	// test("User Registration - success - new username", async () => {
	// 	const res = await User.register(sample);
	// 	expect(res).toBe("creation success");
	// })

	// test("User Registration - fail - duplicate username", async () => {
	// 	const res = await User.register(sample);
	// 	expect(res).toBe("creation fail");
	// })

	///////////////////////////////////////////////////////////////
					// read - login & return data  //

	// test("User login - invalid username", async () => {
	// 	const res = await User.login(sample);
	// 	expect(res).toBe("invalid username");
	// })

	// test("User login - invalid password", async () => {
	// 	const res = await User.login(sample);
	// 	expect(res).toBe("invalid password");
	// })

	test("User login - success", async () => {
		const res = await User.login(sample);
		expect(res.username).toBe(sample.username);
		expect(res.password).toEqual(expect.any(String)); //it already encrypt so... test can't expect it
	})
	
	///////////////////////////////////////////////////////////////
					// delete - match & delete //

	// test("Delete username - success", async () => {
	// 	const res = await User.delete(sample);
	// 	expect(res).toBe("deletion success");
	// })

	// test("Delete username - fail", async () => {
	// 	const res = await User.delete(sample);
	// 	try 
	// 	{
	// 		expect(res).toBe("deletion fail");     //wrong password
	// 	}
	// 	catch
	// 	{
	// 		expect(res).toBe("invalid username");  //no user found
	// 	}
	// })

	///////////////////////////////////////////////////////////////
					// update - match & update //

	// test("Update info - success", async () => {
	// 	const res = await User.update(sample);
	// 	expect(res).toBe("update success");
	// })

	// test("Update info - fail", async () => {
	// 	const res = await User.update(sample);
	// 	try 
	// 	{
	// 		expect(res).toBe("update fail");     //wrong password
	// 	}
	// 	catch
	// 	{
	// 		expect(res).toBe("invalid username");  //no user found
	// 	}
	// })

	///////////////////////////////////////////////////////////////
});