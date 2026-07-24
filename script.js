console.log("JS berhasil kebaca");

const container = document.getElementById("cards");
const cards = document.querySelectorAll(".card");

const baseRotation = [-8, 0, 7, 0];

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

// Floating random
cards.forEach((card,index)=>{

    gsap.to(card,{

        y:gsap.utils.random(-15,15),

        duration:gsap.utils.random(2.5,4),

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

});
// Floating random

// Mouse
container.addEventListener("mousemove",(e)=>{

    const rect = container.getBoundingClientRect();

    targetX = e.clientX - rect.left - rect.width/2;

    targetY = e.clientY - rect.top - rect.height/2;

});
// Mouse


// Lerp
gsap.ticker.add(()=>{

    currentX += (targetX-currentX)*0.08;

    currentY += (targetY-currentY)*0.08;

cards.forEach((card,index)=>{

    const depth = .15+(index*.08);

    gsap.set(card,{

        x:currentX*depth,

        y:currentY*depth,

        rotation:baseRotation[index]+currentX*.03,

        rotationY:currentX*.04,

        rotationX:-currentY*.04,

        transformPerspective:1200

         });

    });
});
// Lerp

// Wiggle
cards.forEach((card)=>{

    gsap.to(card,{

        rotation:"+=1.5",

        repeat:-1,

        yoyo:true,

        duration:1.8,

        ease:"sine.inOut"

    });

});
// Wiggle END

// Drift
cards.forEach((card)=>{

    gsap.to(card,{

        x:"+=5",

        duration:3,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

});
// Drift

// Hover
cards.forEach(card=>{
card.addEventListener("mouseenter",()=>{

        gsap.to(card,{

        scale:1.08,

        z:80,

        boxShadow:"0 40px 80px rgba(0,0,0,.25)",

        duration:.4,

        ease:"power3.out"

    });

});

card.addEventListener("mouseleave",()=>{
        gsap.to(card,{

        scale:1,

        z:0,
        boxShadow:"0 15px 40px rgba(0,0,0,.15)",

        duration:.4,

        ease:"power3.out"

        });

    });

});
// Hover END
