let cardContainer = document.getElementById('card-container');

const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    console.log(data);
    const posts = data.data.tools;
    // console.log(posts);

    posts.forEach((post) => {
        console.log(post);
        const childDiv = document.createElement('div');
        childDiv.classList.add('card', 'bg-base-100', 'shadow-xl', 'border', 'border-[#1111111A]');
        childDiv.innerHTML = `
        <figure class="px-4 pt-4">
                        <img src="${post.image}" alt="Unknown"
                            class="rounded-xl" />
                    </figure>
                    <div class="card-body text-start font-work">
                        <h2 class="card-title text-2xl font-semibold text-[#111111]">Features</h2>
                        <div class="text-sm font-normal text-[#585858]">
                            <p>1. <span>${post.features[0]}</span></p>
                            <p>2. <span>${post.features[1]}</span></p>
                            <p>3. <span>${post.features[2]}</span></p>
                        </div>
                        <hr class="w-full my-4 border border-[#11111133] ">
                        <div class="flex justify-between items-center">
                            <div class="text-start font-work">
                                <h3 class="text-2xl font-semibold text-[#111111]">${post.name}</h3>
                                <p class="inline-flex items-center gap-2 text-sm font-medium text-[#585858]"><img
                                        src="images/calendar-icon.svg" alt=""><span>${post.published_in}</span></p>
                            </div>
                            <button class="bg-[#FEF7F7] p-3 border border-[#FEF7F7] rounded-full"><img
                                    src="images/arrow-sign.svg" alt=""></button>
                        </div>
                    </div>
        `;

        cardContainer.appendChild(childDiv);
    })
}




loadData();