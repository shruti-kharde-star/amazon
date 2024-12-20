var product = {
        productName: "Boldfit Water Bottles Stainless Steel Water Bottle 1 Litre Steel Water Bottles for School, Office, Home, Gym 1 Litre Water Bottle for Men Leakproof, Rust free Steel Bottle -1000 ml Water Bottle Black",
        brandName: "Visit the Boldfit Store",
        image: "https://m.media-amazon.com/images/I/61RxcY0R52S._AC_SY200_.jpg",
        rating: 2,
        ratingCount: 3521,
        mrp: 266,
        price: 111,
        emiOption: 499,
        offers: [{
            offerTitle: "Bank Offer",
            offerDiscription: "Upto  34.90",
            moreDisc:"discount on select...",
            more: "4 offers"
        },
        {
            offerTitle: "Partner Offers",
            offerDiscription: "Get GST invoice and",
            moreDisc:"save up to 28% 0n...",
            more: "1 offer"
        },
        {
            offerTitle: "Partner Offers",
            offerDiscription: "Get GST invoice and",
            moreDisc:"save up to 28% 0n...",
            more: "1 offer"
        }
        ]
    }


    var image= document.querySelector("#image");
    image.style.backgroundImage= `url('${product.image}')`;


    document.querySelector("#productName").textContent=product.productName;

    document.querySelector("#brandName").textContent=product.brandName;

    document.querySelector("#rating").textContent=product.rating;

    for(var i=0;i<5;i++)
    {
        if(i<product.rating)
        {
           let star=document.createElement('i');
           star.className="ri-star-s-fill";
           document.querySelector("#starRating").appendChild(star);
        }
        else
        {
            let star=document.createElement('i');
            star.className="ri-star-s-line";
            document.querySelector("#starRating").appendChild(star);
        } 
    }

    document.querySelector("#ratingCount").textContent=`${product.ratingCount}  ratings`;

    var discountprice=((product.mrp-product.price)/product.mrp)*100;
    discountprice=parseInt(discountprice);
    console.log(discountprice);

    var discount=document.getElementById("discount");
    discount.textContent=`${-discountprice}% OFF`;

    document.querySelector("#price").textContent=` ₹${product.price}`;

    document.querySelector("#mrp").textContent=` M.R.P.${product.mrp}`;

    document.querySelector("#emi").textContent=`EMI starts at Rs${product.emiOption} per month.`;

    var offers = document.querySelector('#allOffers');
    
    product.offers.forEach(offersSelect => {
        var box = document.createElement('div');
        box.className = 'offers';
        
    
        var H4 = document.createElement('h4');
        box.appendChild(H4);
        H4.textContent = offersSelect.offerTitle;
    
        var H6 = document.createElement('h6');
        box.appendChild(H6);
        H6.textContent = offersSelect.offerDiscription;

        var H7 = document.createElement('h7');
        box.appendChild(H7);
        H7.textContent = offersSelect.moreDisc;
    
        var H5 = document.createElement('h5');
        box.appendChild(H5);
        H5.textContent = offersSelect.more;
        
        offers.appendChild(box);
    })

    document.querySelector('#productPrice').textContent = `₹${product.price}`;
    // document.querySelector("#sup").textContent=`00`;