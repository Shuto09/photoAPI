'use strict';

// https://pixabay.com/api/
// 上記APIを利用して、検索ワードに該当する画像を表示してみよう。
// id="contents" の要素に追加するフォーマットは以下を参考に。
/*
<div class="card mb-4" style="width: 18rem;">
    <img class="card-img-top" src="{image_url}">
    <div class="card-body">
        <h5 class="card-title">{user}</h5>
        <p class="card-text">{tags}</p>
        <a href="{pageUR}" class="btn btn-primary">Go Page</a>
    </div>
</div>
*/

const url = "https://pixabay.com/api/";
const apiKey = "16477961-f160dbbddca47090d3d22279e";
$('.btn').on('click', function(){

    let word = $('#search_word').val();
    $.ajax({
        url:url,
        data:{
            key:apiKey,
            q:word
        }
    }).done(function(data){
        console.log(data);

        for (let i=0; i<20; i++){
            var hitimg =  data.hits[i].largeImageURL;
            // console.log(hitimg);
            var user = data.hits[i].user;
            var tags = data.hits[i].tags;
            var pageUR = data.hits[i].pageURL;
            var hit = `<div class="card mb-4" style="width: 18rem;"><img class="card-img-top" src="${hitimg}">
            <div class="card-body">
                <h5 class="card-title">user : ${user}</h5>
                <p class="card-text"${tags}</p>
                <a href="${pageUR}" class="btn btn-primary">Go Page</a>
            </div></div>`;
            // console.log(hit);
            document.getElementById('contents').insertAdjacentHTML('beforeend', hit);

        }

    }).fail(function(){})
    return false;
})