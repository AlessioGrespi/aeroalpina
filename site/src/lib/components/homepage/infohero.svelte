<section class="hero">
    <div class="hero-content">
        <h1 class="main-heading">Welcome to Our Website</h1>
        <div class="grid">
            <div>
                <h2 class="little-heading">Heading 1</h2>
                <p class="companion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div>
                <h2 class="little-heading">Heading 2</h2>
                <p class="companion-text">Nullam a magna eget eros scelerisque dictum nec et lectus.</p>
            </div>
            <div>
                <h2 class="little-heading">Heading 3</h2>
                <p class="companion-text">In hac habitasse platea dictumst. Integer a nunc non ligula viverra pellentesque.</p>
            </div>
            <div>
                <h2 class="little-heading">Heading 4</h2>
                <p class="companion-text">Fusce interdum sapien id congue consectetur.</p>
            </div>
        </div>
    </div>
    <div class="hero-image">
        <img src="mountain2.jpg" alt="Hero Image">
    </div>
</section>

<style lang="scss">

.hero {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 50px;
            background-color: #f0f0f0;
        }

        /* Styling for the hero image */
        .hero img {
            max-width: 100%;
            height: auto;
            border: 1px solid #ddd;
        }

        /* Styling for the left content */
        .hero-content {
            width: 50%;
        }

        /* Styling for the main heading */
        .main-heading {
            font-size: 32px;
            margin-bottom: 20px;
        }

        /* Styling for the little headings */
        .little-heading {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        /* Styling for the companion text */
        .companion-text {
            font-size: 16px;
            margin-bottom: 20px;
        }
        
        /* Styling for the 2x2 grid */
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
</style>