import axios from "axios";

const instance = axios.create({
	baseURL: "https://coding-challenge-api.aerolab.co/",
});

instance.defaults.headers.common["Authorization"] =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk";

export default instance;
