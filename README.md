# Sample Smart Action

Key points: 
- OpenAPI is JSDoc-style comments
	- separate file JSON/YAML will be available in future
- required input: `env` and `params`
	- `env` provides access to the main "SmartEnv" and `params` is a parsed parameters or `requestBody` from the incoming request
- should return an object or array
	- string and number probably work too
- *must export function with the same name as the file*