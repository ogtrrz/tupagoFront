const Redis = require("ioredis");
const redis = new Redis(process.env.REDIS_URL);

function flattenArray(arr) {
	return arr.reduce((flat, item) => {
		if (Array.isArray(item)) {
			// If it's an array, recursively flatten it and concatenate
			flat.push(item[1]);
		}
		return flat;
	}, []);
}

// export function openConnection() {
//   // Your code to execute every 1 minute goes here
//   const response = searchSkills('java')
//   console.log('Executing code every 5 minute...', response);
// }

// // Call the function immediately when your script starts
// openConnection();

// // Set up an interval to call the function every 1 minute (60,000 milliseconds)
// const intervalId = setInterval(openConnection, 5*60000);

// To stop the interval when needed, you can use clearInterval like this:
// clearInterval(intervalId);

export async function createContact(data) {
	const channel = "stream:profile:contact";
	const id = await redis.xadd(channel, "*", JSON.stringify(data), "message");
	return id;
}

export async function searchSkills(data) {
	const result = await redis.call(
		"ft.search",
		"ixprofile1",
		`@skill|profile|description: ${data}`,
		"RETURN",
		1,
		"$.skill"
	);
	return flattenArray(result);
}
