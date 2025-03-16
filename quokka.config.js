export default {
	files: [
		"src/**/*.js", // Or the specific files you want Quokka to process
		"src/**/*.ts", // If you have TypeScript files
		"*.js", // Include files in the root directory
		"*.ts",
	],
	esm: true, // Enable ES module support
	// or
	// module: {
	//   type: 'es6'
	// },
	// Set the working directory for Quokka to the root of your project
	// This might help Quokka resolve paths better
	project: {
		directory:
			"C:/Users/dtull/Desktop/Programming/Education/Coursework/Odin Project/Dynamic User Interfaces/dynamic-user-interfaces",
	},
	//Integrate webpack
	webpack: {
		config: "./webpack.common.js", // Path to your webpack config
	},
	//   babel: {
	//     presets: ['@babel/preset-env'], //If you need babel
	//   },
	//   compilers: {
	//     '**/*.ts?(x)': '@babel/register', // If you are using typescript
    //   },
    
    

    env: {
        type: 'node',
        params: {
            runner: '--require jsdom/register',
        },
    },
  
};
