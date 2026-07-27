
import * as courseDB from './courseModule.js';

let result;


result = await courseDB.lookupByCourseId("^CS 20");
console.log(JSON.stringify(result, null, 2));

result = await courseDB.lookupByCourseId("5.4$");
console.log(JSON.stringify(result, null, 2));

result = await courseDB.lookupByCourseName("^Soft");
console.log(JSON.stringify(result, null, 2));

result = await courseDB.lookupByCoordinator('kalathur');
console.log(JSON.stringify(result, null, 2));

result = await courseDB.getRandomCourse();
console.log(JSON.stringify(result, null, 2));

result = await courseDB.getCourseDescription('632');
console.log(result);

// Include other test cases
console.log(JSON.stringify(
    await courseDB.lookupByCourseId("^CS 6"), null, 2));

console.log(JSON.stringify(
    await courseDB.lookupByCourseName("Data"), null, 2));

console.log(JSON.stringify(
    await courseDB.lookupByCoordinator("epinsky"), null, 2));

console.log(JSON.stringify(
    await courseDB.getRandomCourse(), null, 2));

console.log(JSON.stringify(
    await courseDB.getCourseDescription("602"), null, 2));

await courseDB.connection.disconnect();
