function fetchUser(){
    const box=document.querySelector('.box');
    const user=document.getElementById('search').value;
    if(user.trim()==''){
        box.innerHTML=`<p>Please Enter A Username!</p>`
    }
    else{
    fetch(`https://api.github.com/users/${user}`)
    .then((res)=>{
        if (res.status==404){
            box.innerHTML=`<p>User Not Found!</p>`;
            throw new Error('User not found!');
        }
        else{
        return res.json();
    }
    })
    .then((data)=>{
           box.innerHTML =`
                <div class="col-md-6 container">
                <div class="mt-4 card" style="border:none;" >
                    <img src="${data.avatar_url}" class="card-img-top avimg" alt="...">
                    <div class="card-body">
                        
                        <h5 class="card-title">${data.login}</h5>
                        <p class="card-text">${data.bio ? data.bio : 'No bio available'}</p>
                        <p class="card-text followers"><i class="fa-solid fa-person"></i> Followers: ${data.followers}<br><i class="fa-solid fa-person"></i> Following: ${data.following}</p>
                        <p class="card-text"><i class="fa-solid fa-location"></i>${data.location ? data.location : 'Unknown'}</p>
                        <a href="${data.html_url}" class="w-100 btn btn-primary">Follow</a>
                    </div>
                </div></div>`
        
    })
    .catch((error)=>{
        box.innerHTML = `<div class="col-md-3">${error}</div>`
    }

    )
}
}