const products = [
    { id: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMWlbDQYgxCo2A1vosXX0fkCSzLogRsqO1p2ZuqYcmA5c0pCR6_BrdCoKuoFKfzt1UOE&usqp=CAU',title: 'for kids' },
    { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ezQDYHyw4UvOZed5VurbiwMdUnOAykf6bA&s', title: 'for girls' },
    { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfw-kSfdNPS1olUA86w8uQGPLNvlZmu_Ar6Q&s', title: 'kids' },
    { id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bHPMpNVYosTZC42DR3Jj0rQXJ8Gq2TpPWA&s', title: 'boys' },
    { id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4Xh1Vh_x2CHDwb_gLNsamw-bWAJLmCJJIw&s', title: 'for both girls and boys' },
    { id: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7spOw4MnqPo9fEJ--KLXCsBcc2_MPOqTPGw&s', title: 'For Boys' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkouDUNW_CIk5n_jeU9VpuCS_xVL6q95WbA&s', title: 'For Boys' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8dOvnFV7yR7_PgMb69ymnPR14pgLuGpZGg&s', title: 'For both girls and boys' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxzrk10v3hV4Y0-S2T7L-VbthkOqbMB98gA&s', title: 'For Boys' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCvhkwOnPd-yX81PpelU_gXLfZ-SZ1V5llA&s', title: 'For Boys' },
    { id: 6, image: 'https://thumbs.dreamstime.com/z/dirty-clothes-ready-wash-pile-home-bathroom-42609950.jpg', title: 'For Boys' },
    { id: 6, image: 'https://media.istockphoto.com/id/157695721/photo/heap-of-jeans-before-laundry.jpg?s=2048x2048&w=is&k=20&c=3_5TULmpVnRIf5oOqppKkoxOO2krJoe2sPIWYgXMwTo=', title: 'For girls' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQkxPCJUXi6xmDzfFDQfapb2xMI648ZLrjVg&s', title: 'For Boys' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRgss3DuyTZpFb_onpo2qR08OuwCQ88ZEcg&s', title: 'For Boys' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTdNBQZYNIjXXvHF1aTOxjnFzx2Q5z-jCRA&s', title: 'For kids' },
    ];

let cart = [];
let orders = [];
let trackingInfo = [];

// Render product list
document.getElementById('root').innerHTML = products.map((item, index) => {
    const { image, title } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='image' src=${image} alt=${title}>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                
                <button onclick='addToCart(${index})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');

// Function to add items to cart
function addToCart(index) {
    cart.push({ ...products[index] });
    updateCart();
}

// Function to remove item from cart
function delElement(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to update cart
function  updateCart()
{
    let total=0; 
    document.getElementById('cart-item').innerHTML = cart.length === 0 ? 'Your cart is empty' : cart.map((item, index) =>{
       total+=item.price; 
        return `
         <div class='cart-item'>
                 <div class="cart-item-info">
                    <p>${item.title}</p>
<button onclick="delElement(${index})">Remove</button>
                </div>
                </div>
   `;
}).join('');}



     document.getElementById('cart-count').innerText = cart.length;


// Toggle cart dropdown visibility
function toggleCart() {
    const dropdown = document.getElementById('cart-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}
 

// Function to confirm the payment
function confirmdonation() {
    const DonationId = orders.length + 1;
    const DonationDate = new Date();
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(orderDate.getDate() + 7); // Delivery in 7 days
    const trackingNumber = `TRACK${Math.floor(Math.random() * 100000)}`; // Random tracking number
}

    orders.push({
        id: orderId,
        date: orderDate.toLocaleDateString(),
        deliveryDate: deliveryDate.toLocaleDateString(),
        trackingNumber
    });

    trackingInfo.push({
        id: trackingNumber,
        status: 'Shipped',
        shippingDate: orderDate.toLocaleDateString(),
        deliveryDate: deliveryDate.toLocaleDateString()
    });

     
    updateTrackingHistory();

    cart = []; // Clear the cart
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart()

// Update tracking history
function updateTrackingHistory() {
    const trackingHistoryItems = document.getElementById('tracking-history-items');
    trackingHistoryItems.innerHTML = trackingInfo.map(tracking => `
         
    `).join('');
}
// Optionally, close the success modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === document.getElementById('Donation-success-modal')) {
        closeDonationSuccessModal();
    }
}