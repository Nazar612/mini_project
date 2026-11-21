import axios, {isCancel, AxiosError} from "axios";
import { contentField_list } from "./main"
import { serverURL } from "./main"
const modal = document.querySelector("#modal");
const close = document.querySelector("#close")
const placeForImg = document.querySelector("#placeForImg")

contentField_list.addEventListener("click", (e) => {
    if(!e.target.classList.contains("contentField_list_item_img")) {
        return
    };

    // findImg(e.target.id);
    renderImg(e.target.src)
});
close.addEventListener("click", (e) => {
    modal.style.display = "none"
})

function renderImg(src) {
    modal.style.display = "flex"

    const img = placeForImg.innerHTML = `<img src="${src}" alt="placeholder" class="modal_img">` 
    console.log(img);
}

