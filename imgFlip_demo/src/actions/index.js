import {password, username} from "./secrets";

export const RECEIVE_MEMES = "RECEIVE_MEMES";
export const NEW_MEMES = "NEW_MEMES";

const receiveMemes = (json) => {
    const {memes} = json.data;

    return {
        type: RECEIVE_MEMES,
        memes
    }
};

const fetchMemesJson = () => {
    return fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
};

export const fetchMemes = () => {
    return dispatch => {
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))
    }
};

const newMemes = (meme) => {
    return {
        type: NEW_MEMES,
        meme
    }
};

const postMemeJson = (param) => {
    param["username"] = username;
    param["password"] = password;

    const bodyParms = Object.keys(param).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
    }).join("&");

    console.log("bodyParams", bodyParms);

    return fetch("https://api.imgflip.com/caption_image", {
        method: "post",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded;charset=utf-8'
        },
        body: bodyParms,
    }).then (response => response.json());
};

export const createMeme = (new_meme_object) => {
    return dispatch => {
        return postMemeJson(new_meme_object)
            .then(new_meme => dispatch(newMemes(new_meme)))
    }
};

