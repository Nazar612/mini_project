import axios, {isCancel, AxiosError} from "axios";
async function getPosts() {
    const {data} = await axios.get("http://localhost:3000/posts");
    console.log(data);
}

getPosts()