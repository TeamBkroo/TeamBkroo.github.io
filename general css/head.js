document.write(
    `
    <div class="head">
    <div class="container">
        <a href="shopping cart.html"><img src="photos/icons/shopping cart.png" class="cart"></a>

        <div class="input">
            <input class="search-box" id="search-box" onkeyup="searchProduct()"
            placeholder="Search products.."></input>
            <ul class="list">
            <a href="products/phones.html"><li  class="prod">phone</li></a>
            <a href="products/fridge.html" ><li class="prod" >fridge</li></a>
            <a href="products/microwave.html" ><li class="prod">microwave</li></a>
            <a href="products/air conditioner.html" ><li class="prod">air conditioner</li></a>
            <a href="products/laptop.html" ><li class="prod">laptop</li></a>
            <a href="products/television.html" ><li class="prod">televison</li></a>
        </ul>
                    <div class="exit" onclick="del()">
                        <img src="photos/icons/exit.png">
                    </div>
                    <div class="search">
                        <img src="photos/icons/search.png">
                        
                    </div>
                
                
        </div>
            <script src="javascript/search.js"></script>

        <div class="buttons">
            <a href="login.html"><div class="button1">Login</div></a>
            <a href="signup.html"><div class="button2">Sign up</div></a>
            <a href="profile page.html"><img src="photos/icons/profile.png" class="profile"></a>
        </div>
 </div>
</div>
`
);