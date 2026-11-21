import axios, {isCancel, AxiosError} from "axios";

const searchSection_form = document.querySelector("#searchSection_form");
const searchSection_form_input = document.querySelector("#searchSection_form_input");
const nextPage_btn = document.querySelector("#nextPage_btn");
export const contentField_list = document.querySelector("#contentField_list")

export const serverURL = `http://localhost:3000`

let page = 1;
async function getPosts() {
    let params = new URLSearchParams({
    _per_page: 12,
    _page: page,
});

    const {data} = await axios.get(`${serverURL}/posts?${params}`);
    renderPosts(data.data)
}

getPosts()

function renderPosts(data) {
    const markup = data.map(({id,webformatURL,likes,favorites,user}) => {
        return `<li class="contentField_list_item" id="${id}">
          <img id="${id} "src="${webformatURL}" alt="Placeholder" class="contentField_list_item_img">


          <div class="contentField_list_item_panel">
            <div class="contentField_list_item_panel_likes">
              <p class="contentField_list_item_panel_likes_count">Likes:${likes}</p>
              <button class="contentField_list_item_panel_likes_btn"></button>
            </div>

            <div class="contentField_list_item_panel_fav">
              <p class="contentField_list_item_panel_fav_count">Favotites:${favorites}</p>
              <button class="contentField_list_item_panel_fav_btn"></button>
            </div>
          </div>


          <h4 class="contentField_list_item_author">by: <span class="contentField_list_item_author_name">${user}</span></h4>
        </li>`
    }).join(" ")

    contentField_list.innerHTML = markup;
}

async function research(tag_name) {
  const {data} = await axios.get(`${serverURL}/posts?tags:contains=${tag_name}`);
  console.log(data);
    renderPosts(data)
}

searchSection_form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(searchSection_form);
  const inputData = formData.get("searchData")
  console.log(inputData);
  research(inputData)
});

nextPage_btn.addEventListener("click", (e) => {
  page+=1
  getPosts()
})