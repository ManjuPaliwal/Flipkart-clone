//section 
 const shop = [
    {
        image :"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
        alt: "grocery",
        caption:"grocery"
    },
    {
        image:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
        alt:"mobile",
        caption:"mobile"
    },
    {
        image:"https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
        alt:"fashion",
        caption:"fashion"
    },
    {
        image:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
        alt:"electronics",
        caption:"electronics"
    },
    {
        image:"https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
        alt:"home",
        caption:"home"
    },
    {
        image:"https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
        alt:"appliances",
        caption:"appliances"
    },
    {
        image:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
        alt:"travel",
        caption:"travel"
    },
    {
        image:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
        alt:"topoffer",
        caption:"top Offer"
    },
    {
        image:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
        alt:"beauty toys & more",
        caption:"beauty,Toys & more"
    },
    {
        image:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
        alt:"two wheelers",
        caption:"two wheelers"
    }
   ]

    for(let i=0;i<shop.length;i++){
        const shopAnything = document.getElementById('shopAnything');
let ul = document.createElement('ul');
let li = document.createElement('li');
let img = document.createElement('img');
let caption = document.createElement('caption');

ul.className='ul';
li.className='list';
img.className='shopimg';


shopAnything.appendChild(ul);
ul.appendChild(li);
li.appendChild(img);
li.appendChild(caption);
        img.src=shop[i].image
    img.alt=shop[i].alt
    caption.textContent=shop[i].caption
    }


//image slide


const photos =[
    "https://rukminim1.flixcart.com/fk-p-flap/844/140/image/96eae9a967233937.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/2f82230751b42837.jpg?q=50",
    "https://rukminim1.flixcart.com/fk-p-flap/50/50/image/139cf181d98cdf97.jpg?q=50",
    "https://png.pngtree.com/thumb_back/fh260/back_our/20200630/ourmid/pngtree-cartoon-airplane-blue-sky-and-white-cloud-banner-background-image_342445.jpg"
]

const imgslide = document.getElementById('imgslide');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

let i =0;
imgslide.src=photos[i]
// console.log(imgslide.src);
btn2.addEventListener('click',function(){
    i++;
    if(i>photos.length-1){
        i=0;
    }
    imgslide.src=photos[i]
})
btn1.addEventListener('click',()=>{
    i--;
    if(i<0){
        i=photos.length-1
    }
    imgslide.src=photos[i]
})

setInterval(functionslide = ()=>{
    i++;
    if(i>photos.length-1){
       i=0;
   }
   imgslide.src=photos[i]
   
   },3000);

// electronics
             const electonics=[
                {
                    image:"https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70" ,
                    caption:'Top Mirrorless Cameras',
                    price:'From $1000'
                },
                {
                    image: "https://rukminim1.flixcart.com/image/200/200/xif0q/projector/k/h/n/i9-pro-max-hd-720p-10-e03i31-led-projector-egate-original-imaghhxfshbcbk55.jpeg?q=70" , 
                    caption:"Projectors",
                    price:   "From $9999"
                },
                {
                    image: "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70" ,
                    caption:"Printers",
                    price:   "From $3999"
                },
                {
                    image: "https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70" ,
                    caption:"Monitors",
                    price:   "From $7040"
                },
                {                  
                    image:"https://rukminim1.flixcart.com/image/200/200/kuczmvk0/cases-covers/back-cover/w/w/t/m-12954-colorcase-original-imag7g7knnn66wdh.jpeg?q=70" ,
                    caption:"Plain cases-covers",
                    price:   "From $1649"
                },
                {
                    image:"https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70" ,                   
                    caption:"Hair-Dryer",
                    price:   "From $1200"
                },
                {
                    image:"https://rukminim1.flixcart.com/image/200/200/kobspe80/power-bank/x/b/j/power-bank-dx09-b-holder-20000-mah-20000-dx09-b-holder-callmate-original-imag2tfbuzzaj3tc.jpeg?q=70" ,
                    caption:"Power-Bank",
                    price:   "From $999"
                },
                {
                    image: "https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70" ,               
                    caption:"Monitors",
                    price:   "From $10000"
                }
             ]


for(i=0;i<=electonics.length-1;i++){

let elecItem = document.getElementById('elecItem');
let ul = document.createElement('ul');
let li = document.createElement('li');
let img = document.createElement('img');
let caption = document.createElement('caption');
let price = document.createElement('price');
    
    img.className = 'elecimg';
    caption.className= 'caption';
    price.className='price';
    li.className='list'

    elecItem.appendChild(ul);
    ul.appendChild(li);
  li.appendChild(img);
  li.appendChild(caption);
 li.appendChild(price);

        img.src=electonics[i].image
    caption.textContent=electonics[i].caption
    price.textContent=electonics[i].price
}
  const electbtn1 = document.getElementById('elecbtn1')
  const electbtn2 = document.getElementById('elecbtn2')
  const elecItem = document.getElementById('elecItem')
  let right=400;
  let maxMargin=400;
  let jumpMargin=250;

electbtn1.addEventListener('click',(e)=>{
   
   if(right<=-maxMargin){
e.preventDefault();
   }
   else{
    right-=jumpMargin;
   }
   elecItem.style.marginLeft= right+"px";
   console.log(right);
}
)


electbtn2.addEventListener('click',(e)=>{
    if(right==0){
        e.preventDefault();
    }
    else if(right>=maxMargin){
        e.preventDefault();
    }
    else{
        right+=jumpMargin
    }
    elecItem.style.marginLeft=right+'px';
})



// Beauty food ,Toys & more


const beauty=[
    {
        image:"https://rukminim1.flixcart.com/image/200/200/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=70" ,
        caption:'Soft Toys',
        price:'From $300'
    },
    {
        image: "https://rukminim1.flixcart.com/image/200/200/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=70" , 
        caption:"Electric-cycle",
        price:   "Up to 45% Off"
    },
    {
        image: "https://rukminim1.flixcart.com/image/200/200/kdj4xow0/treadmill/b/g/c/ft098-steel-motorized-ft98-steel-motorized-motorized-fitkit-original-imafuerskytashcz.jpeg?q=70" ,
        caption:"Treadmill",
        price:   "From $5000"
    },
    {
        image: "https://rukminim1.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70" ,
        caption:"Electronics Cycle",
        price:   "From $2040"
    },
    {                  
        image:"https://rukminim1.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70" ,
        caption:"Two-Wheeler-Tyre",
        price:   "From $1649"
    },
    {
        image:"https://rukminim1.flixcart.com/image/200/200/kkvhea80/musical-keyboard/y/s/2/jrk661-juarez-original-imagy4e4bgaxdxxs.jpeg?q=70" ,                   
        caption:"Musical-Keyboard",
        price:   "Up to 70% Off"
    },
    {
        image:"https://rukminim1.flixcart.com/image/200/200/knhsgi80/racquet/a/0/u/g4-3-25-inches-g-force-3700-superlite-strung-1-g-force-superlite-original-imag25n4h7gjgrc2.jpeg?q=70" ,
        caption:"Racquet",
        price:   "From $999"
    },
    {
        image: "https://rukminim1.flixcart.com/image/200/200/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70" ,               
        caption:"Acoustic-Guitar",
        price:   "Up to 70% Off"
    }
 ]


 for(i=0;i<=beauty.length-1;i++){

    let beautyItem = document.getElementById('beautyItems');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let img = document.createElement('img');
    let caption = document.createElement('caption');
    let price = document.createElement('price');
        
        img.className = 'elecimg';
        caption.className= 'caption';
        price.className='price';
        li.className='list'
    
        beautyItem.appendChild(ul);
        ul.appendChild(li);
      li.appendChild(img);
      li.appendChild(caption);
     li.appendChild(price);
    
            img.src=beauty[i].image
        caption.textContent=beauty[i].caption
        price.textContent=beauty[i].price
    }
      const beautybtn1 = document.getElementById('beautybtn1')
      const beautybtn2 = document.getElementById('beautybtn2')
      const beautyItem = document.getElementById('beautyItems')
      let beautyright=400;
      let beautymaxMargin=400;
      let beautyjumpMargin=250;
    
    beautybtn1.addEventListener('click',(e)=>{
       
       if(beautyright<=-beautymaxMargin){
    e.preventDefault();
       }
       else{
        beautyright-=beautyjumpMargin;
       }
       beautyItem.style.marginLeft= beautyright+"px";
       console.log(beautyright);
    }
    )
    
    
    beautybtn2.addEventListener('click',(e)=>{
        if(beautyright==0){
            e.preventDefault();
        }
        else if(beautyright>=beautymaxMargin){
            e.preventDefault();
        }
        else{
            beautyright+=beautyjumpMargin;
        }
        beautyItem.style.marginLeft=beautyright+'px';
    })




    const women=[
        {
            image:"https://rukminim1.flixcart.com/image/200/200/ky3b0y80/precious-bangle-bracelet/j/s/8/vvs-adjustable-idb000192-joyalukkas-original-imagaebjdjxbmfwy.jpeg?q=70" ,
            caption:'bangle-bracelet-Armlets',
            price:'From $1000'
        },
        {
            image: "https://rukminim1.flixcart.com/image/200/200/kwzap3k0/lipstick/j/t/n/16-non-transfer-insta-beauty-waterproof-longlast-sensational-original-imag9jby47tukyz5.jpeg?q=70" , 
            caption:"lipstick",
            price:   "Up to 55% Off"
        },
        {
            image: "https://rukminim1.flixcart.com/image/200/200/kz1lle80/precious-bangle-bracelet/k/j/g/na-2-6-22kt-bm13026774-joyalukkas-original-imagb59auf7ffyts.jpeg?q=70" ,
            caption:"bangles",
            price:   "From $4000"
        },
        {
            image: "https://rukminim1.flixcart.com/image/612/612/kykgb680/dress/o/r/t/xl-western-dress-for-women-1021-latest-neck-net-design-original-imagarwgqq85xedm.jpeg?q=70" ,
            caption:"western-dress-for-women",
            price:   "Up to 35% Off"
        },
        {                  
            image:"https://rukminim1.flixcart.com/image/200/200/krdtlzk0/highlighter/k/c/v/iconic-highlighter-blossom-original-glow-plethora-original-imag56gtbrzdfapt.jpeg?q=70" ,
            caption:"Highlightere",
            price:   "From $1200"
        },
        {
            image:"https://rukminim1.flixcart.com/image/200/200/l2arp8w0/shopsy-t-shirt/s/3/0/s-nmp-try-this-original-imag5xe3sdhgg8sg.jpeg?q=70" ,                   
            caption:"t-shirt",
            price:   "Up to 70% Off"
        },
        {
            image:"https://rukminim1.flixcart.com/image/200/200/xif0q/precious-chain/i/r/r/bis-hallmark-20-inch-20-22kt-fk000115-2-5-20-candere-by-kalyan-original-imaghhp9zmdarwgq.jpeg?q=70" ,
            caption:"chain",
            price:   "From $999"
        },
        {
            image: "https://rukminim1.flixcart.com/image/200/200/k2gh30w0/sunglass/k/p/y/medium-waf2019-03-elligator-original-imafhry2uhysjbhd.jpeg?q=70" ,               
            caption:"sunglass",
            price:   "Up to 70% Off"
        }
     ]
    

     for(i=0;i<=women.length-1;i++){

        let womenItem = document.getElementById('womenItems');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let img = document.createElement('img');
        let caption = document.createElement('caption');
        let price = document.createElement('price');
            
            img.className = 'elecimg';
            caption.className= 'caption';
            price.className='price';
            li.className='list'
        
            womenItem.appendChild(ul);
            ul.appendChild(li);
          li.appendChild(img);
          li.appendChild(caption);
         li.appendChild(price);
        
                img.src=women[i].image
            caption.textContent=women[i].caption
            price.textContent=women[i].price
        }
          const womenbtn1 = document.getElementById('womenbtn1')
          const womenbtn2 = document.getElementById('womenbtn2')
          const womenItem = document.getElementById('womenItems')
          let womenright=400;
          let womenmaxMargin=400;
          let womenjumpMargin=250;
        
        womenbtn1.addEventListener('click',(e)=>{
           
           if(womenright<=-womenmaxMargin){
        e.preventDefault();
           }
           else{
            womenright-=womenjumpMargin;
           }
           womenItem.style.marginLeft= womenright+"px";
           console.log(womenright);
        }
        )
        
        
        womenbtn2.addEventListener('click',(e)=>{
            if(womenright==0){
                e.preventDefault();
            }
            else if(womenright>=womenmaxMargin){
                e.preventDefault();
            }
            else{
                womenright+=womenjumpMargin;
            }
            womenItem.style.marginLeft=womenright+'px';
        })





        const home=[
            {
                image:"https://rukminim1.flixcart.com/image/200/200/kz8qsnk0/mosquito-net/h/1/p/double-bed-polyester-adults-blue-mosquito-net-double-bed-nets-original-imagbagfgnfvnquj.jpeg?q=70" ,
                caption:'mosquito-net',
                price:'From $400'
            },
            {
                image: "https://rukminim1.flixcart.com/image/200/200/l1jmc280/mattress-protector/w/g/e/shmp723612gy-sleepyhead-original-imagd37rhpjqngzk.jpeg?q=70" , 
                caption:"mattress-protector",
                price:   "From $599"
            },
            {
                image: "https://rukminim1.flixcart.com/image/200/200/krtjgcw0/showpiece-figurine/q/8/d/sg-royalbox-original-imag5gy2rxubzkgq.jpeg?q=70" ,
                caption:"showpiece",
                price:   "Up to 60% Off"
            },
            {
                image: "https://rukminim1.flixcart.com/image/200/200/l5iid8w0/curtain/c/w/j/blue-blossoms-213-door-fs2pc001353dr-eyelet-fashion-string-original-imagg68893hsxpak.jpeg?q=70" ,
                caption:"curtain",
                price:   "From $1100"
            },
            {                  
                image:"https://rukminim1.flixcart.com/image/200/200/kgv5x8w0/slipcover/v/f/v/sfc-29-onterio-fab-original-imafxyen34zmpde3.jpeg?q=70" ,
                caption:"slipcover",
                price:   "From $1000"
            },
            {
                image:"https://rukminim1.flixcart.com/image/200/200/krs40i80/appliance-cover/i/r/b/exp-ac-44-exopick-original-imag5hh8azrpx5gx.jpeg?q=70" ,                   
                caption:"appliance-cover",
                price:   "Up to 70% Off"
            },
            {
                image:"https://rukminim1.flixcart.com/image/200/200/j5bceq80/diya/s/t/g/etl2042-etrendz-original-imaecayyx9nedubp.jpeg?q=70" ,
                caption:"diya",
                price:   "From $500"
            },
            {
                image: "https://rukminim1.flixcart.com/image/612/612/kjiwfbk0-0/clothesline/d/m/2/pvc-coated-steel-anti-rust-wire-rope-washing-line-clothesline-original-imafz2gvsmf5kbyt.jpeg?q=70" ,               
                caption:"clothesline",
                price:   "Up to 70% Off"
            }
         ]
        
    
         for(i=0;i<=home.length-1;i++){
    
            let homeItem = document.getElementById('homeItems');
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            let img = document.createElement('img');
            let caption = document.createElement('caption');
            let price = document.createElement('price');
                
                img.className = 'elecimg';
                caption.className= 'caption';
                price.className='price';
                li.className='list'
            
                homeItem.appendChild(ul);
                ul.appendChild(li);
              li.appendChild(img);
              li.appendChild(caption);
             li.appendChild(price);
            
                    img.src=home[i].image
                caption.textContent=home[i].caption
                price.textContent=home[i].price
            }
              const homebtn1 = document.getElementById('homebtn1')
              const homebtn2 = document.getElementById('homebtn2')
              const homeItem = document.getElementById('homeItems')
              let homeright=400;
              let homemaxMargin=400;
              let homejumpMargin=250;
            
            homebtn1.addEventListener('click',(e)=>{
               
               if(homeright<=-homemaxMargin){
            e.preventDefault();
               }
               else{
                homeright-=homejumpMargin;
               }
               homeItem.style.marginLeft= homeright+"px";
               console.log(homeright);
            }
            )
            
            
            homebtn2.addEventListener('click',(e)=>{
                if(homeright==0){
                    e.preventDefault();
                }
                else if(homeright>=homemaxMargin){
                    e.preventDefault();
                }
                else{
                    homeright+=homejumpMargin;
                }
                homeItem.style.marginLeft=homeright+'px';
            })





            const decor=[
                {
                    image:"https://rukminim1.flixcart.com/image/612/612/xif0q/showpiece-figurine/u/x/2/5-16-metal-lord-shiva-dancing-natraj-nataraja-statue-handcrafted-original-imaght8jfgfmvmuv.jpeg?q=70" ,
                    caption:'lord-shiva-dancing-natraj',
                    price:'From $1900'
                },
                {
                    image: "https://rukminim1.flixcart.com/image/612/612/k0tw13k0/rice-light/m/g/c/1-hdrl-new-star-fountain-01-home-delight-original-imafkgpndnvguzsk.jpeg?q=70" , 
                    caption:"star-fountain",
                    price:   "Up to 55% Off"
                },
                {
                    image: "https://rukminim1.flixcart.com/image/612/612/kwjkuq80/showpiece-figurine/u/o/q/4-4-handcrafted-baby-buddha-idol-lord-decorative-showpiece-original-imag97fzfg9zdh5k.jpeg?q=70" ,
                    caption:"handcrafted-baby-buddha",
                    price:   "From $400"
                },
                {
                    image: "https://rukminim1.flixcart.com/image/612/612/kz7bcsw0/artificial-plant/c/s/z/11-yes-4potss-ryme-original-imagb9zw4msbftaw.jpeg?q=70" ,
                    caption:"artificial-plant",
                    price:   "From $700"
                },
                {                  
                    image:"https://rukminim1.flixcart.com/image/612/612/kthjy4w0/garland/h/l/s/1-31360-ihandikart-original-imag6tgbnmzgwz3p.jpeg?q=70" ,
                    caption:"garland",
                    price:   "From $1000"
                },
                {
                    image:"https://rukminim1.flixcart.com/image/612/612/kiulxu80/showpiece-figurine/h/q/u/6pcs-set-miniature-fairy-princess-garden-decor-home-decoration-original-imafyjjtnwhuuhhp.jpeg?q=70" ,                   
                    caption:"showpiece-figurine",
                    price:   "Up to 70% Off"
                },
                {
                    image:"https://rukminim1.flixcart.com/image/612/612/xif0q/sticker/g/r/u/large-large-pvc-vinyl-sticker-1-60-ovsk9154-n-rangoli-original-imagh7aparqdgk9u.jpeg?q=70" ,
                    caption:"wall sticker",
                    price:   "From $350"
                },
                {
                    image: "https://rukminim1.flixcart.com/image/612/612/keykscw0/sticker/q/b/y/medium-panda-with-green-leaves-switch-board-sticker-10-ddsbs009-original-imafvgzhyrq9zbnr.jpeg?q=70" ,               
                    caption:"switch-board-sticker",
                    price:   "Up to 70% Off"
                }
             ]
            
        
             for(i=0;i<=decor.length-1;i++){
        
                let decorItem = document.getElementById('decorItems');
                let ul = document.createElement('ul');
                let li = document.createElement('li');
                let img = document.createElement('img');
                let caption = document.createElement('caption');
                let price = document.createElement('price');
                    
                    img.className = 'elecimg';
                    caption.className= 'caption';
                    price.className='price';
                    li.className='list'
                
                    decorItem.appendChild(ul);
                    ul.appendChild(li);
                  li.appendChild(img);
                  li.appendChild(caption);
                 li.appendChild(price);
                
                        img.src=decor[i].image
                    caption.textContent=decor[i].caption
                    price.textContent=decor[i].price
                }
                  const decorbtn1 = document.getElementById('decorbtn1')
                  const decorbtn2 = document.getElementById('decorbtn2')
                  const decorItem = document.getElementById('decorItems')
                  let decorright=400;
                  let decormaxMargin=400;
                  let decorjumpMargin=250;
                
                decorbtn1.addEventListener('click',(e)=>{
                   
                   if(decorright<=-decormaxMargin){
                e.preventDefault();
                   }
                   else{
                    decorright-=decorjumpMargin;
                   }
                   decorItem.style.marginLeft= decorright+"px";
                   console.log(decorright);
                }
                )
                
                
                decorbtn2.addEventListener('click',(e)=>{
                    if(decorright==0){
                        e.preventDefault();
                    }
                    else if(decorright>=decormaxMargin){
                        e.preventDefault();
                    }
                    else{
                        decorright+=decorjumpMargin;
                    }
                    decorItem.style.marginLeft=decorright+'px';
                })



const year =new Date();
const copyRight = document.getElementById('year')
copyRight.innerHTML= "&copy; 2007-"+year.getFullYear()+" Flipkart.com";