require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete('5d10b155275c971c5fe2896a').then((task) => {
// 	console.log(task);
// 	return Task.countDocuments({ completed: false });
// }).then((result) => {
// 	console.log(result);
// }).catch((e) => {
// 	console.log(e);
// });

const deleteTaskAndCount = async (id) => {
	const task = await Task.findByIdAndDelete(id);
	const count = await Task.countDocuments({ completed: false });
	return count;
};

deleteTaskAndCount('5d108164b66e08130d47f6d1').then((count) => {
	console.log(count);
}).catch((e) => {
	console.log(e);
})